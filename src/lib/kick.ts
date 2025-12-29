/**
 * Kick API Helper
 * Integration with Kick.com streaming platform
 * API Documentation: https://dev.kick.com and https://docs.kick.com
 */

const KICK_CLIENT_ID = import.meta.env.KICK_CLIENT_ID;
const KICK_CLIENT_SECRET = import.meta.env.KICK_CLIENT_SECRET;
// Placeholder - update with actual channel slug
const KICK_CHANNEL_SLUG = import.meta.env.KICK_CHANNEL_SLUG || 'insanonetwork';

interface KickTokenResponse {
    access_token: string;
    expires_in: number;
    token_type: string;
}

interface KickLivestream {
    id: string;
    channel_id: string;
    session_title: string;
    created_at: string;
    viewer_count: number;
    thumbnail: {
        url: string;
    };
    category: {
        name: string;
    };
}

interface KickVideo {
    id: string;
    title: string;
    thumbnail: string;
    duration: number;
    view_count: number;
    created_at: string;
}

export interface KickData {
    isLive: boolean;
    channelSlug: string;
    liveTitle?: string;
    viewerCount?: string;
    category?: string;
    thumbnail?: string;
}

export interface KickVOD {
    id: string;
    title: string;
    thumbnail: string;
    duration: string;
    viewCount: number;
    publishedAt: string;
}

// Cache for the access token
let cachedToken: { token: string; expiresAt: number } | null = null;

/**
 * Get OAuth access token from Kick
 * Based on official Kick API documentation: https://docs.kick.com/getting-started/generating-tokens-oauth2-flow
 * Uses App Access Token endpoint with client_credentials grant type
 */
async function getAccessToken(): Promise<string | null> {
    // Check if we have valid cached token
    if (cachedToken && Date.now() < cachedToken.expiresAt) {
        return cachedToken.token;
    }

    // If credentials not configured, return null
    if (!KICK_CLIENT_ID || !KICK_CLIENT_SECRET) {
        console.warn('Kick credentials not configured');
        return null;
    }

    try {
        // Kick OAuth server is hosted on id.kick.com
        const response = await fetch('https://id.kick.com/oauth/token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams({
                client_id: KICK_CLIENT_ID,
                client_secret: KICK_CLIENT_SECRET,
                grant_type: 'client_credentials',
            }),
        });

        if (!response.ok) {
            const errorText = await response.text();
            console.error('Failed to get Kick access token:', response.status, errorText);
            return null;
        }

        const data: KickTokenResponse = await response.json();

        // Cache the token (expire 1 minute before actual expiry for safety)
        cachedToken = {
            token: data.access_token,
            expiresAt: Date.now() + (data.expires_in - 60) * 1000,
        };

        return data.access_token;
    } catch (error) {
        console.error('Error getting Kick access token:', error);
        return null;
    }
}

/**
 * Check if the channel is currently live
 * Note: Endpoint is placeholder - refer to actual Kick API docs
 */
export async function getKickLiveStatus(): Promise<KickData> {
    const fallbackData: KickData = {
        isLive: false,
        channelSlug: KICK_CHANNEL_SLUG,
    };

    const accessToken = await getAccessToken();
    if (!accessToken) {
        return fallbackData;
    }

    try {
        // Kick API host is api.kick.com
        const response = await fetch(
            `https://api.kick.com/public/v1/channels/${KICK_CHANNEL_SLUG}`,
            {
                headers: {
                    'Authorization': `Bearer ${accessToken}`,
                    'Accept': 'application/json',
                },
            }
        );

        if (!response.ok) {
            // Suppress 404 errors as they just mean channel is offline/not found for API
            // but player might still work
            if (response.status !== 404) {
                const errorText = await response.text();
                console.warn('Kick API warning:', response.status, errorText);
            }
            return fallbackData;
        }

        const data = await response.json();

        // Channel endpoint returns channel info with optional livestream data
        // Check for is_live flag or livestream object
        const isLive = data.is_live === true || (data.livestream && data.livestream.id);

        if (!isLive) {
            return fallbackData;
        }

        const livestream = data.livestream || data;

        return {
            isLive: true,
            channelSlug: KICK_CHANNEL_SLUG,
            liveTitle: livestream.session_title || livestream.title || data.slug,
            viewerCount: (livestream.viewer_count || data.viewer_count || 0).toString(),
            category: livestream.category?.name || data.category?.name,
            thumbnail: livestream.thumbnail?.url || data.profile_picture,
        };
    } catch (error) {
        console.error('Error fetching Kick channel data:', error);
        return fallbackData;
    }
}

/**
 * Get recent VODs from the channel
 * Note: Endpoint is placeholder - refer to actual Kick API docs
 */
export async function getKickVODs(count: number = 10): Promise<KickVOD[]> {
    const accessToken = await getAccessToken();
    if (!accessToken) {
        return [];
    }

    try {
        // Kick API host is api.kick.com
        const response = await fetch(
            `https://api.kick.com/public/v1/channels/${KICK_CHANNEL_SLUG}/videos?limit=${count}`,
            {
                headers: {
                    'Authorization': `Bearer ${accessToken}`,
                    'Accept': 'application/json',
                },
            }
        );

        if (!response.ok) {
            console.error('Failed to get Kick VODs:', response.status);
            return [];
        }

        const data = await response.json();
        const videos: KickVideo[] = data.videos || data || [];

        return videos.map(video => ({
            id: video.id,
            title: video.title,
            thumbnail: video.thumbnail,
            duration: formatDuration(video.duration),
            viewCount: video.view_count,
            publishedAt: video.created_at,
        }));
    } catch (error) {
        console.error('Error fetching Kick VODs:', error);
        return [];
    }
}

/**
 * Format duration from seconds to HH:MM:SS or MM:SS
 */
function formatDuration(seconds: number): string {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    if (hours > 0) {
        return `${hours}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }
    return `${minutes}:${secs.toString().padStart(2, '0')}`;
}

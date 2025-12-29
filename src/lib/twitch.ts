/**
 * Twitch API Helper
 * Fetches stream status and latest VOD for a Twitch channel
 */

const TWITCH_CLIENT_ID = import.meta.env.TWITCH_CLIENT_ID;
const TWITCH_CLIENT_SECRET = import.meta.env.TWITCH_CLIENT_SECRET;
const TWITCH_CHANNEL = 'insanonetwork';

interface TwitchTokenResponse {
    access_token: string;
    expires_in: number;
    token_type: string;
}

interface TwitchStream {
    id: string;
    user_id: string;
    user_login: string;
    user_name: string;
    game_name: string;
    title: string;
    viewer_count: number;
    started_at: string;
    thumbnail_url: string;
}

interface TwitchVideo {
    id: string;
    user_id: string;
    user_login: string;
    user_name: string;
    title: string;
    description: string;
    created_at: string;
    published_at: string;
    url: string;
    thumbnail_url: string;
    duration: string;
    view_count: number;
}

interface TwitchUser {
    id: string;
    login: string;
    display_name: string;
}

export interface TwitchEmbedData {
    isLive: boolean;
    channelName: string;
    streamTitle?: string;
    viewerCount?: number;
    gameName?: string;
    latestVideoId?: string;
    latestVideoTitle?: string;
    latestVideoThumbnail?: string;
}

export interface TwitchVOD {
    id: string;
    title: string;
    thumbnail: string;
    duration: string;
    viewCount: number;
    publishedAt: string;
    url: string;
}

// Cache for the access token
let cachedToken: { token: string; expiresAt: number } | null = null;

/**
 * Get an app access token from Twitch
 */
async function getAccessToken(): Promise<string> {
    // Check if we have a valid cached token
    if (cachedToken && Date.now() < cachedToken.expiresAt) {
        return cachedToken.token;
    }

    const response = await fetch('https://id.twitch.tv/oauth2/token', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
            client_id: TWITCH_CLIENT_ID,
            client_secret: TWITCH_CLIENT_SECRET,
            grant_type: 'client_credentials',
        }),
    });

    if (!response.ok) {
        throw new Error(`Failed to get Twitch access token: ${response.status}`);
    }

    const data: TwitchTokenResponse = await response.json();

    // Cache the token (expire 1 hour before actual expiry for safety)
    cachedToken = {
        token: data.access_token,
        expiresAt: Date.now() + (data.expires_in - 3600) * 1000,
    };

    return data.access_token;
}

/**
 * Get user ID from username
 */
async function getUserId(accessToken: string): Promise<string | null> {
    const response = await fetch(
        `https://api.twitch.tv/helix/users?login=${TWITCH_CHANNEL}`,
        {
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Client-Id': TWITCH_CLIENT_ID,
            },
        }
    );

    if (!response.ok) {
        console.error('Failed to get user ID:', response.status);
        return null;
    }

    const data = await response.json();
    return data.data?.[0]?.id || null;
}

/**
 * Check if the channel is currently live
 */
async function getStreamStatus(accessToken: string): Promise<TwitchStream | null> {
    const response = await fetch(
        `https://api.twitch.tv/helix/streams?user_login=${TWITCH_CHANNEL}`,
        {
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Client-Id': TWITCH_CLIENT_ID,
            },
        }
    );

    if (!response.ok) {
        console.error('Failed to get stream status:', response.status);
        return null;
    }

    const data = await response.json();
    return data.data?.[0] || null;
}

/**
 * Get the latest VOD from the channel
 */
async function getLatestVideo(accessToken: string, userId: string): Promise<TwitchVideo | null> {
    const response = await fetch(
        `https://api.twitch.tv/helix/videos?user_id=${userId}&first=1&type=archive`,
        {
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Client-Id': TWITCH_CLIENT_ID,
            },
        }
    );

    if (!response.ok) {
        console.error('Failed to get latest video:', response.status);
        return null;
    }

    const data = await response.json();
    return data.data?.[0] || null;
}

/**
 * Main function to get Twitch embed data
 */
export async function getTwitchEmbedData(): Promise<TwitchEmbedData> {
    // Default fallback data
    const fallbackData: TwitchEmbedData = {
        isLive: false,
        channelName: TWITCH_CHANNEL,
        latestVideoId: '2643470685', // Fallback video ID
    };

    // Check if credentials are configured
    if (!TWITCH_CLIENT_ID || !TWITCH_CLIENT_SECRET) {
        console.warn('Twitch credentials not configured, using fallback');
        return fallbackData;
    }

    try {
        const accessToken = await getAccessToken();

        // Check if live
        const stream = await getStreamStatus(accessToken);

        if (stream) {
            return {
                isLive: true,
                channelName: TWITCH_CHANNEL,
                streamTitle: stream.title,
                viewerCount: stream.viewer_count,
                gameName: stream.game_name,
            };
        }

        // Not live, get latest VOD
        const userId = await getUserId(accessToken);
        if (!userId) {
            return fallbackData;
        }

        const latestVideo = await getLatestVideo(accessToken, userId);

        return {
            isLive: false,
            channelName: TWITCH_CHANNEL,
            latestVideoId: latestVideo?.id || fallbackData.latestVideoId,
            latestVideoTitle: latestVideo?.title,
            latestVideoThumbnail: latestVideo?.thumbnail_url
                ?.replace('%{width}', '640')
                .replace('%{height}', '360'),
        };
    } catch (error) {
        console.error('Error fetching Twitch data:', error);
        return fallbackData;
    }
}
/**
 * Get multiple VODs from the channel
 */
export async function getTwitchVODs(count: number = 10): Promise<TwitchVOD[]> {
    // Check if credentials are configured
    if (!TWITCH_CLIENT_ID || !TWITCH_CLIENT_SECRET) {
        console.warn('Twitch credentials not configured');
        return [];
    }

    try {
        const accessToken = await getAccessToken();
        const userId = await getUserId(accessToken);

        if (!userId) {
            return [];
        }

        const response = await fetch(
            `https://api.twitch.tv/helix/videos?user_id=${userId}&first=${count}&type=archive`,
            {
                headers: {
                    'Authorization': `Bearer ${accessToken}`,
                    'Client-Id': TWITCH_CLIENT_ID,
                },
            }
        );

        if (!response.ok) {
            console.error('Failed to get VODs:', response.status);
            return [];
        }

        const data = await response.json();
        const videos: TwitchVideo[] = data.data || [];

        return videos.map(video => ({
            id: video.id,
            title: video.title,
            thumbnail: video.thumbnail_url
                ?.replace('%{width}', '320')
                .replace('%{height}', '180') || '',
            duration: video.duration,
            viewCount: video.view_count,
            publishedAt: video.published_at,
            url: video.url,
        }));
    } catch (error) {
        console.error('Error fetching Twitch VODs:', error);
        return [];
    }
}

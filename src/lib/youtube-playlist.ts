/**
 * YouTube Playlist API Helper
 * Fetches playlist videos and channel videos for the video media section
 */

const YOUTUBE_API_KEY = import.meta.env.YOUTUBE_API_KEY;
const YOUTUBE_CHANNEL_ID = 'UC1lMa3YpykRzHQ1M4J_TMXw';
// Placeholder - will be updated when user provides the actual playlist ID
const YOUTUBE_PLAYLIST_ID = import.meta.env.YOUTUBE_PLAYLIST_ID || 'PLrAXtmErZgOeiKm4sgNOknGvNjby9efdf';

interface YouTubeVideo {
    id: string;
    title: string;
    description: string;
    thumbnail: string;
    publishedAt: string;
    duration?: string;
}

interface YouTubePlaylistResponse {
    items: Array<{
        snippet: {
            resourceId: { videoId: string };
            title: string;
            description: string;
            thumbnails: {
                medium: { url: string };
                high: { url: string };
            };
            publishedAt: string;
        };
    }>;
    pageInfo: {
        totalResults: number;
    };
}

interface YouTubeSearchResponse {
    items: Array<{
        id: { videoId: string };
        snippet: {
            title: string;
            description: string;
            thumbnails: {
                medium: { url: string };
                high: { url: string };
            };
            publishedAt: string;
        };
    }>;
}

export interface YouTubePlaylistData {
    courseVideos: YouTubeVideo[];
    moreVideos: YouTubeVideo[];
}

/**
 * Get videos from a specific playlist
 */
async function getPlaylistVideos(playlistId: string, maxResults: number = 10): Promise<YouTubeVideo[]> {
    if (!YOUTUBE_API_KEY) {
        console.warn('YouTube API key not configured');
        return [];
    }

    try {
        const url = new URL('https://www.googleapis.com/youtube/v3/playlistItems');
        url.searchParams.set('part', 'snippet');
        url.searchParams.set('playlistId', playlistId);
        url.searchParams.set('maxResults', maxResults.toString());
        url.searchParams.set('key', YOUTUBE_API_KEY);

        const response = await fetch(url.toString());

        if (!response.ok) {
            console.error('Failed to fetch playlist videos:', response.status);
            return [];
        }

        const data: YouTubePlaylistResponse = await response.json();

        return data.items.map(item => ({
            id: item.snippet.resourceId.videoId,
            title: item.snippet.title,
            description: item.snippet.description,
            thumbnail: item.snippet.thumbnails.high?.url || item.snippet.thumbnails.medium?.url,
            publishedAt: item.snippet.publishedAt,
        }));
    } catch (error) {
        console.error('Error fetching playlist videos:', error);
        return [];
    }
}

/**
 * Get recent videos from the channel (random selection)
 */
async function getChannelVideos(maxResults: number = 10): Promise<YouTubeVideo[]> {
    if (!YOUTUBE_API_KEY) {
        console.warn('YouTube API key not configured');
        return [];
    }

    try {
        const url = new URL('https://www.googleapis.com/youtube/v3/search');
        url.searchParams.set('part', 'snippet');
        url.searchParams.set('channelId', YOUTUBE_CHANNEL_ID);
        url.searchParams.set('order', 'date');
        url.searchParams.set('type', 'video');
        url.searchParams.set('maxResults', maxResults.toString());
        url.searchParams.set('key', YOUTUBE_API_KEY);

        const response = await fetch(url.toString());

        if (!response.ok) {
            console.error('Failed to fetch channel videos:', response.status);
            return [];
        }

        const data: YouTubeSearchResponse = await response.json();

        return data.items.map(item => ({
            id: item.id.videoId,
            title: item.snippet.title,
            description: item.snippet.description,
            thumbnail: item.snippet.thumbnails.high?.url || item.snippet.thumbnails.medium?.url,
            publishedAt: item.snippet.publishedAt,
        }));
    } catch (error) {
        console.error('Error fetching channel videos:', error);
        return [];
    }
}

/**
 * Main function to get all YouTube data for the playlist section
 */
export async function getYouTubePlaylistData(): Promise<YouTubePlaylistData> {
    const [courseVideos, moreVideos] = await Promise.all([
        getPlaylistVideos(YOUTUBE_PLAYLIST_ID, 10),
        getChannelVideos(10),
    ]);

    return {
        courseVideos,
        moreVideos,
    };
}

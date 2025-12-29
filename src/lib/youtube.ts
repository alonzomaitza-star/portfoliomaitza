/**
 * YouTube API Helper
 * Checks if a YouTube channel is currently live streaming
 */

const YOUTUBE_API_KEY = import.meta.env.YOUTUBE_API_KEY;
const YOUTUBE_CHANNEL_ID = 'UC1lMa3YpykRzHQ1M4J_TMXw';

interface YouTubeLiveStream {
    kind: string;
    etag: string;
    id: {
        kind: string;
        videoId: string;
    };
    snippet: {
        publishedAt: string;
        channelId: string;
        title: string;
        description: string;
        thumbnails: {
            default: { url: string; width: number; height: number };
            medium: { url: string; width: number; height: number };
            high: { url: string; width: number; height: number };
        };
        channelTitle: string;
        liveBroadcastContent: string;
    };
}

interface YouTubeSearchResponse {
    kind: string;
    etag: string;
    pageInfo: {
        totalResults: number;
        resultsPerPage: number;
    };
    items: YouTubeLiveStream[];
}

export interface YouTubeData {
    isLive: boolean;
    liveVideoId?: string;
    liveVideoTitle?: string;
    liveThumbnail?: string;
    channelId: string;
}

/**
 * Check if the YouTube channel is currently live
 */
export async function getYouTubeLiveStatus(): Promise<YouTubeData> {
    // Default fallback data
    const fallbackData: YouTubeData = {
        isLive: false,
        channelId: YOUTUBE_CHANNEL_ID,
    };

    // Check if API key is configured
    if (!YOUTUBE_API_KEY) {
        console.warn('YouTube API key not configured');
        return fallbackData;
    }

    try {
        // Search for live broadcasts on the channel
        const searchUrl = new URL('https://www.googleapis.com/youtube/v3/search');
        searchUrl.searchParams.set('part', 'snippet');
        searchUrl.searchParams.set('channelId', YOUTUBE_CHANNEL_ID);
        searchUrl.searchParams.set('eventType', 'live');
        searchUrl.searchParams.set('type', 'video');
        searchUrl.searchParams.set('key', YOUTUBE_API_KEY);

        const response = await fetch(searchUrl.toString());

        if (!response.ok) {
            console.error('YouTube API request failed:', response.status, await response.text());
            return fallbackData;
        }

        const data: YouTubeSearchResponse = await response.json();

        // Check if there are any live streams
        if (data.items && data.items.length > 0) {
            const liveStream = data.items[0];
            return {
                isLive: true,
                liveVideoId: liveStream.id.videoId,
                liveVideoTitle: liveStream.snippet.title,
                liveThumbnail: liveStream.snippet.thumbnails.high.url,
                channelId: YOUTUBE_CHANNEL_ID,
            };
        }

        return fallbackData;
    } catch (error) {
        console.error('Error fetching YouTube live status:', error);
        return fallbackData;
    }
}

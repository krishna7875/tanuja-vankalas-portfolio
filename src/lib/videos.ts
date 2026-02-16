export interface Video {
    id: string;
    title: string;
    description: string;
    thumbnail: string;
    youtubeId: string;
}

export const videos: Video[] = [
    {
        id: "showreel",
        title: "Acting Showreel 2025",
        description: "A compilation of dramatic and comedic performances.",
        thumbnail: "/images/thumbnails/placeholder.svg",
        youtubeId: "dQw4w9WgXcQ", // Placeholder ID (Rick Roll - classic test) - User should replace
    },
    {
        id: "hindi-audition",
        title: "Hindi Monologue",
        description: "Emotional sequence from a recent audition.",
        thumbnail: "/images/thumbnails/placeholder.svg",
        youtubeId: "M7lc1UVf-VE", // Placeholder ID (YouTube Developers)
    },
    {
        id: "marathi-audition",
        title: "Marathi Serial Scene",
        description: "Performance clip from 'Shubh Shravanii'.",
        thumbnail: "/images/thumbnails/placeholder.svg",
        youtubeId: "ScMzIvxBSi4", // Placeholder ID
    },
    {
        id: "commercial",
        title: "Commercial Work",
        description: "Featured in national TV advertisement campaign.",
        thumbnail: "/images/thumbnails/placeholder.svg",
        youtubeId: "LXb3EKWsInQ", // Placeholder ID
    }
];

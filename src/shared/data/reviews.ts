export interface Review {
    id: string;
    author: string;
    rating: number;
    title: string;
    content: string;
    date: string;
    version?: string;
    country?: string;
    verified?: boolean;
}

export const reviews: Review[] = [
    {
        id: "review1",
        author: "Marks",
        rating: 5,
        title: "Does the job perfectly",
        content: "needed subtitles for international zoom calls. This works great. Fast, correct, easy to use. Free their is generous. Recommended",
        date: "Tue, Feb 10, 2026",
        version: "1.1.1.0",
        country: "Netherlands",
        verified: true,
    },
    {
        id: "review2",
        author: "andrejs",
        rating: 5,
        title: "Essential for international calls",
        content: "StreamVox delivers lightning fast translation exactly as promised. I use it for business conferences, and the low latency makes conversations feel natural. A must-have app for Windows users.",
        date: "Sun, Feb 01, 2026",
        version: "1.1.0.0",
        country: "Russia",
        verified: true,
    },
    {
        id: "review3",
        author: "Sarah J.",
        rating: 5,
        title: "Incredible accuracy",
        content: "I was skeptical at first, but the real-time translation is spot on. It helps me watch anime without waiting for subs!",
        date: "Fri, Jan 28, 2026",
        version: "1.0.9.0",
        country: "USA",
        verified: true,
    }
];

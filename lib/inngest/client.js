import { Inngest } from "inngest";

// Create a client to send and receive events
export const inngest = new Inngest({
    id: "careerpilot", name: "Career Pilot", credentials: {
        gemini: {
            apiKey: {
                apiKey: process.env.GEMINI_API_KEY,
            },
        }
    }
});

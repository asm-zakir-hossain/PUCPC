import { ActivityPost } from "@/types";

export const mockActivityPosts: ActivityPost[] = [
  {
    id: "post-1",
    title: "PUCPC Intra-University Programming Contest 2026",
    content: "Registration is now open for the biggest programming contest of the year! Form a team of 3 and prove your problem-solving skills. Exciting prizes await the champions! Check the Events section for more details.",
    images: [
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&q=80&w=1200",
    ],
    created_at: new Date(Date.now() - 1000 * 60 * 60 * 2).toISOString(), // 2 hours ago
    created_by: "Admin Team",
  },
  {
    id: "post-2",
    title: "Workshop: Introduction to Dynamic Programming",
    content: "Thank you to everyone who attended today's session on Dynamic Programming! We covered memoization, tabulation, and solved classic problems like Knapsack and LCS. Slides will be available in the resources section soon.",
    images: [
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&q=80&w=1200",
    ],
    created_at: new Date(Date.now() - 1000 * 60 * 60 * 48).toISOString(), // 2 days ago
    created_by: "Training Coordinator",
  },
  {
    id: "post-3",
    title: "Welcome to the New Session!",
    content: "The Prime University Computer Programming Club is thrilled to welcome all new students. We have an exciting year planned with weekly training classes, regular contests, and project showcases. Join our Facebook group to stay updated.",
    images: [],
    created_at: new Date(Date.now() - 1000 * 60 * 60 * 24 * 5).toISOString(), // 5 days ago
    created_by: "President",
  }
];

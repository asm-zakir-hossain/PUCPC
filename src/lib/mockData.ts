import { ActivityPost, Achievement, ClubEvent } from "@/types";

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

export const mockEvents: ClubEvent[] = [
  {
    id: "evt-1",
    title: "PUCPC Intra-University Programming Contest 2026",
    type: "upcoming",
    date: "2026-05-15T10:00:00.000Z",
    description: "The biggest programming contest of the year is here! Form a team of 3 and prove your problem-solving skills. Exciting prizes await the champions. Open to all current students.",
    images: [],
    registration_link: "https://docs.google.com/forms",
  },
  {
    id: "evt-2",
    title: "Advanced Data Structures Workshop",
    type: "upcoming",
    date: "2026-05-05T14:00:00.000Z",
    description: "Join us for an intensive workshop on advanced data structures, focusing on Segment Trees and Fenwick Trees. Perfect for intermediate competitive programmers.",
    images: [],
    registration_link: "https://docs.google.com/forms",
  },
  {
    id: "evt-3",
    title: "CodeRush Hackathon 2025",
    type: "past",
    date: "2025-10-20T09:00:00.000Z",
    description: "A 24-hour hackathon where teams built innovative solutions for campus problems. Congratulations to team 'Code Crafters' for winning first place!",
    images: [
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=1200",
    ],
  },
  {
    id: "evt-4",
    title: "Intro to Competitive Programming Seminar",
    type: "past",
    date: "2025-09-10T15:00:00.000Z",
    description: "An introductory seminar for freshmen to get started with competitive programming. We covered basic algorithmic paradigms and C++ STL.",
    images: [
      "https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&q=80&w=1200",
    ],
  }
];

export const mockAchievements: Achievement[] = [
  {
    id: "ach-1",
    contest_name: "ICPC Asia Dhaka Regional Contest 2025",
    rank: "Honorable Mention",
    team_name: "PUCPC_RuntimeTerror",
    participants: ["Arif Hossain", "Mehedi Hasan", "Nafis Ahmed"],
    date: "2025-11-15T00:00:00.000Z",
    image: "https://images.unsplash.com/photo-1561489401-fc2876ced162?auto=format&fit=crop&q=80&w=1200",
    is_featured: true,
  },
  {
    id: "ach-2",
    contest_name: "National Hackathon 2025",
    rank: "1st Runner Up",
    team_name: "Code Crafters",
    participants: ["Sadia Islam", "Rahim Uddin"],
    date: "2025-08-20T00:00:00.000Z",
  },
  {
    id: "ach-3",
    contest_name: "NCPC 2024",
    rank: "Top 50",
    team_name: "PUCPC_Ignite",
    participants: ["Zakir Hossain", "Tariqul Islam", "Fahim Faysal"],
    date: "2024-12-10T00:00:00.000Z",
  }
];

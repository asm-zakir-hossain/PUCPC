import { ActivityPost, Achievement, ClubEvent, Member, Resource } from "@/types";

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

export const mockMembers: Member[] = [
  {
    id: "adv-1",
    name: "Dr. Syed Akhter Hossain",
    role: "Chief Advisor",
    photo: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=400",
    type: "advisor",
    batch: "Faculty",
  },
  {
    id: "adv-2",
    name: "Prof. Anisur Rahman",
    role: "Faculty Sponsor",
    photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400",
    type: "advisor",
    batch: "Faculty",
  },
  { id: "mem-1", name: "Zakir Hossain", role: "President", photo: "/committee-current/image34.png", type: "current", batch: "51st Batch" },
  { id: "mem-2", name: "Tariqul Islam", role: "Vice President", photo: "/committee-current/image35.png", type: "current", batch: "51st Batch" },
  { id: "mem-3", name: "Sadia Rahman", role: "General Secretary", photo: "/committee-current/image36.png", type: "current", batch: "52nd Batch" },
  { id: "mem-4", name: "Mehedi Hasan", role: "Joint Secretary", photo: "/committee-current/image37.png", type: "current", batch: "52nd Batch" },
  { id: "mem-5", name: "Arif Hossain", role: "Organizing Secretary", photo: "/committee-current/image38.png", type: "current", batch: "52nd Batch" },
  { id: "mem-6", name: "Nafis Ahmed", role: "Treasurer", photo: "/committee-current/image39.png", type: "current", batch: "53rd Batch" },
  { id: "mem-7", name: "Jane Doe", role: "Assistant Treasurer", photo: "/committee-current/image40.png", type: "current", batch: "53rd Batch" },
  { id: "mem-8", name: "John Smith", role: "Event Coordinator", photo: "/committee-current/image41.png", type: "current", batch: "53rd Batch" },
  { id: "mem-9", name: "Alice Johnson", role: "Public Relations Officer", photo: "/committee-current/image42.png", type: "current", batch: "54th Batch" },
  { id: "mem-10", name: "Bob Williams", role: "Assistant PRO", photo: "/committee-current/image43.png", type: "current", batch: "54th Batch" },
  { id: "mem-11", name: "Rahim Uddin", role: "Content Writer", photo: "/committee-current/image44.png", type: "current", batch: "54th Batch" },
  { id: "mem-12", name: "Fahim Faysal", role: "Graphics Designer", photo: "/committee-current/image45.png", type: "current", batch: "54th Batch" },
  { id: "mem-13", name: "Sadia Islam", role: "Lead Developer", photo: "/committee-current/image46.png", type: "current", batch: "53rd Batch" },
  {
    id: "mem-4",
    name: "Arif Hossain",
    role: "President",
    session: "2024-2025",
    photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400",
    type: "previous",
    batch: "48th Batch"
  },
  {
    id: "mem-5",
    name: "Nafis Ahmed",
    role: "General Secretary",
    session: "2024-2025",
    type: "previous",
    batch: "49th Batch"
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

export const mockResources: Resource[] = [
  {
    id: "res-1",
    title: "Codeforces",
    description: "The premier competitive programming platform. Participate in global contests and solve a vast archive of problems.",
    link: "https://codeforces.com/",
    category: "platform",
  },
  {
    id: "res-2",
    title: "LeetCode",
    description: "Excellent platform for mastering data structures, algorithms, and preparing for technical interviews.",
    link: "https://leetcode.com/",
    category: "platform",
  },
  {
    id: "res-3",
    title: "CP-Algorithms",
    description: "Comprehensive tutorials on algorithms and data structures commonly used in competitive programming.",
    link: "https://cp-algorithms.com/",
    category: "tutorial",
  },
  {
    id: "res-4",
    title: "USACO Guide",
    description: "A free collection of curated, high-quality competitive programming resources created by finalists.",
    link: "https://usaco.guide/",
    category: "tutorial",
  },
  {
    id: "res-5",
    title: "C++ Reference",
    description: "The complete reference for the C++ standard library, essential for STL mastery.",
    link: "https://en.cppreference.com/",
    category: "tool",
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

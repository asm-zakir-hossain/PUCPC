import { ActivityPost, Achievement, ClubEvent, Member, Resource } from "@/types";

export const mockActivityPosts: ActivityPost[] = [
  {
    id: "post-batch-261",
    title: "🚀 Programming Club Initiative for Batch 261 💻",
    content: "On behalf of the Prime University Computer Programming Club, we are conducting programming classes for Batch 261st, held 2 days per week. The complete C Programming course (Structured Programming Club) has been structured into 24 well-organized modules to ensure step-by-step learning and a strong foundation.\n\nOur dedicated club members and Convener are taking the classes with great effort and enthusiasm. We are happy to see that the students of Batch 261st are attending regularly, actively participating, and steadily building their programming fundamentals. The class effective from 5th January, 2026.\n\nTogether, we are shaping a stronger coding culture and preparing future problem solvers! 💡🔥",
    images: [
      "/261-batch/643885111_1533114188818724_9213690476030548659_n.jpg",
      "/261-batch/645357075_1533114432152033_5218285779930897048_n.jpg",
      "/261-batch/646364799_1533114462152030_3702397076097531380_n.jpg",
      "/261-batch/646368683_1533114388818704_5838882919240314238_n.jpg",
      "/261-batch/646369892_1533114242152052_1989562754221341192_n.jpg",
      "/261-batch/646375848_1533114345485375_844996150938046289_n.jpg",
      "/261-batch/646379936_1533114508818692_157331466989560609_n.jpg",
      "/261-batch/646380568_1533114298818713_5484483816111185742_n.jpg"
    ],
    created_at: new Date().toISOString(),
    created_by: "Admin Team",
  },
  {
    id: "post-highlights-2025",
    title: "🎬 Prime University Computer Programming Club – 2025 Highlights!",
    content: "The Department of CSE proudly presents a demo video showcasing all the exciting activities of PUCPC in 2025!\n\nHighlights include:\nICPC, IUPC, & IUCPC participation 🏆\nMonthly Programming Contests 💻\nJunior Programming Contests 👨‍💻\nPrize Giving Ceremonies 🥇\nHackathons & Training sessions for freshers by our club trainers 🚀\n\nWatch the video to relive a year full of coding, learning, and competitions!\nPromosite: https://pucpc-activity.netlify.app/\nMade by : Md. Rashed Hossain, General Secretary, PUCPC\nSupported by: Md. Mahfuzur Rahman, Convener, PUCPC",
    images: [],
    video_url: "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1455001893031803&show_text=0",
    created_at: new Date().toISOString(),
    created_by: "Admin Team",
  },
  {
    id: "post-01",
    title: "PUCPC Excels at BUBT Inter University Collaboration Programming Contest",
    content: "Two talented teams from the Prime University Computer Programming Club (PUCPC), Dept. of CSE, proudly participated in the BUBT Inter University Collaboration Programming Contest (BIUCPC) held today. Among the 75 participating teams, Superm4n_FanClub secured an impressive 28th position, while Prime_failed also delivered a good performance—showcasing skill, teamwork, and determination.\n\n💥 Superm4n_FanClub\n👤 Md. Rashed Hossain (Batch 62)\n👤 Hamim Reza (Batch 62)\n👤 Zakir Hossain (Batch 62)\n\n💥 Prime_failed\n👤 Md. Tamim Khan (Batch 59)\n👤 Saiful Islam Nirob (Batch 63)\n👤 Omor Fariq (Batch 63)\n\nA huge round of appreciation to both teams for representing Prime University with dedication, consistency, and a powerful competitive spirit. Every contest sharpens our abilities, and every experience strengthens our CPC family. 🚀🔥\n\nWe are truly proud of our champions—\nLet’s continue to push forward, learn more, and grow together! ❤️",
    images: [
      "/colab-contest/590901316_1442380907892053_4241345379952051079_n.jpg",
      "/colab-contest/591235655_1442407704556040_2253543201387973556_n.jpg",
      "/colab-contest/592026386_1442380981225379_5123636190788094188_n.jpg"
    ],
    created_at: new Date().toISOString(),
    created_by: "Admin Team",
  },
  {
    id: "post-00",
    title: "BUET CSE Fest 2026: Prime University Represents at IUPC",
    content: "The Department of Computer Science & Engineering, Prime University proudly represented the university at the Inter University Programming Contest, powered by Phitron | Prime Now Presents BUET CSE Fest 2026.\n\n🔹 Team Name: PrimeU_Supernova\n🔹 Team Members:\n• Md Rashed Hossain (62nd Batch)\n• Md Zakir Hossain (62nd Batch)\n• Saiful Islam Nirob (63rd Batch)\n\nThroughout the contest, the team showcased commendable problem-solving skills, consistency, and teamwork in a highly competitive environment. Their performance reflects strong dedication to competitive programming and a continuous pursuit of excellence.\n\nWe congratulate Team PrimeU_Supernova for representing Prime University with determination and professionalism, and we wish them continued success in future competitions.",
    images: [
      "/buet-iupc-2026/626011716_1506353981494745_8473754712018016657_n.jpg",
      "/buet-iupc-2026/627030027_1506353954828081_3075863775525601971_n.jpg"
    ],
    created_at: new Date().toISOString(),
    created_by: "Admin Team",
  },
  {
    id: "post-0",
    title: "🌟 Proud Moment for the Department of CSE, Prime University: Team Superm4n_Fanclub at ICPC Asia Dhaka Regional 2025 🌟",
    content: "The Department of Computer Science and Engineering (CSE) at Prime University is proud to celebrate Team Superm4n_Fanclub for representing the university at the ICPC Asia Dhaka Regional Onsite Contest 2025, one of the most prestigious competitive programming competitions in the region. The Team Superm4n_Fanclub secured the 141th position out of 313 teams.\n\nFacing tough competition from top teams across leading universities, Team Superm4n_Fanclub demonstrated remarkable problem-solving skills, sharp algorithmic thinking, and outstanding teamwork. Their stellar performance reflects not only technical expertise but also dedication, resilience, and a true passion for competitive programming, earning them a commendable standing in this high-stakes contest.\n\n👨‍💻 Team: Superm4n_Fanclub\n🔹 Rashed Hossain (Batch 62)\n🔹 Hamim Reza (Batch 62)\n🔹 Zakir Hossain (Batch 62)\n\nThis achievement marks a milestone for the team and the Prime University programming community, serving as an inspiration for aspiring programmers. Their journey proves that consistent practice, collaboration, and determination can lead to success on internationally recognized platforms like ICPC.\n\n🎉 Congratulations to Team Superm4n_Fanclub for making Prime University proud and inspiring the next generation of competitive programmers. Keep coding, keep achieving! 🚀\n\nStanding: https://bapsoj.org/contests/icpc-dhaka-onsite-2025/standings",
    images: [
      "/icpc-2025/598445672_1462296192567191_7749230667263266347_n.jpg",
      "/icpc-2025/600323971_1464120989051378_5766032782187943159_n.jpg",
      "/icpc-2025/601022329_1462296672567143_6096038155183527651_n.jpg",
      "/icpc-2025/602355338_1462296319233845_2654547349945338070_n.jpg",
      "/icpc-2025/603099890_1462296399233837_6968475183737306387_n.jpg",
      "/icpc-2025/603908582_1462296752567135_7826466602630088222_n.jpg"
    ],
    created_at: new Date().toISOString(),
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
  { id: "adv-1", name: "Md. Mahfuzur Rahman", role: "Convener", photo: "/advisors-new/mahfuzur.jpeg", type: "advisor", batch: "Faculty" },
  { id: "adv-2", name: "Md. Samrat Ali Abu Kawser", role: "Advisor", photo: "/advisors-new/samrat.jpeg", type: "advisor", batch: "Faculty" },
  { id: "adv-3", name: "Papia Akter", role: "Advisor", photo: "/advisors-new/papia.jpeg", type: "advisor", batch: "Faculty" },
  { id: "adv-4", name: "Nahian Sourov", role: "Advisor", photo: "/advisors-new/nahian.jpeg", type: "advisor", batch: "Faculty" },
  { id: "adv-5", name: "Md. Al Amin Bhuiyan", role: "Alumni Advisor", photo: "/advisors-new/alamin.jpeg", type: "advisor", batch: "Alumni" },
  { id: "mem-1", name: "Md. Rashed Hossain", role: "President", photo: "/committee-current/image34.png", type: "current", batch: "62 Batch" },
  { id: "mem-2", name: "Hameem Reza", role: "Vice President", photo: "/committee-current/image35.png", type: "current", batch: "62 Batch" },
  { id: "mem-3", name: "Md. Zakir Hossain", role: "General Secretary", photo: "/committee-current/image36.png", type: "current", batch: "62 Batch" },
  { id: "mem-4", name: "Omor Faruq", role: "Joint Secretary", photo: "/committee-current/image37.png", type: "current", batch: "63 Batch" },
  { id: "mem-5", name: "Saiful Islam Nirob", role: "Treasurer", photo: "/committee-current/image38.png", type: "current", batch: "63 Batch" },
  { id: "mem-6", name: "Abu Bakar Shihab", role: "Organizing Secretary", photo: "/committee-current/image39.png", type: "current", batch: "63 Batch" },
  { id: "mem-7", name: "Md. Shakib Hossain", role: "Media & Publicity Secretary", photo: "/committee-current/image40.png", type: "current", batch: "62 Batch" },
  { id: "mem-8", name: "Minhaz Hossain Topu", role: "Event Coordinator", photo: "/committee-current/image41.png", type: "current", batch: "66 Batch" },
  { id: "mem-9", name: "Md. Shahariar Jaman Siam", role: "CP Trainer", photo: "/committee-current/image42.png", type: "current", batch: "66 Batch" },
  { id: "mem-10", name: "Tashbee Tanzim Ruhanee", role: "CP Trainer", photo: "/committee-current/image43.png", type: "current", batch: "66 Batch" },
  { id: "mem-11", name: "Chayon Bain", role: "CP Trainer", photo: "/committee-current/image44.png", type: "current", batch: "67 Batch" },
  { id: "mem-12", name: "Sk Riadul Islam Fardin", role: "CP Trainer", photo: "/committee-current/image45.png", type: "current", batch: "67 Batch" },
  { id: "mem-13", name: "Raihan Biswas", role: "CP Trainer", photo: "/committee-current/image46.png", type: "current", batch: "66 Batch" },
  { id: "prev-1", name: "MD.Tamim khan", role: "President", photo: "/previous-committee/image15.png", type: "previous", batch: "Batch 59" },
  { id: "prev-2", name: "MD. Rashed Hossain", role: "Secretary", photo: "/previous-committee/image16.png", type: "previous", batch: "Batch 62" },
  { id: "prev-3", name: "MD. Zakir hossain", role: "Treasurer", photo: "/previous-committee/image17.png", type: "previous", batch: "Batch 62" },
  { id: "prev-4", name: "Saiful Islam Nirob", role: "Organizing Secretary", photo: "/previous-committee/image18.png", type: "previous", batch: "Batch 63" },
  { id: "prev-5", name: "Sadia Islam Sharna", role: "Co-Organizing Secretary", photo: "/previous-committee/image19.png", type: "previous", batch: "Batch 63" },
  { id: "prev-6", name: "Abu Bakar Shihab", role: "Instructor", photo: "/previous-committee/image20.png", type: "previous", batch: "Batch 63" },
  { id: "prev-7", name: "Shakib Hossen", role: "Instructor", photo: "/previous-committee/image21.png", type: "previous", batch: "Batch 62" },
  { id: "prev-8", name: "Hamim Reza", role: "Instructor", photo: "/previous-committee/image22.png", type: "previous", batch: "Batch 62" },
  { id: "prev-9", name: "Omor Faruq", role: "Instructor", photo: "/previous-committee/image23.png", type: "previous", batch: "Batch 63" }
];

export const mockEvents: ClubEvent[] = [
  {
    id: "evt-1",
    title: "NDUB Intra-University Programming Contest 2026",
    type: "upcoming",
    date: "2026-05-15T10:00:00.000Z",
    description: "The biggest programming contest of the year is here! Form a team of 3 and prove your problem-solving skills. Exciting prizes await the champions. Open to all current students.",
    images: [
      "/nubfest/663218304_928166676646287_6108617274081833472_n.jpg"
    ],
    registration_link: "https://docs.google.com/forms",
  },
  {
    id: "evt-2",
    title: "DUET Intra-University Programming Contest",
    type: "upcoming",
    date: "2026-05-20T10:00:00.000Z",
    description: "PUCPC teams are gearing up to participate in the upcoming DUET Intra-University Programming Contest. Let's practice hard and bring home the trophy!",
    images: [
      "/duet/672256702_1022986876723473_4354052472841041174_n.jpg"
    ],
    registration_link: "",
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
    contest_name: "ICPC",
    rank: "Outstanding performance",
    team_name: "Superm4n_Fanclub",
    participants: ["Md. Rashed Hossain", "Hamim Reza", "Zakir Hossain"],
    date: "2025-11-15T00:00:00.000Z",
    image: "/achievements/icpc.webp",
    is_featured: true,
  },
  {
    id: "ach-2",
    contest_name: "BUBT Inter University Collaboration Programming Contest",
    rank: "Top 30",
    team_name: "Superm4n_FanClub",
    participants: ["Md. Rashed Hossain", "Hamim Reza", "Zakir Hossain"],
    date: "2025-12-10T00:00:00.000Z",
    image: "/achievements/bubt.webp",
  }
];

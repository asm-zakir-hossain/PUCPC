export interface ActivityPost {
  id: string;
  title: string;
  content: string;
  images: string[];
  created_at: string;
  created_by?: string;
}

export interface Achievement {
  id: string;
  contest_name: string;
  rank: string;
  team_name: string;
  participants: string[];
  date: string;
  image?: string;
  is_featured?: boolean;
}


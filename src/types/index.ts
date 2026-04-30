export interface ActivityPost {
  id: string;
  title: string;
  content: string;
  images: string[];
  video_url?: string;
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

export interface ClubEvent {
  id: string;
  title: string;
  type: 'upcoming' | 'past';
  date: string;
  description: string;
  images: string[];
  registration_link?: string;
}

export interface Member {
  id: string;
  name: string;
  role: string;
  session?: string;
  photo?: string;
  type: 'current' | 'previous' | 'advisor';
  batch?: string;
}

export interface Resource {
  id: string;
  title: string;
  description: string;
  link: string;
  category: 'tutorial' | 'platform' | 'tool';
}





import { ActivityPost } from "@/types";
import ActivityCard from "./ActivityCard";

interface ActivityFeedProps {
  posts: ActivityPost[];
}

export default function ActivityFeed({ posts }: ActivityFeedProps) {
  // Ensure reverse chronological order
  const sortedPosts = [...posts].sort((a, b) => {
    return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
  });

  return (
    <div className="max-w-3xl mx-auto space-y-8">
      {sortedPosts.map((post) => (
        <ActivityCard key={post.id} post={post} />
      ))}
    </div>
  );
}

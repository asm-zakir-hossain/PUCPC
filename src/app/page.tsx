import ActivityFeed from "@/components/ActivityFeed";
import { mockActivityPosts } from "@/lib/mockData";
import FadeIn from "@/components/FadeIn";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center bg-secondary-light/30 dark:bg-[#0f0f0f] border-b border-foreground/5 pt-20">
        <FadeIn className="max-w-5xl">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-6">
            Building Competitive Programmers. <br className="hidden md:block" />
            <span className="text-accent">Creating Champions.</span>
          </h1>
          <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto">
            Welcome to the Prime University Computer Programming Club. We are dedicated to excellence in coding, problem-solving, and technology.
          </p>
        </FadeIn>
      </section>

      {/* Activity Feed Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <FadeIn direction="up" delay={0.2} className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Latest Activities</h2>
            <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
          </FadeIn>
          
          <FadeIn direction="up" delay={0.4}>
            <ActivityFeed posts={mockActivityPosts} />
          </FadeIn>
        </div>
      </section>
    </div>
  );
}

import MemberCard from "@/components/MemberCard";
import { mockMembers } from "@/lib/mockData";
import FadeIn from "@/components/FadeIn";

export default function CommitteePage() {
  const currentMembers = mockMembers.filter(m => m.type === "current");
  const previousMembers = mockMembers.filter(m => m.type === "previous");

  return (
    <div className="flex flex-col min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-background border-b border-foreground/5">
        <FadeIn direction="down" className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-6">
            Our Committee
          </h1>
          <p className="text-lg md:text-xl text-foreground/80 leading-relaxed max-w-2xl mx-auto">
            Meet the dedicated individuals who lead the Prime University Computer Programming Club and organize our events, contests, and workshops.
          </p>
        </FadeIn>
      </section>

      {/* Current Committee Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-secondary-light/30 dark:bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <FadeIn direction="up" className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Current Executive Committee</h2>
            <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
          </FadeIn>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
            {currentMembers.map((member, index) => (
              <FadeIn key={member.id} delay={0.1 * index} direction="up">
                <MemberCard member={member} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Previous Committee Section */}
      {previousMembers.length > 0 && (
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-background">
          <div className="max-w-7xl mx-auto">
            <FadeIn direction="up" className="mb-12 text-center">
              <h2 className="text-3xl font-bold tracking-tight mb-4">Previous Committees</h2>
              <div className="w-20 h-1 bg-foreground/20 mx-auto rounded-full"></div>
            </FadeIn>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 opacity-90">
              {previousMembers.map((member, index) => (
                <FadeIn key={member.id} delay={0.1 * index} direction="up">
                  <MemberCard member={member} />
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

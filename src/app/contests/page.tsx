import FadeIn from "@/components/FadeIn";
import { Calendar, Code2, Trophy, Users } from "lucide-react";

export default function ContestsClassesPage() {
  const classes = [
    { title: "Beginner Track (C/C++)", time: "Saturdays, 3:00 PM - 5:00 PM", level: "Beginner", description: "Learn the basics of programming, loops, arrays, and simple math." },
    { title: "Intermediate Track (Data Structures)", time: "Sundays, 4:00 PM - 6:00 PM", level: "Intermediate", description: "Master arrays, linked lists, stacks, queues, and basic graph theory." },
    { title: "Advanced Algorithms", time: "Tuesdays, 5:00 PM - 7:00 PM", level: "Advanced", description: "Dynamic programming, segment trees, advanced graph algorithms, and math." }
  ];

  const contests = [
    { name: "PUCPC Intra-University Contest 2024", date: "Coming Soon", platform: "Codeforces", type: "Individual" },
    { name: "Weekly Speed Contest", date: "Every Friday, 8:00 PM", platform: "Vjudge", type: "Individual" },
    { name: "Team Selection Contest", date: "TBA", platform: "HackerRank", type: "Team (3 Members)" }
  ];

  return (
    <div className="flex flex-col min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-background border-b border-foreground/5">
        <FadeIn direction="down" className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-6">
            Contests & Classes
          </h1>
          <p className="text-lg md:text-xl text-foreground/80 leading-relaxed max-w-2xl mx-auto">
            Train hard, compete harder. Join our weekly training sessions and put your skills to the test in our regular programming contests.
          </p>
        </FadeIn>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-secondary-light/30 dark:bg-[#0a0a0a] flex-grow">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Classes Column */}
          <FadeIn direction="up">
            <div className="mb-8 flex items-center gap-3">
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center shrink-0">
                <Code2 className="w-6 h-6 text-accent" />
              </div>
              <h2 className="text-3xl font-bold tracking-tight">Training Classes</h2>
            </div>
            
            <div className="space-y-6">
              {classes.map((cls, idx) => (
                <div key={idx} className="bg-background border border-foreground/10 p-6 rounded-2xl shadow-sm hover:border-accent/50 transition-colors">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-xl font-bold">{cls.title}</h3>
                    <span className="px-3 py-1 bg-secondary-light dark:bg-secondary-dark text-xs font-medium rounded-full">
                      {cls.level}
                    </span>
                  </div>
                  <p className="text-foreground/70 mb-4">{cls.description}</p>
                  <div className="flex items-center gap-2 text-sm text-foreground/60 font-medium">
                    <Calendar className="w-4 h-4" />
                    {cls.time}
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>

          {/* Contests Column */}
          <FadeIn direction="up" delay={0.2}>
            <div className="mb-8 flex items-center gap-3">
              <div className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center shrink-0">
                <Trophy className="w-6 h-6 text-amber-500" />
              </div>
              <h2 className="text-3xl font-bold tracking-tight">Upcoming Contests</h2>
            </div>

            <div className="space-y-6">
              {contests.map((contest, idx) => (
                <div key={idx} className="bg-background border border-foreground/10 p-6 rounded-2xl shadow-sm hover:border-amber-500/50 transition-colors">
                  <h3 className="text-xl font-bold mb-4">{contest.name}</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-xs text-foreground/50 uppercase tracking-wider font-semibold mb-1">Date & Time</p>
                      <p className="font-medium flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-foreground/50" />
                        {contest.date}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-foreground/50 uppercase tracking-wider font-semibold mb-1">Format</p>
                      <p className="font-medium flex items-center gap-2">
                        <Users className="w-4 h-4 text-foreground/50" />
                        {contest.type}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>

        </div>
      </section>
    </div>
  );
}

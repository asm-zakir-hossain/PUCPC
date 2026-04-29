import FadeIn from "@/components/FadeIn";
import { Award, TrendingUp, Star } from "lucide-react";

export default function BestPerformersPage() {
  const performers = [
    { rank: 1, name: "Zakir Hossain", handle: "zakir_pucpc", rating: 1850, title: "Candidate Master", platform: "Codeforces", solved: 1200 },
    { rank: 2, name: "Jane Doe", handle: "jane_codes", rating: 1620, title: "Expert", platform: "Codeforces", solved: 850 },
    { rank: 3, name: "John Smith", handle: "jsmith99", rating: 1540, title: "Specialist", platform: "Codeforces", solved: 720 },
    { rank: 4, name: "Alice Johnson", handle: "alice_algo", rating: 1450, title: "Specialist", platform: "Codeforces", solved: 600 },
    { rank: 5, name: "Bob Williams", handle: "bob_builder", rating: 1390, title: "Pupil", platform: "Codeforces", solved: 450 },
  ];

  return (
    <div className="flex flex-col min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-background border-b border-foreground/5">
        <FadeIn direction="down" className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-6">
            Best Performers
          </h1>
          <p className="text-lg md:text-xl text-foreground/80 leading-relaxed max-w-2xl mx-auto">
            Celebrating the top problem solvers of PUCPC. These individuals have proven their algorithmic prowess on global platforms.
          </p>
        </FadeIn>
      </section>

      {/* Leaderboard */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-secondary-light/30 dark:bg-[#0a0a0a] flex-grow">
        <div className="max-w-5xl mx-auto">
          <FadeIn direction="up">
            <div className="bg-background border border-foreground/10 rounded-3xl overflow-hidden shadow-lg">
              {/* Header */}
              <div className="bg-secondary-light dark:bg-secondary-dark p-6 border-b border-foreground/10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Award className="w-6 h-6 text-accent" />
                  <h2 className="text-xl font-bold">Codeforces Leaderboard</h2>
                </div>
                <div className="flex items-center gap-2 text-sm text-foreground/60 font-medium">
                  <TrendingUp className="w-4 h-4" />
                  Live Ratings
                </div>
              </div>

              {/* List */}
              <div className="divide-y divide-foreground/5">
                {performers.map((user, index) => (
                  <div key={user.handle} className="p-6 flex items-center gap-6 hover:bg-secondary-light/30 dark:hover:bg-secondary-dark/30 transition-colors">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold shrink-0 ${
                      user.rank === 1 ? "bg-amber-500/20 text-amber-500" :
                      user.rank === 2 ? "bg-slate-300/20 text-slate-400" :
                      user.rank === 3 ? "bg-orange-700/20 text-orange-700" :
                      "bg-foreground/5 text-foreground/50"
                    }`}>
                      #{user.rank}
                    </div>
                    
                    <div className="flex-grow">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-lg font-bold">{user.name}</h3>
                        {user.rank === 1 && <Star className="w-4 h-4 text-amber-500 fill-amber-500" />}
                      </div>
                      <p className="text-sm text-foreground/60">@{user.handle}</p>
                    </div>

                    <div className="text-right hidden sm:block">
                      <p className="text-sm font-medium text-foreground/50 mb-1">Problems Solved</p>
                      <p className="font-bold">{user.solved}</p>
                    </div>

                    <div className="text-right w-32 shrink-0">
                      <p className="text-sm font-medium text-foreground/50 mb-1">Rating</p>
                      <p className={`font-bold text-lg ${
                        user.rating >= 1600 ? "text-blue-500" :
                        user.rating >= 1400 ? "text-cyan-500" :
                        "text-green-500"
                      }`}>{user.rating}</p>
                      <p className="text-xs text-foreground/50">{user.title}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}

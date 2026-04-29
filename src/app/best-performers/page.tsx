import FadeIn from "@/components/FadeIn";
import { Award, TrendingUp, Star, Zap } from "lucide-react";

export default function BestPerformersPage() {
  const risingStar = {
    name: "Mehedi Hasan",
    handle: "mehedi_dev",
    image: "https://i.pravatar.cc/150?u=mehedi",
    month: "October 2024",
    achievement: "Solved 100+ problems in a single month and reached Specialist rating on Codeforces."
  };

  const performers = [
    { rank: 1, name: "Zakir Hossain", handle: "zakir_pucpc", rating: 1850, title: "Candidate Master", platform: "Codeforces", solved: 1200, image: "https://i.pravatar.cc/150?u=zakir" },
    { rank: 2, name: "Jane Doe", handle: "jane_codes", rating: 1620, title: "Expert", platform: "Codeforces", solved: 850, image: "https://i.pravatar.cc/150?u=jane" },
    { rank: 3, name: "John Smith", handle: "jsmith99", rating: 1540, title: "Specialist", platform: "Codeforces", solved: 720, image: "https://i.pravatar.cc/150?u=john" },
    { rank: 4, name: "Alice Johnson", handle: "alice_algo", rating: 1450, title: "Specialist", platform: "Codeforces", solved: 600, image: "https://i.pravatar.cc/150?u=alice" },
    { rank: 5, name: "Bob Williams", handle: "bob_builder", rating: 1390, title: "Pupil", platform: "Codeforces", solved: 450, image: "https://i.pravatar.cc/150?u=bob" },
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

      {/* Rising Star Section */}
      <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-5xl mx-auto">
          <FadeIn direction="up">
            <div className="bg-gradient-to-br from-accent/20 to-purple-500/20 border border-accent/20 p-8 rounded-3xl shadow-lg relative overflow-hidden">
              {/* Decorative Background */}
              <div className="absolute top-0 right-0 p-8 opacity-20 pointer-events-none">
                <Zap className="w-48 h-48 text-accent" />
              </div>
              
              <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
                <div className="w-32 h-32 md:w-40 md:h-40 shrink-0 rounded-full overflow-hidden border-4 border-background shadow-xl">
                  <img src={risingStar.image} alt={risingStar.name} className="w-full h-full object-cover" />
                </div>
                
                <div className="text-center md:text-left">
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-background/50 backdrop-blur-sm border border-foreground/5 text-sm font-bold text-accent mb-4">
                    <Star className="w-4 h-4 fill-accent" />
                    Rising Star of {risingStar.month}
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-2">{risingStar.name}</h2>
                  <p className="text-foreground/70 text-lg mb-4">@{risingStar.handle}</p>
                  <p className="text-foreground/80 leading-relaxed max-w-xl">
                    "{risingStar.achievement}"
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
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
                    
                    {/* Rank Badge */}
                    <div className="w-8 font-bold text-lg text-foreground/50 text-center shrink-0">
                      #{user.rank}
                    </div>

                    {/* Profile Picture */}
                    <div className={`relative w-14 h-14 shrink-0 rounded-full p-1 ${
                      user.rank === 1 ? "bg-gradient-to-tr from-amber-400 to-amber-600" :
                      user.rank === 2 ? "bg-gradient-to-tr from-slate-300 to-slate-500" :
                      user.rank === 3 ? "bg-gradient-to-tr from-orange-600 to-orange-800" :
                      "bg-transparent"
                    }`}>
                      <img src={user.image} alt={user.name} className="w-full h-full object-cover rounded-full border-2 border-background" />
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

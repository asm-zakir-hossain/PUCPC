import FadeIn from "@/components/FadeIn";
import { Award, TrendingUp, Star, Zap } from "lucide-react";

export default function BestPerformersPage() {
  const risingStar = {
    name: "Mahmudul Hasan",
    handle: "Mahmuud007",
    image: "/performers/mahmudul.jpeg",
    month: "April 2026",
    achievement: "Solved more than 100 problems in April 2026."
  };

  const performers = [
    { rank: 1, name: "Rashed Hossain", handle: "StuckOnNewbie", rating: 1612, title: "Expert", platform: "Codeforces", solved: 1266, image: "https://userpic.codeforces.org/2887892/title/a0ecab26fded8ede.jpg", link: "https://codeforces.com/profile/StuckOnNewbie" },
    { rank: 2, name: "Samin Sadik Khan", handle: "SSKsan", rating: 1273, title: "Pupil", platform: "Codeforces", solved: 317, image: "https://userpic.codeforces.org/2718895/title/1e33fcfea1ccd1d7.jpg", link: "https://codeforces.com/profile/SSKsan" },
    { rank: 3, name: "Rocky Chowdhury", handle: "__Cipher__", rating: 1213, title: "Pupil", platform: "Codeforces", solved: 361, image: "https://userpic.codeforces.org/2922601/title/3e7bc65a51cbaa31.jpg", link: "https://codeforces.com/profile/__Cipher__" },
    { rank: 4, name: "Saiful Islam Nirob", handle: "saiful.nirob", rating: 1116, title: "Newbie", platform: "Codeforces", solved: 808, image: "https://userpic.codeforces.org/3664723/title/96932cf99125cfe4.jpg", link: "https://codeforces.com/profile/saiful.nirob" },
    { rank: 5, name: "Hamim Reza", handle: "_H_R_", rating: 1025, title: "Newbie", platform: "Codeforces", solved: 358, image: "https://userpic.codeforces.org/1626831/title/7ef1f990be8c53f0.jpg", link: "https://codeforces.com/profile/_H_R_" },
    { rank: 6, name: "Omor Faruq", handle: "Omorisdead", rating: 948, title: "Newbie", platform: "Codeforces", solved: 265, image: "https://userpic.codeforces.org/4261892/title/d8ba8b6f16edfdff.jpg", link: "https://codeforces.com/profile/Omorisdead" },
    { rank: 7, name: "Abu Bakar Shihab", handle: "a.b.shihab", rating: 923, title: "Newbie", platform: "Codeforces", solved: 177, image: "https://userpic.codeforces.org/3849813/title/5d87308a768b7a41.jpg", link: "https://codeforces.com/profile/a.b.shihab" },
    { rank: 8, name: "Md. Zakir Hossain", handle: "asm_zakir", rating: 907, title: "Newbie", platform: "Codeforces", solved: 275, image: "https://userpic.codeforces.org/3301202/title/8d23d68b7c7ebdb4.jpg", link: "https://codeforces.com/profile/asm_zakir" },
    { rank: 9, name: "Mahmud", handle: "Mahmuud007", rating: 800, title: "Newbie", platform: "Codeforces", solved: 274, image: "https://userpic.codeforces.org/no-title.jpg", link: "https://codeforces.com/profile/Mahmuud007" },
    { rank: 10, name: "SK. Riadul Islam Fardin", handle: "Fardinius", rating: 711, title: "Newbie", platform: "Codeforces", solved: 133, image: "https://userpic.codeforces.org/5053495/title/75a03e64b35175b8.jpg", link: "https://codeforces.com/profile/Fardinius" },
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
                    &quot;{risingStar.achievement}&quot;
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
                  Max Ratings
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
                      <a href={user.link} target="_blank" rel="noopener noreferrer" className="text-sm text-accent hover:underline">@{user.handle}</a>
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

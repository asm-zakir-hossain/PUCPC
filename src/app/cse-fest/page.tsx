import FadeIn from "@/components/FadeIn";
import { Sparkles, CalendarDays, MapPin, Trophy } from "lucide-react";
import Image from "next/image";

export default function CseFestPage() {
  const highlights = [
    { title: "Project Showcasing", description: "Display your innovative hardware and software projects to industry experts." },
    { title: "Hackathon", description: "24-hour coding marathon to solve real-world problems and win grand prizes." },
    { title: "Programming Contest", description: "The flagship competitive programming event of the fest." },
    { title: "Tech Talks", description: "Seminars from renowned alumni and industry leaders on the latest technologies." },
    { title: "Gaming Contest", description: "Valorant, FIFA, and mobile esports tournaments." },
    { title: "Cultural Night", description: "End the fest with a massive celebration featuring live music and performances." }
  ];

  const pastWinners = [
    { name: "PrimeU_Alpha_Q", category: "Programming Contest", image: "/programming2025/499992179_1253092463487566_399660810391864307_n.jpg", year: "2025" },
    { name: "Shakib Hossen", category: "Gaming Contest Champion", image: "/shakib2.jpg", year: "2025", position: "object-top" },
    { name: "Project Alpha", category: "Project Showcasing", image: "/projectshow2025.jpg", year: "2025" },
  ];

  return (
    <div className="flex flex-col min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-background border-b border-foreground/5 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl opacity-30 pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-accent/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
        </div>

        <FadeIn direction="down" className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            <span>The Biggest Tech Event of the Year</span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-6 bg-gradient-to-br from-foreground to-foreground/50 bg-clip-text text-transparent">
            CSE Fest 2026
          </h1>
          <p className="text-lg md:text-xl text-foreground/80 leading-relaxed max-w-2xl mx-auto mb-10">
            Join us for three days of innovation, competition, and celebration. The annual CSE Fest brings together the brightest minds of Prime University.
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-6 text-foreground/70 font-medium">
            <div className="flex items-center gap-2 bg-secondary-light dark:bg-secondary-dark px-4 py-2 rounded-xl text-accent font-bold">
              <CalendarDays className="w-5 h-5 text-accent" />
              <span>Coming Soon</span>
            </div>
            <div className="flex items-center gap-2 bg-secondary-light dark:bg-secondary-dark px-4 py-2 rounded-xl">
              <MapPin className="w-5 h-5 text-accent" />
              <span>Prime University Campus</span>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Highlights Grid */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-secondary-light/30 dark:bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <FadeIn direction="up" className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Fest Highlights</h2>
            <p className="text-foreground/60 max-w-2xl mx-auto">Experience a diverse range of technical and cultural events designed to challenge and entertain.</p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {highlights.map((item, index) => (
              <FadeIn key={index} direction="up" delay={0.1 * index}>
                <div className="bg-background border border-foreground/10 p-8 rounded-2xl h-full shadow-sm hover:-translate-y-1 transition-transform duration-300">
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-foreground/70 leading-relaxed">{item.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Past Champions Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <FadeIn direction="up" className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Past Fest Champions</h2>
            <div className="w-20 h-1 bg-amber-500 mx-auto rounded-full mb-6"></div>
            <p className="text-foreground/60 max-w-2xl mx-auto">Honoring the brilliant minds and skilled teams who conquered the previous iterations of CSE Fest.</p>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pastWinners.map((winner, index) => (
              <FadeIn key={index} direction="up" delay={0.1 * index}>
                <div className="bg-secondary-light/50 dark:bg-[#111] border border-foreground/10 rounded-2xl overflow-hidden shadow-sm group">
                  <div className="h-48 overflow-hidden relative">
                    <img 
                      src={winner.image} 
                      alt={winner.name}
                      className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ${winner.position || 'object-center'}`}
                    />
                    <div className="absolute top-3 right-3 bg-amber-500/90 text-white text-xs font-bold px-2 py-1 rounded backdrop-blur-sm shadow-sm flex items-center gap-1">
                      <Trophy className="w-3 h-3" />
                      {winner.year}
                    </div>
                  </div>
                  <div className="p-5">
                    <p className="text-accent text-sm font-semibold mb-1 uppercase tracking-wider">{winner.category}</p>
                    <h3 className="text-lg font-bold">{winner.name}</h3>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

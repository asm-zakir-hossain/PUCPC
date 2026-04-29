import FadeIn from "@/components/FadeIn";
import { Sparkles, CalendarDays, MapPin } from "lucide-react";

export default function CseFestPage() {
  const highlights = [
    { title: "Project Showcasing", description: "Display your innovative hardware and software projects to industry experts." },
    { title: "Hackathon", description: "24-hour coding marathon to solve real-world problems and win grand prizes." },
    { title: "Programming Contest", description: "The flagship competitive programming event of the fest." },
    { title: "Tech Talks", description: "Seminars from renowned alumni and industry leaders on the latest technologies." },
    { title: "Gaming Contest", description: "Valorant, FIFA, and mobile esports tournaments." },
    { title: "Cultural Night", description: "End the fest with a massive celebration featuring live music and performances." }
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
            CSE Fest 2024
          </h1>
          <p className="text-lg md:text-xl text-foreground/80 leading-relaxed max-w-2xl mx-auto mb-10">
            Join us for three days of innovation, competition, and celebration. The annual CSE Fest brings together the brightest minds of Prime University.
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-6 text-foreground/70 font-medium">
            <div className="flex items-center gap-2 bg-secondary-light dark:bg-secondary-dark px-4 py-2 rounded-xl">
              <CalendarDays className="w-5 h-5 text-accent" />
              <span>December 12 - 14, 2024</span>
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
    </div>
  );
}

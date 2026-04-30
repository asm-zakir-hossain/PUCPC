import FadeIn from "@/components/FadeIn";
import { Briefcase } from "lucide-react";
import Image from "next/image";

export default function AlumniPage() {
  const alumni = [
    { name: "Safwan Alamgir", role: "Senior Software Engineer", company: "Vivasoft Limited", year: "Batch 22", image: "/alumni-new/safwan.jpeg", linkedin: "https://www.linkedin.com/in/safwancse/?skipRedirect=true" },
    { name: "Md. Al Amin Bhuiyan", role: "Senior Software Engineer", company: "Bkash", year: "Batch 24", image: "/alumni-new/alamin.jpeg" },
    { name: "Md Emran Masud", role: "Software Developer", company: "Light Technologies", year: "Batch 50", image: "/alumni-new/emran.jpeg", linkedin: "https://www.linkedin.com/in/emnayon/?skipRedirect=true" },
    { name: "Md Mominur Rahman", role: "Software Engineer", company: "Brain Station", year: "Batch 53", image: "/alumni-new/mominur.jpeg", linkedin: "https://www.linkedin.com/in/99mominur/" },
  ];

  return (
    <div className="flex flex-col min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-background border-b border-foreground/5">
        <FadeIn direction="down" className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-6">
            Our Alumni
          </h1>
          <p className="text-lg md:text-xl text-foreground/80 leading-relaxed max-w-2xl mx-auto">
            PUCPC members have gone on to build incredible careers at top tech companies worldwide. We are proud of our network.
          </p>
        </FadeIn>
      </section>

      {/* Alumni Grid */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-secondary-light/30 dark:bg-[#0a0a0a] flex-grow">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {alumni.map((person, index) => (
              <FadeIn key={index} direction="up" delay={0.1 * index}>
                <div className="bg-background border border-foreground/10 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all group flex flex-col items-center text-center">
                  <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-4 border-background shadow-md">
                    <img 
                      src={person.image} 
                      alt={person.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-1">{person.name}</h3>
                  <p className="text-accent text-sm font-medium mb-4">{person.year}</p>
                  
                  <div className="w-full space-y-3 pt-4 border-t border-foreground/10 mt-auto">
                    <div className="flex items-center justify-center gap-2 text-foreground/70 text-sm">
                      <Briefcase className="w-4 h-4 shrink-0" />
                      <span>{person.role} at <span className="font-semibold text-foreground">{person.company}</span></span>
                    </div>
                    {person.linkedin && (
                      <div className="flex items-center justify-center gap-2 text-foreground/70 text-sm">
                        <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0 fill-current text-[#0A66C2]"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                        <a href={person.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-[#0A66C2] transition-colors font-medium">LinkedIn Profile</a>
                      </div>
                    )}
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

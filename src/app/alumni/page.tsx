import FadeIn from "@/components/FadeIn";
import { Briefcase, MapPin } from "lucide-react";
import Image from "next/image";

export default function AlumniPage() {
  const alumni = [
    { name: "Rafiqul Islam", role: "Software Engineer", company: "Google", location: "London, UK", year: "Batch of 2018", image: "https://i.pravatar.cc/150?u=rafiqul" },
    { name: "Sadia Rahman", role: "Backend Developer", company: "Optimizely", location: "Dhaka, BD", year: "Batch of 2019", image: "https://i.pravatar.cc/150?u=sadia" },
    { name: "Tanvir Ahmed", role: "Senior SDE", company: "Amazon", location: "Seattle, USA", year: "Batch of 2017", image: "https://i.pravatar.cc/150?u=tanvir" },
    { name: "Nusrat Jahan", role: "Data Scientist", company: "Pathao", location: "Dhaka, BD", year: "Batch of 2021", image: "https://i.pravatar.cc/150?u=nusrat" },
    { name: "Faisal Hossain", role: "Frontend Engineer", company: "Toptal", location: "Remote", year: "Batch of 2020", image: "https://i.pravatar.cc/150?u=faisal" },
    { name: "Kamrul Hasan", role: "Tech Lead", company: "Brain Station 23", location: "Dhaka, BD", year: "Batch of 2016", image: "https://i.pravatar.cc/150?u=kamrul" },
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
                      <Briefcase className="w-4 h-4" />
                      <span>{person.role} at <span className="font-semibold text-foreground">{person.company}</span></span>
                    </div>
                    <div className="flex items-center justify-center gap-2 text-foreground/70 text-sm">
                      <MapPin className="w-4 h-4" />
                      <span>{person.location}</span>
                    </div>
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

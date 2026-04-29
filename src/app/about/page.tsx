import FeatureGrid from "@/components/FeatureGrid";
import FadeIn from "@/components/FadeIn";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen pt-20">
      {/* Intro Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-background">
        <FadeIn direction="up" className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-8">
            About PUCPC
          </h1>
          <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
            The Prime University Computer Programming Club (PUCPC) is a community of passionate developers, 
            problem solvers, and technology enthusiasts. Our mission is to foster a competitive programming 
            culture and equip students with the technical skills needed to excel in the global software industry.
          </p>
        </FadeIn>
      </section>

      {/* What We Do Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-secondary-light/30 dark:bg-[#0a0a0a] border-t border-foreground/5 flex-grow">
        <div className="max-w-7xl mx-auto">
          <FadeIn direction="up" delay={0.2} className="mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">What We Do</h2>
            <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
            <p className="mt-6 text-foreground/70 max-w-2xl mx-auto">
              We focus on building a strong foundation in computer science through active learning, 
              competition, and collaborative development.
            </p>
          </FadeIn>
          
          <FadeIn direction="up" delay={0.4}>
            <FeatureGrid />
          </FadeIn>
        </div>
      </section>
    </div>
  );
}

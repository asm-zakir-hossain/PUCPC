import ResourceCard from "@/components/ResourceCard";
import { mockResources } from "@/lib/mockData";

export default function ResourcesPage() {
  const platforms = mockResources.filter(r => r.category === "platform");
  const tutorials = mockResources.filter(r => r.category === "tutorial");
  const tools = mockResources.filter(r => r.category === "tool");

  return (
    <div className="flex flex-col min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-background border-b border-foreground/5">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-6">
            Learning Resources
          </h1>
          <p className="text-lg md:text-xl text-foreground/80 leading-relaxed max-w-2xl mx-auto">
            A curated collection of the best platforms, tutorials, and tools to help you master competitive programming and software engineering.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-secondary-light/30 dark:bg-[#0a0a0a] flex-grow">
        <div className="max-w-7xl mx-auto space-y-16">
          
          {/* Platforms */}
          {platforms.length > 0 && (
            <div>
              <div className="mb-8">
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-2">Practice Platforms</h2>
                <p className="text-foreground/60">Where to solve problems and participate in contests.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {platforms.map(resource => (
                  <ResourceCard key={resource.id} resource={resource} />
                ))}
              </div>
            </div>
          )}

          {/* Tutorials */}
          {tutorials.length > 0 && (
            <div>
              <div className="mb-8">
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-2">Algorithms & Tutorials</h2>
                <p className="text-foreground/60">Learn the theory behind data structures and algorithms.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {tutorials.map(resource => (
                  <ResourceCard key={resource.id} resource={resource} />
                ))}
              </div>
            </div>
          )}

          {/* Tools */}
          {tools.length > 0 && (
            <div>
              <div className="mb-8">
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-2">Essential Tools</h2>
                <p className="text-foreground/60">Software and references to improve your workflow.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {tools.map(resource => (
                  <ResourceCard key={resource.id} resource={resource} />
                ))}
              </div>
            </div>
          )}

        </div>
      </section>
    </div>
  );
}

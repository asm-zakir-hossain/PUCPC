import { Code2, Trophy, Lightbulb, Presentation } from "lucide-react";
import FeatureCard from "./FeatureCard";

const features = [
  {
    title: "Workshops",
    description: "Specialized training and technical workshops on various programming languages, algorithms, and development tools to build strong foundational skills.",
    Icon: Presentation,
  },
  {
    title: "Contests",
    description: "Regular intra and inter-university programming contests designed to simulate real competitive programming environments like ICPC and Codeforces.",
    Icon: Trophy,
  },
  {
    title: "Problem Solving",
    description: "Dedicated analytical and coding sessions focusing on complex data structures, algorithmic paradigms, and mathematical problem solving.",
    Icon: Lightbulb,
  },
  {
    title: "Projects",
    description: "Collaborative software development initiatives and showcases to apply programming concepts to real-world applications and hackathons.",
    Icon: Code2,
  },
];

export default function FeatureGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {features.map((feature, index) => (
        <FeatureCard 
          key={index}
          title={feature.title}
          description={feature.description}
          Icon={feature.Icon}
        />
      ))}
    </div>
  );
}

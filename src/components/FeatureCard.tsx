import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  title: string;
  description: string;
  Icon: LucideIcon;
}

export default function FeatureCard({ title, description, Icon }: FeatureCardProps) {
  return (
    <div className="bg-background border border-foreground/10 p-8 rounded-2xl hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
      <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-white transition-colors duration-300">
        <Icon className="w-7 h-7 text-accent group-hover:text-white" />
      </div>
      <h3 className="text-xl font-bold tracking-tight mb-3 text-foreground">
        {title}
      </h3>
      <p className="text-foreground/70 leading-relaxed">
        {description}
      </p>
    </div>
  );
}

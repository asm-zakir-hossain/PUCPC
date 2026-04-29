import { Resource } from "@/types";
import { ExternalLink, BookOpen, Globe, Wrench } from "lucide-react";

interface ResourceCardProps {
  resource: Resource;
}

export default function ResourceCard({ resource }: ResourceCardProps) {
  // Select icon based on category
  const Icon = 
    resource.category === 'tutorial' ? BookOpen :
    resource.category === 'platform' ? Globe :
    Wrench;

  return (
    <a 
      href={resource.link}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-background border border-foreground/10 p-6 rounded-2xl flex flex-col h-full hover:border-accent hover:shadow-md transition-all duration-300 group"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-colors duration-300">
          <Icon className="w-6 h-6" />
        </div>
        <ExternalLink className="w-5 h-5 text-foreground/30 group-hover:text-accent transition-colors" />
      </div>
      
      <h3 className="text-xl font-bold tracking-tight mb-2 text-foreground group-hover:text-accent transition-colors">
        {resource.title}
      </h3>
      
      <p className="text-foreground/70 leading-relaxed text-sm flex-grow">
        {resource.description}
      </p>
    </a>
  );
}

import { Member } from "@/types";
import { UserCircle2 } from "lucide-react";
import Image from "next/image";

interface MemberCardProps {
  member: Member;
}

export default function MemberCard({ member }: MemberCardProps) {
  return (
    <div className="bg-background border border-foreground/10 p-6 rounded-2xl flex flex-col items-center text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group">
      <div className="relative w-32 h-32 mb-5 rounded-full overflow-hidden bg-secondary-light dark:bg-secondary-dark ring-4 ring-transparent group-hover:ring-accent/20 transition-all duration-300">
        {member.photo ? (
          <Image 
            src={member.photo} 
            alt={member.name} 
            fill 
            className="object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-foreground/30">
            <UserCircle2 className="w-20 h-20" strokeWidth={1} />
          </div>
        )}
      </div>
      
      <h3 className="text-xl font-bold tracking-tight mb-1 text-foreground group-hover:text-accent transition-colors">
        {member.name}
      </h3>
      <p className="text-accent font-medium mb-2">
        {member.role}
      </p>
      {member.session && (
        <p className="text-sm text-foreground/50 font-medium tracking-wide">
          Session: {member.session}
        </p>
      )}
      {member.batch && (
        <p className="text-xs text-foreground/40 font-medium tracking-wide mt-1">
          {member.batch}
        </p>
      )}
    </div>
  );
}

"use client";

import { useState } from "react";
import { ActivityPost } from "@/types";
import { formatDistanceToNow } from "date-fns";
import { Calendar, User, X } from "lucide-react";
import Image from "next/image";

interface ActivityCardProps {
  post: ActivityPost;
}

export default function ActivityCard({ post }: ActivityCardProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  const dateObj = new Date(post.created_at);
  const timeAgo = formatDistanceToNow(dateObj, { addSuffix: true });

  return (
    <>
    <article className="bg-background border border-foreground/10 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col group">
      {/* Header */}
      <div className="p-6 pb-4">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-3 group-hover:text-accent transition-colors">
          {post.title}
        </h2>
        
        <div className="flex flex-wrap items-center gap-4 text-sm text-foreground/60 mb-4">
          <div className="flex items-center gap-1.5">
            <Calendar className="w-4 h-4" />
            <time dateTime={post.created_at}>{timeAgo}</time>
          </div>
          {post.created_by && (
            <div className="flex items-center gap-1.5">
              <User className="w-4 h-4" />
              <span>{post.created_by}</span>
            </div>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="px-6 pb-6 text-foreground/80 leading-relaxed whitespace-pre-wrap">
        <p>{post.content}</p>
      </div>

      {/* Images */}
      {post.images && post.images.length > 0 && (
        <div className={`grid gap-1 mt-auto ${post.images.length > 1 ? 'grid-cols-2' : 'grid-cols-1'}`}>
          {post.images.map((img, index) => {
            let containerClass = "relative bg-secondary-light dark:bg-secondary-dark ";
            
            if (post.images.length === 1) {
              containerClass += "aspect-[21/9]";
            } else if (post.images.length === 3 && index === 0) {
              containerClass += "col-span-2 aspect-[21/9] sm:aspect-[21/9]";
            } else {
              containerClass += "aspect-square";
            }

            return (
              <div 
                key={index} 
                className={`${containerClass} cursor-pointer group/img`}
                onClick={() => setSelectedImage(img)}
              >
                <Image 
                  src={img} 
                  alt={`Activity image ${index + 1}`} 
                  fill 
                  className="object-cover group-hover/img:opacity-90 transition-opacity"
                />
              </div>
            );
          })}
        </div>
      )}
    </article>

    {/* Lightbox Modal */}
    {selectedImage && (
      <div 
        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 sm:p-8"
        onClick={() => setSelectedImage(null)}
      >
        <button 
          className="absolute top-4 right-4 sm:top-8 sm:right-8 text-white/70 hover:text-white bg-white/10 p-2 rounded-full transition-colors z-50"
          onClick={(e) => {
            e.stopPropagation();
            setSelectedImage(null);
          }}
          aria-label="Close fullscreen image"
        >
          <X className="w-6 h-6" />
        </button>
        <div className="relative w-full h-full max-w-6xl max-h-[85vh]">
          <Image 
            src={selectedImage} 
            alt="Full screen view" 
            fill 
            className="object-contain"
          />
        </div>
      </div>
    )}
    </>
  );
}

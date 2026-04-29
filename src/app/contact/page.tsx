import Accordion from "@/components/Accordion";
import { Mail, MapPin, MessageSquare, Send } from "lucide-react";

export default function ContactPage() {
  const faqs = [
    {
      question: "Who can join PUCPC?",
      answer: "PUCPC is open to all students of Prime University who have an interest in competitive programming, algorithms, or software development, regardless of their current skill level."
    },
    {
      question: "Do I need prior programming experience?",
      answer: "Not necessarily! While some experience is helpful, we offer beginner classes (like Intro to C++) to help new members get started with the fundamentals."
    },
    {
      question: "When and where do the training sessions take place?",
      answer: "Weekly training sessions are usually held on weekends or after regular classes in the CSE Lab. Exact timings are announced in our official Facebook/Discord groups."
    },
    {
      question: "Is there any membership fee?",
      answer: "Currently, general membership is free. However, participating in certain exclusive workshops or intra-university contests may have a nominal registration fee to cover operational costs."
    },
    {
      question: "How do I participate in ICPC or NCPC from PUCPC?",
      answer: "The club regularly hosts internal team selection contests. Top-performing students in these contests are mentored and sent to represent Prime University in national and international competitions."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-background border-b border-foreground/5">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-6">
            Get in Touch
          </h1>
          <p className="text-lg md:text-xl text-foreground/80 leading-relaxed max-w-2xl mx-auto">
            Have questions about joining, our events, or competitive programming? We are here to help. Reach out to us or check out the FAQs below.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-secondary-light/30 dark:bg-[#0a0a0a] flex-grow">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Left Column: Contact Form & Info */}
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-6">Contact Us</h2>
              
              <div className="space-y-6 mb-10">
                <div className="flex items-center gap-4 text-foreground/80">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Email</p>
                    <a href="mailto:info@pucpc.org" className="hover:text-accent transition-colors">info@pucpc.org</a>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-foreground/80">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Location</p>
                    <p>Prime University, CSE Department</p>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-background border border-foreground/10 p-8 rounded-2xl shadow-sm">
                <h3 className="text-xl font-bold tracking-tight mb-6 flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-accent" />
                  Send a Message
                </h3>
                
                <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground/80 mb-2">Full Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full px-4 py-3 bg-secondary-light dark:bg-secondary-dark border border-foreground/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground/80 mb-2">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-4 py-3 bg-secondary-light dark:bg-secondary-dark border border-foreground/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground/80 mb-2">Your Message</label>
                    <textarea 
                      id="message" 
                      rows={4}
                      className="w-full px-4 py-3 bg-secondary-light dark:bg-secondary-dark border border-foreground/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all resize-none"
                      placeholder="How can we help you?"
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit"
                    className="w-full bg-accent hover:bg-accent/90 text-white font-medium py-3 px-4 rounded-xl transition-all duration-200 flex items-center justify-center gap-2"
                  >
                    <span>Send Message</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Right Column: FAQs */}
          <div>
            <div className="mb-8">
              <h2 className="text-3xl font-bold tracking-tight mb-2">Frequently Asked Questions</h2>
              <p className="text-foreground/60">Find quick answers to common queries.</p>
            </div>
            
            <Accordion items={faqs} />
          </div>

        </div>
      </section>
    </div>
  );
}

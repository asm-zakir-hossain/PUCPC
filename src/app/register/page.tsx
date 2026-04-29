import { CheckCircle2 } from "lucide-react";

export default function RegisterPage() {
  const benefits = [
    "Access to exclusive competitive programming workshops",
    "Mentorship from senior programmers and alumni",
    "Participation in intra-university contests",
    "Team formation support for ICPC and NCPC",
    "Access to club resources and problem-solving sessions"
  ];

  return (
    <div className="flex flex-col min-h-screen pt-20">
      {/* Header Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-background border-b border-foreground/5">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-6">
            Join PUCPC
          </h1>
          <p className="text-lg md:text-xl text-foreground/80 leading-relaxed max-w-2xl mx-auto">
            Take the first step towards becoming a competitive programmer. Fill out the registration form below to officially join the club.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-secondary-light/30 dark:bg-[#0a0a0a] flex-grow">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Instructions & Benefits Sidebar */}
          <div className="lg:col-span-4 space-y-8">
            <div className="bg-background border border-foreground/10 p-8 rounded-2xl shadow-sm">
              <h2 className="text-2xl font-bold tracking-tight mb-6 text-accent">Why Join Us?</h2>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <span className="text-foreground/80 leading-relaxed">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-background border border-foreground/10 p-8 rounded-2xl shadow-sm">
              <h2 className="text-xl font-bold tracking-tight mb-4">Next Steps</h2>
              <ol className="list-decimal list-inside space-y-3 text-foreground/80 leading-relaxed">
                <li>Submit the form with your correct student details.</li>
                <li>Wait for the confirmation email from the executive committee.</li>
                <li>Join the official Discord/Facebook groups linked in the email.</li>
                <li>Attend the upcoming orientation session!</li>
              </ol>
            </div>
          </div>

          {/* Form Embed Area */}
          <div className="lg:col-span-8">
            <div className="bg-background border border-foreground/10 rounded-2xl shadow-sm overflow-hidden h-[800px] w-full flex flex-col items-center justify-center relative">
              {/* Note: This is a placeholder embed URL. Replace the src with the actual Google Form embed URL */}
              <iframe 
                src="https://docs.google.com/forms/d/e/1FAIpQLSe4xK_hUv5N1zYfT_O14144444444444444444444444/viewform?embedded=true" 
                width="100%" 
                height="100%" 
                style={{ border: "none" }}
                className="absolute inset-0"
                title="PUCPC Registration Form"
              >
                Loading form...
              </iframe>
              
              {/* Fallback overlay in case the mock URL fails to load (since it's fake) */}
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-background z-[-1] p-8 text-center">
                <p className="text-foreground/50 mb-4">
                  (Google Form Embed Placeholder)
                </p>
                <p className="text-foreground/40 text-sm max-w-md">
                  Once you have your real Google Form URL, replace the `src` attribute in the iframe tag in `src/app/register/page.tsx`.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}

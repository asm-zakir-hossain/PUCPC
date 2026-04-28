export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] px-4 text-center">
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-6">
        Building Competitive Programmers. <br className="hidden md:block" />
        <span className="text-accent">Creating Champions.</span>
      </h1>
      <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mb-10">
        Welcome to the Prime University Computer Programming Club. We are dedicated to excellence in coding, problem-solving, and technology.
      </p>
      <div className="h-40 w-full max-w-4xl bg-secondary-light dark:bg-secondary-dark rounded-xl flex items-center justify-center border border-foreground/10 shadow-sm">
        <p className="text-foreground/50">Activity Feed Placeholder (Phase 2)</p>
      </div>
    </div>
  );
}

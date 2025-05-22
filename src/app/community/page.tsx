import Image from "next/image";

export default function CommunityPage() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <header className="row-start-1 flex items-center justify-center w-full">
        {/* Placeholder for navigation or logo */}
        <h1 className="text-2xl font-semibold">Community Hub</h1>
      </header>
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg" // Placeholder image
          alt="Community Image"
          width={180}
          height={38}
          priority
        />
        <div className="text-center sm:text-left">
          <h2 className="text-xl font-semibold mb-4">Welcome to Our Community!</h2>
          <p className="text-sm/6">
            This is a placeholder for the community landing page. 
            We will add more content here soon, including information about how to get involved, upcoming events, and resources for members.
          </p>
        </div>
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            href="#" // Placeholder link
            rel="noopener noreferrer"
          >
            Get Involved
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
            href="#" // Placeholder link
            rel="noopener noreferrer"
          >
            Learn More
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <p className="text-sm text-gray-500">© {new Date().getFullYear()} Community Hub. All rights reserved.</p>
      </footer>
    </div>
  );
}

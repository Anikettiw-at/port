import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center mx-auto px-4">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          {/* Placeholder for logo/avatar */}
          {/* <Code className="h-6 w-6 text-primary" /> */}
           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-primary">
             <polyline points="16 18 22 12 16 6"></polyline>
             <polyline points="8 6 2 12 8 18"></polyline>
           </svg>
          <span className="font-bold sm:inline-block">
            Web Weaver
          </span>
        </Link>
        <nav className="flex flex-1 items-center space-x-4 sm:justify-end">
          <Link href="/#projects" className="text-sm font-medium text-foreground/60 transition-colors hover:text-foreground">
            Projects
          </Link>
          <Link href="/#skills" className="text-sm font-medium text-foreground/60 transition-colors hover:text-foreground">
            Skills
          </Link>
          <Link href="/#contact" className="text-sm font-medium text-foreground/60 transition-colors hover:text-foreground">
            Contact
          </Link>
          <a href="/resume.pdf" download="Your_Name_Resume.pdf">
            <Button size="sm" className="ml-auto">
              <Download className="mr-2 h-4 w-4" />
              Resume
            </Button>
          </a>
        </nav>
      </div>
    </header>
  );
}

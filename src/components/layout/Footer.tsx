import { Github, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-6 flex flex-col sm:flex-row justify-between items-center text-sm text-muted-foreground">
        <p>&copy; {currentYear} Aniket Tiwari. All rights reserved.</p>
        <div className="flex items-center space-x-4 mt-4 sm:mt-0">
          {/* TODO: Replace with actual links */}
          <Link href="https://github.com/anik3t" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
            <Github className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link href="https://linkedin.com/in/aniket-tiwari-1002/" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
            <Linkedin className="h-5 w-5" />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link href="mailto:your.email@example.com" className="hover:text-foreground transition-colors">
            <Mail className="h-5 w-5" />
            <span className="sr-only">Email</span>
          </Link>
        </div>
      </div>
    </footer>
  );
}


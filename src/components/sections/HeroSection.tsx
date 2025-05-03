'use client'

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight, Download } from 'lucide-react';
import Image from 'next/image'; // Import Image component

export function HeroSection() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center min-h-[calc(80vh-theme(spacing.14))]">
      <div className="space-y-6">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-primary">
          Hi, I'm Aniket Tiwari
        </h1>
        <p className="text-lg md:text-xl text-foreground/80">
          A passionate Web Developer crafting modern and responsive digital experiences.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/#projects">
            <Button size="lg" variant="default">
              View My Work <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
           {/* TODO: Add actual resume file to public/ directory */}
          <a href="/Aniket_Tiwari_Resume.pdf" download="public\Resumemodified.pdf">
             <Button size="lg" variant="outline">
                <Download className="mr-2 h-5 w-5" />
                 Download
             </Button>
          </a>
        </div>
      </div>
       {/* Profile Picture Section */}
       <div className="flex items-center justify-center aspect-square p-4 md:p-8">
         <Image
            src="public\profileimg.jpg" // Path relative to the 'public' directory
            alt="Aniket Tiwari Profile Photo"
            width={500} // Adjust width as needed
            height={500} // Adjust height as needed
            className="rounded-full object-cover w-full h-full max-w-md shadow-lg border-4 border-border" // Make it circular
            priority // Prioritize loading this image
            data-ai-hint="profile photo aniket tiwari"
          />
      </div>
    </section>
  );
}

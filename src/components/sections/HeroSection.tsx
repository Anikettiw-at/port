'use client'

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight, Download } from 'lucide-react';
import { ThreeDModelPlaceholder } from '@/components/ThreeDModelPlaceholder'; // Import the placeholder

export function HeroSection() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center min-h-[calc(80vh-theme(spacing.14))]">
      <div className="space-y-6">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-primary">
          Hi, I'm [Your Name]
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
          <a href="/resume.pdf" download="Your_Name_Resume.pdf">
             <Button size="lg" variant="outline">
                <Download className="mr-2 h-5 w-5" />
                Download Resume
             </Button>
          </a>
        </div>
      </div>
      <div className="flex items-center justify-center aspect-square">
         {/* Placeholder for the 3D model component */}
         <ThreeDModelPlaceholder />
      </div>
    </section>
  );
}

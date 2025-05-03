'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import { ExternalLink, Github } from 'lucide-react';
import { projectsData, Project } from '@/data/projects'; // Import project data

// Removed Python from skills filter
const skills = ["All", "HTML", "CSS", "TypeScript", "JavaScript", "TailwindCSS", "React", "Next.js"];

export function ProjectsSection() {
  const [filter, setFilter] = useState<string>("All");

  const filteredProjects = filter === "All"
    ? projectsData
    : projectsData.filter(project => project.tags.includes(filter));

  return (
    <section id="projects" className="space-y-8 scroll-mt-14">
      <h2 className="text-3xl font-bold text-center text-primary">My Projects</h2>
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {skills.map((skill) => (
          <Button
            key={skill}
            variant={filter === skill ? "default" : "outline"}
            onClick={() => setFilter(skill)}
            className="transition-colors duration-200"
          >
            {skill}
          </Button>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <Card key={project.id} className="flex flex-col overflow-hidden transition-shadow duration-300 hover:shadow-lg group"> {/* Added group class */}
            <CardHeader className="p-0">
              <div className="aspect-video relative w-full overflow-hidden"> {/* Added overflow-hidden */}
                 <Image
                    src={project.imageUrl}
                    alt={project.title}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 group-hover:scale-105"
                    data-ai-hint={`${project.title} web application screenshot`}
                 />
              </div>

            </CardHeader>
            <CardContent className="pt-4 flex-grow">
               <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
              <CardDescription className="text-sm text-muted-foreground mb-3">{project.description}</CardDescription>
               <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">{tag}</Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex justify-end space-x-3 p-4 border-t">
                {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" title="Live Demo">
                        <Button variant="ghost" size="icon" aria-label={`Live demo of ${project.title}`}>
                            <ExternalLink className="h-5 w-5" />
                            <span className="sr-only">Live Demo</span>
                        </Button>
                     </a>
                )}
                 {project.repoUrl && (
                     <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" title="GitHub Repository">
                         <Button variant="ghost" size="icon" aria-label={`GitHub repository for ${project.title}`}>
                            <Github className="h-5 w-5" />
                            <span className="sr-only">GitHub Repository</span>
                         </Button>
                    </a>
                )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}

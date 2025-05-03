import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, Database, Wind, Braces, /* other relevant icons */ } from 'lucide-react';

// Helper component for Skill Card
const SkillCard = ({ icon, name }: { icon: React.ReactNode, name: string }) => (
  <Card className="flex flex-col items-center justify-center p-4 text-center transition-transform duration-300 hover:scale-105 hover:shadow-md">
    <div className="mb-3 text-accent">{icon}</div>
    <p className="text-sm font-medium text-foreground">{name}</p>
  </Card>
);

// Define skills with appropriate icons
const skillsList = [
  { name: "HTML", icon: <Code className="h-8 w-8" /> },
  { name: "CSS", icon: <PaintbrushIcon className="h-8 w-8" /> }, // Using custom SVG icon
  { name: "JavaScript", icon: <Braces className="h-8 w-8" /> },
  { name: "TypeScript", icon: <Braces className="h-8 w-8" /> }, // Reuse icon, maybe differentiate later
  { name: "TailwindCSS", icon: <Wind className="h-8 w-8" /> },
  { name: "Python", icon: <PythonIcon className="h-8 w-8" /> }, // Using custom SVG icon
  { name: "React", icon: <ReactIcon className="h-8 w-8" /> }, // Using custom SVG icon
  { name: "Next.js", icon: <NextjsIcon className="h-8 w-8" /> }, // Using custom SVG icon
  // Add more skills as needed
  // { name: "Node.js", icon: <Server className="h-8 w-8" /> },
  // { name: "Database", icon: <Database className="h-8 w-8" /> },
];

export function SkillsSection() {
  return (
    <section id="skills" className="space-y-8 scroll-mt-14">
      <h2 className="text-3xl font-bold text-center text-primary">My Skills</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {skillsList.map((skill) => (
          <SkillCard key={skill.name} icon={skill.icon} name={skill.name} />
        ))}
      </div>
    </section>
  );
}


// Custom SVG Icons (since lucide-react might not have all specific icons)

function PythonIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      aria-label="Python icon"
    >
      {/* Simplified Python Logo representation */}
      <path d="M14.5 11H17a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2.5" />
      <path d="M9.5 11H7a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2.5" />
      <path d="M14.5 11V9a2 2 0 0 0-2-2h-1" />
      <path d="M9.5 11V9a2 2 0 0 1 2-2h1" />
      <path d="M12 7V4M11 4h2" />
       <path d="M12 17v3M11 20h2" />
    </svg>
  )
}

function PaintbrushIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
             aria-label="CSS icon representation"
           >
            <path d="M18.37 2.63 14 7l-1.59-1.59a2 2 0 0 0-2.82 0L8 7l9 9 1.59-1.59a2 2 0 0 0 0-2.82L17 10l4.37-4.37a2.12 2.12 0 1 0-3-3Z" />
            <path d="M9 8c-2 3-4 3.5-7 4l8 8c.5-3 1-5 4-7" />
            <path d="M14.5 17.5 4.5 15" />
        </svg>
    )
}

function ReactIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-11.5 -10.23174 23 20.46348" fill="none" stroke="currentColor" strokeWidth="1"
      aria-label="React icon"
    >
        <circle cx="0" cy="0" r="2.05" fill="currentColor" />
        <g stroke="currentColor" strokeWidth="1" fill="none">
            <ellipse rx="11" ry="4.2" />
            <ellipse rx="11" ry="4.2" transform="rotate(60)" />
            <ellipse rx="11" ry="4.2" transform="rotate(120)" />
        </g>
    </svg>
  )
}

function NextjsIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
     <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 180 180" fill="currentColor"
      aria-label="Next.js icon"
    >
        <path fillRule="evenodd" clipRule="evenodd" d="M90 180C139.706 180 180 139.706 180 90C180 40.2944 139.706 0 90 0C40.2944 0 0 40.2944 0 90C0 139.706 40.2944 180 90 180ZM90 167.707C132.96 167.707 167.707 132.96 167.707 90C167.707 47.0402 132.96 12.293 90 12.293C47.0402 12.293 12.293 47.0402 12.293 90C12.293 132.96 47.0402 167.707 90 167.707Z" fill="currentColor"/>
        <path d="M131.097 53.9999L76.963 128.037V53.9999H64.6701V140H76.963L131.097 65.9628V128.037H143.39V53.9999H131.097Z" fill="currentColor"/>
     </svg>
  )
}

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image'; // Import Image component

// Helper component for Skill Card
const SkillCard = ({ icon, name }: { icon: React.ReactNode, name: string }) => (
  <Card className="flex flex-col items-center justify-center p-4 text-center transition-transform duration-300 hover:scale-105 hover:shadow-md aspect-square"> {/* Added aspect-square */}
    <div className="mb-3 w-12 h-12 relative flex items-center justify-center">{icon}</div> {/* Adjusted icon container */}
    <p className="text-sm font-medium text-foreground">{name}</p>
  </Card>
);

// Define skills with placeholder 3D icons
const skillsList = [
  {
      name: "HTML",
      icon: <Image src="https://picsum.photos/seed/html3d/64" width={48} height={48} alt="HTML 3D Icon" data-ai-hint="3D HTML icon" className="object-contain"/>
  },
  {
      name: "CSS",
      icon: <Image src="https://picsum.photos/seed/css3d/64" width={48} height={48} alt="CSS 3D Icon" data-ai-hint="3D CSS icon" className="object-contain"/>
  },
  {
      name: "JavaScript",
      icon: <Image src="https://picsum.photos/seed/js3d/64" width={48} height={48} alt="JavaScript 3D Icon" data-ai-hint="3D JavaScript icon" className="object-contain"/>
  },
  {
      name: "TypeScript",
      icon: <Image src="https://picsum.photos/seed/ts3d/64" width={48} height={48} alt="TypeScript 3D Icon" data-ai-hint="3D TypeScript icon" className="object-contain"/>
  },
  {
      name: "TailwindCSS",
      icon: <Image src="https://picsum.photos/seed/tailwind3d/64" width={48} height={48} alt="Tailwind CSS 3D Icon" data-ai-hint="3D TailwindCSS icon" className="object-contain"/>
  },
  {
      name: "Python",
      icon: <Image src="https://picsum.photos/seed/python3d/64" width={48} height={48} alt="Python 3D Icon" data-ai-hint="3D Python icon" className="object-contain"/>
   },
   {
      name: "React",
      icon: <Image src="https://picsum.photos/seed/react3d/64" width={48} height={48} alt="React 3D Icon" data-ai-hint="3D React icon" className="object-contain"/>
   },
   {
      name: "Next.js",
      icon: <Image src="https://picsum.photos/seed/nextjs3d/64" width={48} height={48} alt="Next.js 3D Icon" data-ai-hint="3D Nextjs icon" className="object-contain"/>
   },
];

export function SkillsSection() {
  return (
    <section id="skills" className="space-y-8 scroll-mt-14">
      <h2 className="text-3xl font-bold text-center text-primary">My Skills</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 max-w-4xl mx-auto"> {/* Adjusted grid columns and max-width */}
        {skillsList.map((skill) => (
          <SkillCard key={skill.name} icon={skill.icon} name={skill.name} />
        ))}
      </div>
    </section>
  );
}

// Removed unused custom SVG Icons

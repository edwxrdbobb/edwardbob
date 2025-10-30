'use client';

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Code, Database, Cloud, Smartphone, Cpu, Palette, Globe, Zap } from "lucide-react";
import IconCloud from "./aceternity/icon-cloud";

export function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      icon: Code,
      skills: ["React", "TypeScript", "Next.js", "Vue.js", "Angular", "Svelte"],
      level: 95
    },
    {
      title: "Styling & Animation", 
      icon: Palette,
      skills: ["Tailwind CSS", "CSS3", "SCSS", "Motion", "Styled Components"],
      level: 90
    },
    {
      title: "Backend & APIs",
      icon: Database,
      skills: ["Node.js", "Python", "PHP", "GraphQL", "REST APIs", "PostgreSQL", "MongoDB"],
      level: 85
    },
    {
      title: "Cloud & DevOps",
      icon: Cloud,
      skills: ["AWS", "Docker", "Azure", "Supabase", "Vercel", "Convex Vector DB", "GitHub Actions"],
      level: 80
    },
    {
      title: "Mobile Development",
      icon: Smartphone,
      skills: ["React Native", "Expo", "PWA", "Flutter"],
      level: 75
    },
    {
      title: "AI & Emerging Tech",
      icon: Cpu,
      skills: ["OpenAI API", "n8n for Agentic Ai", "WebGL", "WebRTC", "PWA", "Puppeteer Automations"],
      level: 70
    },
    {
      title: "Design & UX",
      icon: Zap,
      skills: ["Figma", "Webflow", "Spline", "Blender", "Adobe Suite"],
      level: 85
    },
    {
      title: "Tools & Platforms",
      icon: Globe,
      skills: ["Git", "GitHub", "Cursor", "Windsurf", "Postman"],
      level: 95
    }
  ];

  const iconSlugs = [
    "typescript", "javascript", "react", "nextdotjs", "vuedotjs", "angular",
    "tailwindcss", "css3", "sass", "nodejs", "python", "graphql",
    "postgresql", "mongodb", "docker", "amazonaws", "vercel", "github",
    "figma", "adobexd", "git", "vscode", "webpack", "eslint"
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4 font-space-grotesk font-bold">
            Skills & Technologies
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tools and technologies I use to bring ideas to life
          </p>
        </div>

        {/* Icon Cloud Section */}
        <div className="flex justify-center mb-16">
          <IconCloud iconSlugs={iconSlugs} />
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category) => {
            const IconComponent = category.icon;
            return (
              <Card 
                key={category.title} 
                className="border overflow-hidden relative"
              >
                {/* Skill level indicator */}
                <div 
                  className="absolute top-0 left-0 h-1 bg-primary transition-all duration-1000 z-20"
                  style={{ width: `${category.level}%` }}
                ></div>
                
                <CardHeader className="text-center pb-4">
                  <IconComponent className="h-8 w-8 mx-auto mb-3" />
                  <CardTitle className="text-lg">
                    {category.title}
                  </CardTitle>
                  <div className="text-sm text-muted-foreground">
                    {category.level}% Proficiency
                  </div>
                </CardHeader>
                
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge 
                        key={skill} 
                        variant="outline" 
                        className="text-xs"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

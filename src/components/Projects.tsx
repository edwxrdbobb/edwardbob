'use client';

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

import { Tabs, TabsList, TabsTrigger } from "./ui/tabs";
import ImageWithFallback  from "./fallback-image";
import { ExternalLink, Github, Star, Eye, Monitor, Smartphone, Layout, Palette, EyeIcon, ArrowRight } from "lucide-react";
import { HoverEffect } from "./aceternity/card-hover-effect";

import datasynk from '@/assets/datasynk.png'
import cww from '@/assets/cww.png'
import BeenFrank from '@/assets/BeenFrank.png'
import d3basketball from '@/assets/d3basketball.png'
import sendme from '@/assets/sendme.png'
import salifund from '@/assets/salifund.png'
import innoHub from '@/assets/limkokwing-inno-hub.png'
import fasuluku from '@/assets/fas.png'


// const datasynk = '@/assets/datasynk.png'
// const cww = '@/assets/cww.png'
// const BeenFrank = '@/assets/BeenFrank.png'
// const d3basketball = '@/assets/d3basketball.png'
// const sendme = '@/assets/sendme.png'
// const salifund = '@/assets/salifund.png'
// const innoHub = '@/assets/limkokwing-inno-hub.png'
// const fasuluku = '@/assets/fas.png'

type ProjectCategory = "all" | "websites" | "apps" | "systems" | "uiux";

interface Project {
  title: string;
  description: string;
  image: string;
  tech: string[];
  github: string;
  demo: string;
  featured: boolean;
  stats: { stars: string; views: string };
  category: ProjectCategory;
  link: string;
}

export default function Projects({projectPage}: {projectPage: boolean}) {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("all");

  const projects: Project[] = [
  {
    title: "Datasynk",
    description: "",
    image: datasynk, // Use the imported `datasynk` directly
    tech: [""],
    github: "#",
    demo: "#",
    featured: true,
    stats: { stars: "892", views: "18k" },
    category: "websites",
    link: "https://datasynksl.vercel.app/"
  },
  {
    title: "D3 Basketball Academy",
    description: "",
    image: d3basketball, // Use the imported `d3basketball` directly
    tech: [""],
    github: "#",
    demo: "#",
    featured: false,
    stats: { stars: "643", views: "12k" },
    category: "websites",
    link: "https://www.d3basketballacademy.com/"
  },
  {
    title: "Wavdev Bootcamp",
    description: "Wavdev Bootcamp is a comprehensive coding bootcamp designed to equip aspiring developers with the skills and knowledge needed to excel in the ever-evolving tech industry. This bootcamp is specifically crafted for those who want to learn and master the latest technologies, such as React, Node.js, and more. With a focus on practical applications and hands-on experience, Wavdev Bootcamp provides a solid foundation for success in the tech industry.",
    image: cww, // Use the imported `cww` directly
    tech: [],
    github: "#",
    demo: "#",
    featured: true,
    stats: { stars: "2.1k", views: "45k" },
    category: "systems",
    link: "https://wavdev-bootcamp.vercel.app/"
  },
  {
    title: "Limkokwing Innovation Hub",
    description: "Real-time chat application with modern messaging features, file sharing, and responsive design for seamless communication.",
    image: innoHub, // Use the imported `innoHub` directly
    tech: [""],
    github: "#",
    demo: "#",
    featured: false,
    stats: { stars: "756", views: "15k" },
    category: "apps",
    link: "https://limkokwing-innovation-hub.vercel.app/"
  },
  {
    title: "Salifund",
    description: "Funding platform for sick children",
    image: salifund, // Use the imported `salifund` directly
    tech: [""],
    github: "#",
    demo: "#",
    featured: true,
    stats: { stars: "1.8k", views: "32k" },
    category: "uiux",
    link: "https://sali-fund.vercel.app/"
  },
  {
    title: "Sendme SL",
    description: "Food Delivery",
    image: sendme, // Use the imported `sendme` directly
    tech: [""],
    github: "#",
    demo: "#",
    featured: true,
    stats: { stars: "1.8k", views: "32k" },
    category: "uiux",
    link: "https://sendme-redesign.vercel.app/"
  },
  {
    title: "Fasuluku Bayoh",
    description: "Professional Photographer",
    image: fasuluku, // Use the imported `fasuluku` directly
    tech: [""],
    github: "#",
    demo: "#",
    featured: true,
    stats: { stars: "1.8k", views: "32k" },
    category: "uiux",
    link: "https://fasuluku-bayoh.vercel.app/"
  },
  {
    title: "BeenFrank",
    description: "",
    image: BeenFrank, // Use the imported `BeenFrank` directly
    tech: [""],
    github: "#",
    demo: "#",
    featured: true,
    stats: { stars: "1.8k", views: "32k" },
    category: "uiux",
    link: "https://beenfrank.vercel.app/"
  },
];
  const categories = [
    { id: "all" as ProjectCategory, label: "All Projects", icon: Layout },
    { id: "websites" as ProjectCategory, label: "Websites", icon: Monitor },
    { id: "apps" as ProjectCategory, label: "Apps", icon: Smartphone },
    { id: "systems" as ProjectCategory, label: "Systems Design", icon: Layout },
    { id: "uiux" as ProjectCategory, label: "UI/UX", icon: Palette },
  ];

  const filteredProjects = activeCategory === "all" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section className="py-20 px-4">
      <div className="max-w-full mx-auto" style={{width:'1500px'}}>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4">
            Client Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A selection of recent work showcasing modern web development
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex items-center gap-2 p-1.5 bg-muted/50 rounded-full border shadow-3d-lg">
            {categories.map((category) => {
              const IconComponent = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`
                    inline-flex items-center gap-2 px-6 py-2.5 rounded-full transition-all duration-300
                    ${activeCategory === category.id 
                      ? 'btn-3d bg-primary text-primary-foreground shadow-3d-lg scale-105' 
                      : 'bg-transparent text-muted-foreground hover:text-foreground hover:bg-muted hover:shadow-3d'
                    }
                  `}
                >
                  <IconComponent className="h-4 w-4" />
                  <span className="text-sm">{category.label}</span>
                  <Badge 
                    variant={activeCategory === category.id ? "secondary" : "outline"} 
                    className="ml-1 text-xs"
                  >
                    {category.id === "all" ? projects.length : projects.filter(p => p.category === category.id).length}
                  </Badge>
                </button>
              );
            })}
          </div>
        </div>
        
        {/* Image-focused Grid with fixed height */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mb-12">
          {filteredProjects.slice(0, !projectPage ? 4 : filteredProjects.length).map((project, index) => (
            <div key={project.title} className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer border border-gray-700/50 dark:border-gray-700" style={{height: 600}}>
              <div className="relative h-full overflow-hidden">
                <img
                    src={project.image} // Use project.image directly
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    
                  />
                {/* <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="text-white w-full">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <Button variant="outline" size="sm" className="border-white text-white hover:bg-white hover:text-black">
                      <EyeIcon className="h-4 w-4 mr-2" />
                      View case study
                    </Button>
                  </div> 
                </div> */}
              </div>
              <div className="absolute w-full inset-0 py-8 px-4 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-300 hover:text-white flex items-end" style={{bottom: 0}}>
                <h4 className="text-3xl font-semibold">{project.title}</h4>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No projects found in this category.</p>
          </div>
        )}

         <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          {/* <Link href="">
              <Button size="lg" className="cursor-pointer" href={'/projects'}>
                See More Work
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
          </Link> */}
        
            </div>
      </div>
    </section>
  );
}

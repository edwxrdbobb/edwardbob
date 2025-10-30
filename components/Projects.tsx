"use client"

import { useState } from "react"
import { Badge } from "./ui/badge"
import { Monitor, Smartphone, Layout, Palette, ExternalLink, Github, X, Box, FileImage, Tag } from "lucide-react"
import { Meteors } from "./aceternity/meteors"

type ProjectCategory = "all" | "websites" | "webapps" | "mobileapps" | "ux" | "ui" | "3dmodels" | "flyers" | "logos"

interface Project {
  title: string
  description: string
  image: string
  tech: string[]
  github: string
  demo: string
  featured: boolean
  stats: { stars: string; views: string }
  category: ProjectCategory
  link: string
}

export default function Projects({ projectPage }: { projectPage: boolean }) {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("all")
  const [hoveredProject, setHoveredProject] = useState<string | null>(null)
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const projects: Project[] = [
    {
      title: "Amaris Web",
      description: "Modern web interface for Amaris, featuring a clean and intuitive user experience with a focus on performance and accessibility.",
      image: "projects/UI:UX/amaris-web.jpg",
      tech: ["Figma", "UI/UX Design", "Prototyping"],
      github: "#",
      demo: "#",
      featured: true,
      stats: { stars: "1.2k", views: "24k" },
      category: "ux",
      link: "#",
    },
    {
      title: "Amaris Mobile App",
      description: "Mobile application design for Amaris, focusing on seamless user experience and modern interface design principles.",
      image: "projects/UI:UX/amaris.png",
      tech: ["Figma", "UI Design", "Mobile First"],
      github: "#",
      demo: "#",
      featured: true,
      stats: { stars: "1.5k", views: "28k" },
      category: "ux",
      link: "#",
    },
    {
      title: "Dashboard UI Kit",
      description: "Comprehensive dashboard UI kit with reusable components, designed for data visualization and admin interfaces.",
      image: "projects/UI:UX/dash.png",
      tech: ["Figma", "Design System", "UI Components"],
      github: "#",
      demo: "#",
      featured: false,
      stats: { stars: "2.3k", views: "35k" },
      category: "ui",
      link: "#",
    },
    {
      title: "SaliFund Platform",
      description: "User interface design for a crowdfunding platform, focusing on donor engagement and campaign visualization.",
      image: "projects/UI:UX/salifund.png",
      tech: ["Figma", "UI/UX Design", "User Flows"],
      github: "#",
      demo: "#",
      featured: true,
      stats: { stars: "1.8k", views: "30k" },
      category: "ux",
      link: "#",
    },
    {
      title: "Startixx Event App",
      description: "Mobile app design for event discovery and ticketing, with a focus on intuitive navigation and visual appeal.",
      image: "projects/UI:UX/startixx.png",
      tech: ["Figma", "Mobile Design", "Prototyping"],
      github: "#",
      demo: "#",
      featured: false,
      stats: { stars: "1.6k", views: "27k" },
      category: "ui",
      link: "#",
    },
    {
      title: "Datasynk",
      description: "A modern data synchronization platform that helps businesses integrate and manage their data across multiple sources in real-time.",
      image: "projects/websites/datasynk.png",
      tech: ["React", "Node.js", "MongoDB", "WebSockets"],
      github: "#",
      demo: "#",
      featured: true,
      stats: { stars: "892", views: "18k" },
      category: "websites",
      link: "https://datasynksl.vercel.app/",
    },
    {
      title: "D3 Basketball Academy",
      description: "Official website for D3 Basketball Academy, offering professional basketball training programs and camps for all skill levels.",
      image: "projects/websites/d3basketball.png",
      tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
      github: "#",
      demo: "#",
      featured: false,
      stats: { stars: "643", views: "12k" },
      category: "websites",
      link: "https://www.d3basketballacademy.com/",
    },
    {
      title: "BeenFrank",
      description: "A platform for honest product reviews and recommendations, helping users make informed purchasing decisions.",
      image: "projects/websites/BeenFrank.png",
      tech: ["React", "Firebase", "Stripe"],
      github: "#",
      demo: "#",
      featured: true,
      stats: { stars: "1.2k", views: "25k" },
      category: "websites",
      link: "#",
    },
    {
      title: "FAS",
      description: "Financial Advisory Services platform providing expert financial planning and investment advice.",
      image: "projects/websites/fas.png",
      tech: ["Vue.js", "Express", "MongoDB"],
      github: "#",
      demo: "#",
      featured: false,
      stats: { stars: "523", views: "10k" },
      category: "websites",
      link: "#",
    },
    {
      title: "SaliFund",
      description: "A crowdfunding platform for social causes and community projects, making it easy to support initiatives that matter.",
      image: "projects/websites/salifund.png",
      tech: ["React", "Node.js", "PostgreSQL", "Stripe"],
      github: "#",
      demo: "#",
      featured: true,
      stats: { stars: "1.8k", views: "35k" },
      category: "websites",
      link: "#",
    },
    {
      title: "SendMe",
      description: "A file sharing platform that allows users to send large files quickly and securely with end-to-end encryption.",
      image: "projects/websites/sendme.png",
      tech: ["Next.js", "AWS S3", "WebRTC"],
      github: "#",
      demo: "#",
      featured: false,
      stats: { stars: "2.3k", views: "48k" },
      category: "websites",
      link: "#",
    },
    {
      title: "Wavdev Bootcamp",
      description:
        "Wavdev Bootcamp is a comprehensive coding bootcamp designed to equip aspiring developers with the skills and knowledge needed to excel in the ever-evolving tech industry.",
      image: "projects/websites/cww.png",
      tech: [],
      github: "#",
      demo: "#",
      featured: true,
      stats: { stars: "2.1k", views: "45k" },
      category: "webapps",
      link: "https://wavdev-bootcamp.vercel.app/",
    },
    {
      title: "Limkokwing Innovation Hub",
      description:
        "Real-time chat application with modern messaging features, file sharing, and responsive design for seamless communication.",
      image: "projects/websites/limkokwing-inno-hub.png",
      tech: [""],
      github: "#",
      demo: "#",
      featured: false,
      stats: { stars: "756", views: "15k" },
      category: "webapps",
      link: "https://limkokwing-innovation-hub.vercel.app/",
    },
  ]

  const categories = [
    { id: "all" as ProjectCategory, label: "All Projects", icon: Layout },
    { id: "websites" as ProjectCategory, label: "Websites", icon: Monitor },
    // { id: "webapps" as ProjectCategory, label: "Web Apps", icon: Smartphone },
    { id: "mobileapps" as ProjectCategory, label: "Mobile Apps", icon: Smartphone },
    { id: "ux" as ProjectCategory, label: "UX Design", icon: Palette },
    { id: "ui" as ProjectCategory, label: "UI Design", icon: Palette },
    // { id: "3dmodels" as ProjectCategory, label: "3D Models", icon: Box },
    { id: "flyers" as ProjectCategory, label: "Flyers", icon: FileImage },
    { id: "logos" as ProjectCategory, label: "Logos", icon: Tag },
  ]

  const filteredProjects = activeCategory === "all" ? projects : projects.filter((p) => p.category === activeCategory)

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Meteors number={20} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4">Projects</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A selection of recent work showcasing modern web development
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center mb-12 overflow-x-auto">
          <div className="inline-flex items-center gap-2 p-1.5 bg-muted/50 rounded-full border shadow-3d-lg flex-wrap justify-center">
            {categories.map((category) => {
              const IconComponent = category.icon
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`
                    inline-flex items-center gap-2 px-6 py-2.5 rounded-full transition-all duration-300
                    ${
                      activeCategory === category.id
                        ? "btn-3d bg-primary text-primary-foreground shadow-3d-lg scale-105"
                        : "bg-transparent text-muted-foreground hover:text-foreground hover:bg-muted hover:shadow-3d"
                    }
                  `}
                >
                  <IconComponent className="h-4 w-4" />
                  <span className="text-sm">{category.label}</span>
                  <Badge variant={activeCategory === category.id ? "secondary" : "outline"} className="ml-1 text-xs">
                    {category.id === "all"
                      ? projects.length
                      : projects.filter((p) => p.category === category.id).length}
                  </Badge>
                </button>
              )
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {filteredProjects.slice(0, !projectPage ? 4 : filteredProjects.length).map((project) => (
            <div
              key={project.title}
              onClick={() => setSelectedProject(project)}
              onMouseEnter={() => setHoveredProject(project.title)}
              onMouseLeave={() => setHoveredProject(null)}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer border transform hover:-translate-y-2 hover:scale-[1.02]"
              style={{ height: 600 }}
            >
              {/* Image Container */}
              <div className="relative h-full overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                {/* Animated overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500"></div>
              </div>

              {/* Content Overlay */}
              <div className="absolute w-full inset-0 p-8 flex flex-col justify-end">
                {/* Title with slide-up animation */}
                <h4 className="text-3xl font-semibold text-white mb-3 transform transition-all duration-500 group-hover:translate-y-0 translate-y-2">
                  {project.title}
                </h4>

                {/* Description - appears on hover */}
                <p className="text-white/90 text-sm mb-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-75 line-clamp-2">
                  {project.description || "Click to view this amazing project"}
                </p>

                {/* Tech badges - slide in from bottom */}
                {project.tech.length > 0 && project.tech[0] !== "" && (
                  <div className="flex flex-wrap gap-2 mb-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100">
                    {project.tech.slice(0, 4).map((tech) => (
                      <Badge key={tech} variant="secondary" className="bg-white/20 text-white border-white/30">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                )}

                {/* Action buttons - fade in on hover */}
                <div className="flex gap-3 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-150">
                  <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/20 transition-colors">
                    <ExternalLink className="h-4 w-4 text-white" />
                    <span className="text-white text-sm font-medium">View Project</span>
                  </div>
                  {project.github !== "#" && (
                    <div className="flex items-center justify-center w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/20 transition-colors">
                      <Github className="h-4 w-4 text-white" />
                    </div>
                  )}
                </div>

                {/* Animated border effect */}
                <div
                  className={`absolute inset-0 border-2 border-primary rounded-lg transition-opacity duration-500 ${
                    hoveredProject === project.title ? "opacity-100" : "opacity-0"
                  }`}
                  style={{
                    boxShadow: hoveredProject === project.title ? "0 0 30px rgba(var(--primary), 0.5)" : "none",
                  }}
                ></div>
              </div>

              {/* Corner accent - appears on hover */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="w-12 h-12 border-t-2 border-r-2 border-white/50 rounded-tr-lg"></div>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No projects found in this category.</p>
          </div>
        )}
      </div>

      {/* Full-screen modal with blur background */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-in fade-in duration-300"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="relative w-full max-w-5xl max-h-[90vh] bg-background/95 backdrop-blur-xl rounded-2xl shadow-2xl border overflow-y-auto animate-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-background/80 backdrop-blur-sm border hover:bg-muted transition-colors shadow-lg"
              aria-label="Close modal"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Project Image */}
            <div className="relative h-[400px] overflow-hidden rounded-t-2xl">
              <img
                src={selectedProject.image || "/placeholder.svg"}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent"></div>
            </div>

            {/* Project Details */}
            <div className="p-8 space-y-6">
              {/* Title and Category */}
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <Badge variant="secondary" className="text-sm">
                    {selectedProject.category}
                  </Badge>
                  {selectedProject.featured && (
                    <Badge variant="default" className="text-sm">
                      Featured
                    </Badge>
                  )}
                </div>
                <h2 className="text-4xl font-bold mb-4">{selectedProject.title}</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {selectedProject.description ||
                    "An amazing project showcasing modern web development practices and cutting-edge technologies."}
                </p>
              </div>

              {/* Tech Stack */}
              {selectedProject.tech.length > 0 && selectedProject.tech[0] !== "" && (
                <div>
                  <h3 className="text-xl font-semibold mb-3">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-sm px-4 py-2">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-lg bg-muted/50 border">
                  <p className="text-sm text-muted-foreground mb-1">GitHub Stars</p>
                  <p className="text-2xl font-bold">{selectedProject.stats.stars}</p>
                </div>
                <div className="p-4 rounded-lg bg-muted/50 border">
                  <p className="text-sm text-muted-foreground mb-1">Views</p>
                  <p className="text-2xl font-bold">{selectedProject.stats.views}</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 pt-4">
                <a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors shadow-lg"
                >
                  <ExternalLink className="h-5 w-5" />
                  <span className="font-medium">View Live Project</span>
                </a>
                {selectedProject.github !== "#" && (
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-6 py-3 bg-muted hover:bg-muted/80 rounded-lg transition-colors border"
                  >
                    <Github className="h-5 w-5" />
                    <span className="font-medium">View Code</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

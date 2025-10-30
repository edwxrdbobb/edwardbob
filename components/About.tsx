"use client"

import { Card, CardContent } from "./ui/card"
import { Badge } from "./ui/badge"
import { User, MapPin, Target, Heart, Briefcase, Code2 } from "lucide-react"
import { Boxes } from "./aceternity/background-boxes"

export function About() {
  const highlights = [
    "5+ years experience",
    "Software Architect",
    "Frontend Specialist",
    "Design Systems Expert",
    "Problem Solver",
    "Team Player",
    "Remote-first mindset",
  ]

  const stats = [
    { icon: Briefcase, label: "Projects Completed", value: "20+" },
    { icon: Code2, label: "Technologies", value: "5+" },
    { icon: User, label: "Happy Clients", value: "10+" },
    { icon: Heart, label: "Startups Founded", value: "2" },
  ]

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <Boxes className="absolute inset-0" />
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Crafting digital experiences with precision and purpose
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <div className="space-y-4 text-lg leading-relaxed">
              <p>
                I'm Edward Bob, a passionate <strong>Software Engineer</strong> and
                <strong> Designer</strong> with over 5 years of experience crafting exceptional digital experiences. I
                specialize in building modern, responsive web applications, mobile apps and designs in UI/UX and
                branding
              </p>
              <p>
                My journey began with a fascination for the intersection of technology and design. Today, I lead
                development teams in creating scalable software architectures, implementing design systems, and pushing
                the boundaries of what's possible on the web.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {highlights.map((highlight) => (
                <Badge key={highlight} variant="secondary">
                  {highlight}
                </Badge>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div key={stat.label} className="p-4 rounded-lg border bg-card card-3d">
                  <stat.icon className="h-5 w-5 mb-2 relative z-10" />
                  <div className="text-2xl relative z-10">{stat.value}</div>
                  <div className="text-sm text-muted-foreground relative z-10">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <Card>
              <CardContent className="p-6">
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Target className="h-5 w-5" />
                      <h3 className="text-lg">Current Focus</h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      Building the largest SaaS software company in Sierra Leone. Our mission is to revolutionize how
                      businesses operate, manage, and grow. We partner with startups and established companies to
                      digitize their ideas and drive meaningful, positive change within their ecosystems.
                    </p>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <MapPin className="h-5 w-5" />
                      <h3 className="text-lg">Based In</h3>
                    </div>
                    <p className="text-muted-foreground">
                      Freetown, Sierra Leone • Available for remote collaboration worldwide
                    </p>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Heart className="h-5 w-5" />
                      <h3 className="text-lg">Interests</h3>
                    </div>
                    <p className="text-muted-foreground">
                      Open source • Tech mentoring • Modern design • Productivity tools • SaaS development
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

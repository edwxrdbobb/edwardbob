"use client"
import { Button } from "./ui/button"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import { TypewriterEffectSmooth } from "./aceternity/typewriter-effect"
import { ImageWithFallback } from "./figma/ImageWithFallback"
import { NeuralNetworkBackground } from "./aceternity/neural-network-bg"

export function Hero() {
  const words = [
    {
      text: "Hi,",
    },
    {
      text: "I'm",
    },
    {
      text: "Edward",
      className: "text-primary",
    },
    {
      text: "Bob Kamara",
      className: "text-primary",
    },
  ]

  return (
    <section className="min-h-screen w-full flex items-center justify-center px-4 pt-20 relative overflow-hidden">
      <NeuralNetworkBackground />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Photo Section */}
          <div className="order-2 lg:order-1 flex justify-center">
            <div className="relative group">
              {/* Photo container with gradient border effect */}
              <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-primary/20 shadow-3d-lg transition-all duration-500 group-hover:shadow-3d-lg group-hover:scale-105">
                <ImageWithFallback
                  src="/professional-developer-portrait.png"
                  alt="Edward Bob Kamara - Professional Photo"
                  className="w-full h-full object-cover grayscale"
                />
                {/* 3D Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 pointer-events-none"></div>
              </div>
              {/* Decorative elements with 3D glow */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl shadow-3d transition-all duration-500 group-hover:bg-primary/30"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/20 rounded-full blur-2xl shadow-3d transition-all duration-500 group-hover:bg-primary/30"></div>
            </div>
          </div>

          {/* Text Content */}
          <div className="order-1 lg:order-2 text-center lg:text-left space-y-8">
            <div className="space-y-6 ">
              <TypewriterEffectSmooth words={words} />
              <h2 className="text-xl md:text-2xl lg:text-3xl text-muted-foreground">
                Software Developer & Product Designer
              </h2>
              <p className="max-w-2xl text-lg text-muted-foreground leading-relaxed">
                Specializing in modern web applications and user-centered interfaces.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
              <Button size="lg">
                View My Work
                <ArrowDown className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg">
                Download CV
              </Button>
            </div>

            <div className="flex justify-center lg:justify-start space-x-6 pt-8">
              <Button variant="ghost" size="icon">
                <Github className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

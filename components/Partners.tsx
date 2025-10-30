"use client"

import { InfiniteMovingCards } from "./aceternity/infinite-moving-cards"

export function Partners() {
  const partners = [
    {
      name: "Startixx",
      logo: "/partners/startixx-logo.webp",
      title: "Product Designer",
      description: "Leading every product design on the platform. Logo design, ui/ux design, and more.",
    },
    {
      name: "Limkokwing Innovation Hub",
      logo: "/partners/inno-hub-logo.jpg",
      title: "Research & Development",
      description: "Innovation and technology research center",
    },
    {
      name: "Afrivas Edu",
      logo: "/partners/afrivas.webp",
      title: "Lead Software Engineer",
      description: "Educational technology solutions tailored for Sierra Leone",
    },
    {
      name: "Blank Space",
      logo: "/partners/blankspace.jpeg",
      title: "Web Developer",
      description: "Web development solutions tailored for Sierra Leone",
    },
    {
      name: "Leone Gadgets",
      logo: "/partners/leone-gadgets.jpg",
      title: "Web Developer",
      description: "Ecommerce platform",
    },
    {
      name: "Amaris",
      logo: "/partners/amaris.png",
      title: "Product Design",
      description: "Did everything product design from logo, branding and ui/ux design",
    },
  ]

  return (
    <section className="py-16 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl mb-4">Trusted by Industry Leaders</h2>
          <p className="text-muted-foreground">
            Collaborating with innovative companies to deliver exceptional results
          </p>
        </div>

        <div className="relative">
          <InfiniteMovingCards items={partners} direction="right" speed="slow" className="mb-8" />
          <InfiniteMovingCards items={partners.slice().reverse()} direction="left" speed="slow" />
        </div>
      </div>
    </section>
  )
}

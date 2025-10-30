"use client"

import { Header } from "@/components/Header"
import { Hero } from "@/components/Hero"
import { About } from "@/components/About"
import { Partners } from "@/components/Partners"
import { Skills } from "@/components/Skills"
import Projects from "@/components/Projects"
import { Contact } from "@/components/Contact"
import { SmoothScroll } from "@/components/SmoothScroll"

export default function Home() {
  return (
    <SmoothScroll>
      <div className="min-h-screen">
        <Header />
        <main>
          <section id="hero">
            <Hero />
          </section>
          <section id="about">
            <About />
          </section>
          <section id="partners">
            <Partners />
          </section>
          <section id="skills">
            <Skills />
          </section>
          <section id="projects">
            <Projects projectPage={false} />
          </section>
          <section id="contact">
            <Contact />
          </section>
        </main>
      </div>
    </SmoothScroll>
  )
}

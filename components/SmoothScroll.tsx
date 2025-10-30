"use client"

import type React from "react"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Initialize scroll-triggered animations for sections
    const sections = gsap.utils.toArray<HTMLElement>("section")

    sections.forEach((section) => {
      // Fade in and slide up animation for each section
      gsap.fromTo(
        section,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            end: "top 20%",
            toggleActions: "play none none reverse",
          },
        },
      )
    })

    // Smooth scroll for anchor links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const anchor = target.closest('a[href^="#"]')

      if (anchor) {
        e.preventDefault()
        const href = anchor.getAttribute("href")
        if (href) {
          const targetId = href.replace("#", "")
          const targetElement =
            document.getElementById(targetId) || document.querySelector(`[data-section="${targetId}"]`)

          if (targetElement) {
            gsap.to(window, {
              duration: 1.2,
              scrollTo: {
                y: targetElement,
                offsetY: 80,
              },
              ease: "power3.inOut",
            })
          }
        }
      }
    }

    document.addEventListener("click", handleAnchorClick)

    return () => {
      document.removeEventListener("click", handleAnchorClick)
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return <div ref={scrollRef}>{children}</div>
}

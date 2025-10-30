'use client';

import { InfiniteMovingCards } from "./aceternity/infinite-moving-cards";

export function Partners() {
  const partners = [
    { name: "Startixx", logo: "ST", title: "Event Management" },
    { name: "limkokwing Innovation Hub", logo: "LIH", title: "Research & Development" },
    { name: "Afrivas Edu", logo: "AF", title: "Digital Transformation" },
    { name: "limkokwing University", logo: "LKU", title: "Software Engineering" },

  ];

  return (
    <section className="py-16 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl mb-4 font-offside">
            Trusted by Industry Leaders
          </h2>
          <p className="text-muted-foreground">
            Collaborating with innovative companies to deliver exceptional results
          </p>
        </div>
        
        <div className="relative">
          <InfiniteMovingCards
            items={partners}
            direction="right"
            speed="slow"
            className="mb-8"
          />
          <InfiniteMovingCards
            items={partners.slice().reverse()}
            direction="left"
            speed="slow"
          />
        </div>
      </div>
    </section>
  );
}

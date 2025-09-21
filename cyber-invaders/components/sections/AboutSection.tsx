"use client";

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register the ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const quoteRef = useRef<HTMLParagraphElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Make sure we're on the client side
    if (typeof window === 'undefined') return;

    // GSAP animations
    const section = sectionRef.current;
    const quote = quoteRef.current;
    const content = contentRef.current;

    if (!section || !quote || !content) return;

    // Quote animation
    gsap.fromTo(
      quote,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: quote,
          start: 'top 80%',
        },
      }
    );

    // Content paragraphs staggered animation
    gsap.fromTo(
      content.children,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.3,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: content,
          start: 'top 70%',
        },
      }
    );

    // Shield visualization effect
    const shield = document.createElement('div');
    shield.className = 'absolute inset-0 rounded-md bg-cyber-primary opacity-0 pointer-events-none';
    section.appendChild(shield);

    gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top 60%',
      },
    })
      .to(shield, { opacity: 0.1, duration: 0.5 })
      .to(shield, { opacity: 0, duration: 0.5, delay: 0.5 });

    return () => {
      // Clean up animations to prevent memory leaks
      ScrollTrigger.getAll().forEach((st) => st.kill());
      shield.remove();
    };
  }, []);

  return (
    <div ref={sectionRef} className="p-6 relative">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center neon-text-purple">
        About Us
      </h2>
      
      <p ref={quoteRef} className="text-center text-xl md:text-2xl mb-12 italic opacity-0">
        "Every system has a vulnerability. Every mind can be trained to secure it."
      </p>
      
      <div ref={contentRef} className="max-w-3xl mx-auto space-y-6">
        <p>
          CyberInvaders is NIET's premier cybersecurity club, dedicated to fostering 
          a community of security enthusiasts, ethical hackers, and digital defenders.
        </p>
        
        <p>
          Our mission is to empower students with practical knowledge and skills in 
          cybersecurity through hands-on workshops, capture-the-flag competitions,
          and industry collaboration.
        </p>
        
        <p>
          We believe that cybersecurity education is crucial in today's digital landscape,
          and we strive to make it accessible, engaging, and cutting-edge for all NIET students.
        </p>
      </div>
    </div>
  );
};

export default AboutSection;
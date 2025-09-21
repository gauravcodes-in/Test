"use client";

import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface ActivityCardProps {
  title: string;
  description: string;
  icon: string;
  color: 'cyan' | 'purple' | 'green';
}

const ActivityCard = ({ title, description, icon, color }: ActivityCardProps) => {
  const colorClasses = {
    cyan: 'border-cyber-primary shadow-neon-cyan',
    purple: 'border-cyber-secondary shadow-neon-purple',
    green: 'border-cyber-accent shadow-neon-green',
  };
  
  const textClasses = {
    cyan: 'neon-text-cyan',
    purple: 'neon-text-purple',
    green: 'neon-text-green',
  };
  
  return (
    <div className={`cyber-card border ${colorClasses[color]} hover:scale-105 hover:shadow-lg p-6 h-full`}>
      <div className="flex flex-col h-full">
        <div className="text-3xl mb-4 font-mono">
          {icon}
        </div>
        <h3 className={`text-xl font-bold mb-3 ${textClasses[color]}`}>{title}</h3>
        <p className="opacity-80 flex-grow">{description}</p>
      </div>
    </div>
  );
};

const ActivitiesSection = () => {
  const activities: ActivityCardProps[] = [
    {
      title: 'Workshops & Training',
      description: 'Hands-on sessions on ethical hacking, penetration testing, secure coding practices, and more.',
      icon: '🔐',
      color: 'cyan',
    },
    {
      title: 'CTF Competitions',
      description: 'Regular Capture The Flag events to test your skills in a competitive environment.',
      icon: '🚩',
      color: 'purple',
    },
    {
      title: 'Guest Lectures',
      description: 'Industry experts and security professionals share insights and experiences.',
      icon: '👨‍💻',
      color: 'green',
    },
    {
      title: 'Research Projects',
      description: 'Collaborative research on emerging cybersecurity threats and defenses.',
      icon: '🔍',
      color: 'cyan',
    },
    {
      title: 'Networking Events',
      description: 'Connect with professionals and like-minded peers in the cybersecurity field.',
      icon: '🌐',
      color: 'purple',
    },
    {
      title: 'Hackathons',
      description: 'Intense coding and hacking challenges to solve real-world security problems.',
      icon: '⏱️',
      color: 'green',
    },
  ];

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Animate cards when they come into view
    const cards = document.querySelectorAll('.cyber-card');

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        { 
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power2.out',
          delay: index * 0.1,
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center neon-text-green">
        What We Do
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {activities.map((activity, index) => (
          <ActivityCard key={index} {...activity} />
        ))}
      </div>
    </div>
  );
};

export default ActivitiesSection;
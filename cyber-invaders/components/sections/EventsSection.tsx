"use client";

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface EventProps {
  title: string;
  date: string;
  description: string;
  image?: string;
  isPast: boolean;
}

const TimelineEvent = ({ title, date, description, image, isPast }: EventProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const popupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    const popup = popupRef.current;
    
    if (!card || !popup) return;
    
    const showPopup = () => {
      gsap.to(popup, {
        opacity: 1,
        y: 0,
        duration: 0.3,
        ease: 'power2.out',
      });
    };
    
    const hidePopup = () => {
      gsap.to(popup, {
        opacity: 0,
        y: 10,
        duration: 0.2,
        ease: 'power2.in',
      });
    };
    
    card.addEventListener('mouseenter', showPopup);
    card.addEventListener('mouseleave', hidePopup);
    
    return () => {
      card.removeEventListener('mouseenter', showPopup);
      card.removeEventListener('mouseleave', hidePopup);
    };
  }, []);

  return (
    <div 
      ref={cardRef}
      className={`relative cursor-pointer ${isPast ? 'opacity-75' : 'opacity-100'}`}
    >
      <div className="h-40 w-full bg-cyber-dark rounded-md overflow-hidden border border-cyber-primary hover:shadow-neon-cyan transition-all duration-300">
        {image ? (
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover opacity-60"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-cyber-darker">
            <span className="text-4xl">{isPast ? '🔒' : '🔓'}</span>
          </div>
        )}
        
        <div className="absolute bottom-0 left-0 w-full p-3 bg-cyber-darker bg-opacity-80">
          <h3 className="font-bold text-cyber-primary">{title}</h3>
          <p className="text-xs opacity-75">{date}</p>
        </div>
      </div>
      
      <div 
        ref={popupRef}
        className="absolute z-10 w-64 bg-cyber-dark border border-cyber-primary p-4 rounded-md shadow-neon-cyan opacity-0 transform translate-y-10 pointer-events-none"
        style={{
          top: 'calc(100% + 10px)',
          left: '50%',
          transform: 'translateX(-50%)',
        }}
      >
        <div className="font-mono text-xs mb-2 text-cyber-primary">
          &gt; Event_Details.exe
        </div>
        <h4 className="font-bold mb-1">{title}</h4>
        <p className="text-xs text-cyber-terminal-green mb-2">{date}</p>
        <p className="text-sm">{description}</p>
      </div>
    </div>
  );
};

const EventsSection = () => {
  const timelineRef = useRef<HTMLDivElement>(null);
  
  const pastEvents: EventProps[] = [
    {
      title: "Hash Hound CTF",
      date: "March 15, 2025",
      description: "A beginner-friendly CTF event focused on cryptographic challenges and hash cracking.",
      isPast: true,
    },
    {
      title: "Web Security Workshop",
      date: "April 5, 2025",
      description: "Hands-on training on common web vulnerabilities like XSS, CSRF, and SQL injection.",
      isPast: true,
    },
    {
      title: "Industry Speaker: Ethical Hacking",
      date: "May 20, 2025",
      description: "Guest lecture by a certified ethical hacker from a leading cybersecurity firm.",
      isPast: true,
    },
  ];
  
  const upcomingEvents: EventProps[] = [
    {
      title: "Network Security Bootcamp",
      date: "September 25, 2025",
      description: "Two-day intensive training on network monitoring, firewall configuration, and threat detection.",
      isPast: false,
    },
    {
      title: "CyberInvaders Annual Hackathon",
      date: "October 10-12, 2025",
      description: "Our flagship 48-hour hackathon with cash prizes and recruitment opportunities.",
      isPast: false,
    },
    {
      title: "Cyber Defense Workshop",
      date: "November 5, 2025",
      description: "Learn how to detect and respond to cyber attacks in real-time.",
      isPast: false,
    },
  ];

  useEffect(() => {
    if (typeof window === 'undefined' || !timelineRef.current) return;

    // Animate the timeline line drawing
    const timeline = timelineRef.current;
    const timelineLine = timeline.querySelector('.timeline-line');
    
    if (!timelineLine) return;
    
    gsap.fromTo(
      timelineLine,
      { scaleY: 0 },
      {
        scaleY: 1,
        duration: 1.5,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: timeline,
          start: 'top 70%',
        },
      }
    );
    
    // Animate events appearing
    const events = timeline.querySelectorAll('.timeline-event');
    
    gsap.fromTo(
      events,
      { opacity: 0, x: index => index % 2 === 0 ? -30 : 30 },
      {
        opacity: 1,
        x: 0,
        stagger: 0.2,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: timeline,
          start: 'top 60%',
        },
      }
    );
    
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center neon-text-purple">
        Events Timeline
      </h2>
      
      <div ref={timelineRef} className="relative max-w-4xl mx-auto py-10">
        {/* Timeline center line */}
        <div className="timeline-line absolute left-1/2 top-0 h-full w-0.5 bg-cyber-primary transform origin-top"></div>
        
        {/* Past events - left side */}
        <div className="mb-16">
          <h3 className="text-xl font-bold mb-6 text-center neon-text-cyan">Past Events</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pastEvents.map((event, index) => (
              <div key={index} className="timeline-event">
                <TimelineEvent {...event} />
              </div>
            ))}
          </div>
        </div>
        
        {/* Upcoming events - right side */}
        <div>
          <h3 className="text-xl font-bold mb-6 text-center neon-text-green">Upcoming Events</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="timeline-event">
                <TimelineEvent {...event} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsSection;
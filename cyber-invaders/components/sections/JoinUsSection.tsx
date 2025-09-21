"use client";

import { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import TypingEffect from '../animations/TypingEffect';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const JoinUsSection = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    studentId: '',
    year: '',
    interests: '',
    message: '',
  });
  
  const [currentField, setCurrentField] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  
  const formRef = useRef<HTMLDivElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);
  const cursorRefs = useRef<(HTMLSpanElement | null)[]>([]);
  
  const fields = [
    { name: 'name', label: 'Enter Name', type: 'text' },
    { name: 'email', label: 'Enter Email', type: 'email' },
    { name: 'studentId', label: 'Enter Student ID', type: 'text' },
    { name: 'year', label: 'Enter Year of Study (1-4)', type: 'number' },
    { name: 'interests', label: 'Enter Your Interests (web security, cryptography, network security, etc.)', type: 'text' },
    { name: 'message', label: 'Why do you want to join? (optional)', type: 'text' },
  ];
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };
  
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && currentField < fields.length - 1) {
      e.preventDefault();
      goToNextField();
    }
  };
  
  const goToNextField = () => {
    if (currentField < fields.length - 1) {
      setCurrentField(currentField + 1);
    }
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      
      // Reset form after submission
      setFormState({
        name: '',
        email: '',
        studentId: '',
        year: '',
        interests: '',
        message: '',
      });
    }, 2000);
  };

  useEffect(() => {
    if (typeof window === 'undefined' || !formRef.current) return;

    // Terminal animation when scrolled into view
    const terminal = terminalRef.current;
    
    if (terminal) {
      gsap.fromTo(
        terminal,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: formRef.current,
            start: 'top 70%',
          },
        }
      );
    }
    
    // Focus current input
    const focusInput = () => {
      const inputs = document.querySelectorAll('.terminal-input');
      const currentInput = inputs[currentField] as HTMLInputElement;
      
      if (currentInput) {
        currentInput.focus();
      }
    };
    
    // Hide all cursors except the current one
    const updateCursors = () => {
      cursorRefs.current.forEach((cursor, index) => {
        if (cursor) {
          if (index === currentField) {
            cursor.style.display = 'inline-block';
          } else {
            cursor.style.display = 'none';
          }
        }
      });
    };
    
    focusInput();
    updateCursors();
    
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [currentField]);

  return (
    <div ref={formRef} className="p-6">
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center neon-text-cyan">
        Join CyberInvaders
      </h2>
      
      <div 
        ref={terminalRef}
        className="max-w-2xl mx-auto bg-cyber-terminal-dark border border-cyber-primary p-6 rounded-md"
      >
        <div className="flex items-center justify-between mb-4 border-b border-cyber-primary pb-2">
          <div className="flex items-center">
            <span className="w-3 h-3 rounded-full bg-red-500 inline-block mr-2"></span>
            <span className="w-3 h-3 rounded-full bg-yellow-500 inline-block mr-2"></span>
            <span className="w-3 h-3 rounded-full bg-green-500 inline-block"></span>
          </div>
          <span className="font-mono text-sm text-cyber-terminal-green">
            CyberInvaders@NIET:~/join
          </span>
          <span className="text-xs opacity-50">-bash</span>
        </div>
        
        {!submitted ? (
          <form onSubmit={handleSubmit} className="font-mono text-cyber-terminal-green">
            <div className="mb-6">
              <p className="mb-2">$ ./join-club.sh</p>
              <p className="mb-4">
                <TypingEffect 
                  texts={["Initializing member registration..."]} 
                  typingSpeed={30} 
                  loop={false}
                />
              </p>
            </div>
            
            {fields.map((field, index) => (
              <div 
                key={field.name}
                className={`mb-4 transition-opacity duration-300 ${index > currentField ? 'opacity-50' : 'opacity-100'}`}
              >
                <label htmlFor={field.name} className="block mb-2 terminal-prompt">
                  {field.label}:
                </label>
                
                {field.name === 'message' ? (
                  <textarea
                    id={field.name}
                    name={field.name}
                    value={formState[field.name as keyof typeof formState]}
                    onChange={handleChange}
                    disabled={index !== currentField}
                    className="terminal-input w-full h-20 resize-none"
                  />
                ) : (
                  <div className="flex items-center">
                    <input
                      id={field.name}
                      type={field.type}
                      name={field.name}
                      value={formState[field.name as keyof typeof formState]}
                      onChange={handleChange}
                      onKeyDown={handleKeyDown}
                      disabled={index !== currentField}
                      className="terminal-input flex-grow"
                    />
                    <span 
                      ref={(el) => {
                        cursorRefs.current[index] = el;
                        return undefined;
                      }} 
                      className={`terminal-cursor ml-1 ${index !== currentField ? 'hidden' : ''}`}
                    ></span>
                  </div>
                )}
                
                {index === currentField && index < fields.length - 1 && (
                  <p className="text-xs mt-1 text-cyber-terminal-green opacity-70">
                    Press Enter to continue...
                  </p>
                )}
              </div>
            ))}
            
            <div className="mt-8">
              <button
                type="submit"
                disabled={isSubmitting || currentField !== fields.length - 1}
                className={`border border-cyber-primary px-6 py-2 hover:bg-cyber-primary/20 transition-all duration-300 font-mono ${(isSubmitting || currentField !== fields.length - 1) ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                <span className="terminal-prompt">
                  {isSubmitting ? 'Processing...' : 'Submit Application'}
                </span>
              </button>
            </div>
          </form>
        ) : (
          <div className="font-mono text-cyber-terminal-green">
            <p className="mb-2">$ ./join-club.sh</p>
            <p className="mb-4">
              <TypingEffect 
                texts={["Processing application...", "Validation complete.", "Application submitted successfully!"]} 
                typingSpeed={30} 
                loop={false}
              />
            </p>
            <div className="border border-cyber-primary p-4 mt-6">
              <p className="mb-2">Thank you for your interest in CyberInvaders!</p>
              <p>We've received your application and will contact you soon with further details about the next steps and upcoming orientation session.</p>
              <p className="mt-4">// Check your email for confirmation</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default JoinUsSection;
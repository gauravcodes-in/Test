"use client";

import { useState, useEffect, useRef } from 'react';

interface TypingEffectProps {
  texts: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  delayBetweenTexts?: number;
  className?: string;
  loop?: boolean;
}

const TypingEffect = ({
  texts,
  typingSpeed = 50,
  deletingSpeed = 30,
  delayBetweenTexts = 2000,
  className = '',
  loop = true
}: TypingEffectProps) => {
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const typingDelayRef = useRef<NodeJS.Timeout | null>(null);
  
  useEffect(() => {
    const currentText = texts[textIndex];
    
    if (isTyping) {
      // Typing
      if (charIndex < currentText.length) {
        typingDelayRef.current = setTimeout(() => {
          setDisplayText(prev => prev + currentText.charAt(charIndex));
          setCharIndex(charIndex + 1);
        }, typingSpeed);
      } else {
        // Finished typing
        typingDelayRef.current = setTimeout(() => {
          if (!loop && textIndex === texts.length - 1) {
            return; // Don't delete if it's the last text and not looping
          }
          setIsTyping(false);
        }, delayBetweenTexts);
      }
    } else {
      // Deleting
      if (displayText.length > 0) {
        typingDelayRef.current = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, deletingSpeed);
      } else {
        // Finished deleting
        setIsTyping(true);
        setTextIndex((textIndex + 1) % texts.length);
        setCharIndex(0);
      }
    }
    
    return () => {
      if (typingDelayRef.current) {
        clearTimeout(typingDelayRef.current);
      }
    };
  }, [charIndex, delayBetweenTexts, deletingSpeed, displayText, isTyping, loop, textIndex, texts, typingSpeed]);
  
  return (
    <span className={className}>
      {displayText}<span className="terminal-cursor"></span>
    </span>
  );
};

export default TypingEffect;
"use client";

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const FooterSection = () => {
  const footerRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLSpanElement>(null);
  
  const socialLinks = [
    { name: 'Instagram', url: '#', icon: 'instagram' },
    { name: 'LinkedIn', url: '#', icon: 'linkedin' },
    { name: 'X', url: '#', icon: 'twitter' }, // Twitter/X
    { name: 'Threads', url: '#', icon: 'threads' },
  ];
  
  useEffect(() => {
    const cursor = cursorRef.current;
    
    if (!cursor) return;
    
    // Blinking cursor animation
    gsap.to(cursor, {
      opacity: 0,
      duration: 0.7,
      ease: 'power1.inOut',
      repeat: -1,
      yoyo: true,
    });
    
    // Typing effect for the terminal text
    const terminalText = document.querySelector('.terminal-text-animated');
    const fullText = 'Thank you for visiting';
    
    if (!terminalText) return;
    
    let text = '';
    let index = 0;
    
    const typeInterval = setInterval(() => {
      if (index < fullText.length) {
        text += fullText.charAt(index);
        terminalText.textContent = text;
        index++;
      } else {
        clearInterval(typeInterval);
        cursor.style.marginLeft = '0.2rem';
      }
    }, 100);
    
    return () => {
      clearInterval(typeInterval);
    };
  }, []);
  
  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'instagram':
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
          </svg>
        );
      case 'linkedin':
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
          </svg>
        );
      case 'twitter':
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/>
          </svg>
        );
      case 'threads':
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.18 18.23 1.5 15.342 1.5 12.186c0-2.579.525-4.721 1.555-6.373.965-1.55 2.318-2.679 4.021-3.351 1.944-.767 4.122-.888 6.623-.37l.283.063-.183.227c-.503.619-.754 1.329-.754 2.122 0 .927.253 1.717.787 2.448l.131.177-.198.11c-.971.544-1.67 1.361-2.024 2.364-.32.9-.333 1.889-.041 2.781.583 1.789 2.043 2.971 3.839 3.109 1.313.101 2.569-.26 3.537-1.016 1.022-.799 1.667-2.007 1.812-3.395.083-.806.006-1.765-.214-2.661-.229-.93-.643-1.973-1.229-3.104-1.323-2.552-2.071-5.044-2.226-7.397-.059-.902.013-1.768.214-2.576.466-1.862 1.403-3.196 2.784-3.968C21.395.365 22.587.066 24 .018l.283-.011.096.279c.155.447.244.918.267 1.403.088 1.815-.391 3.438-1.427 4.84-1.077 1.459-2.591 2.403-4.29 2.665l-.247.039-.075-.24c-.09-.286-.203-.564-.338-.83-.133-.264-.288-.57-.467-.867l-.16-.267.195-.25c.621-.798 1.008-1.695 1.154-2.67.124-.825.07-1.631-.152-2.281-.595-1.747-2.167-1.899-2.865-1.802-.536.074-1.05.372-1.452.841-.548.636-.853 1.577-.879 2.719-.053 2.342.67 4.924 2.152 7.689.628 1.172 1.08 2.288 1.344 3.318.278 1.091.37 2.251.272 3.444-.192 2.31-1.195 4.346-2.828 5.721-1.474 1.242-3.388 1.895-5.396 1.837zm10.487-12.524a13.25 13.25 0 0 1-.291 1.544c-.597 2.418-2.479 4.58-4.764 5.474-1.432.56-2.962.744-4.41.533-2.308-.338-4.307-1.696-5.507-3.721-.91-1.533-1.256-3.328-.974-5.062.336-2.069 1.533-3.943 3.201-5.001.227-.145.461-.279.703-.401l.22-.11.176.173c.276.272.544.552.796.851.529.628.918 1.371 1.177 2.246l.074.252-.248.083c-1.081.366-1.944 1.131-2.474 2.195-.551 1.106-.682 2.37-.371 3.567.44 1.691 1.575 3.016 3.088 3.621.596.238 1.255.36 1.954.36.463 0 .932-.054 1.392-.161 1.869-.436 3.495-1.825 4.264-3.652.566-1.349.72-2.907.434-4.384-.256-1.325-.835-2.571-1.719-3.7l-.153-.195.166-.184c.286-.315.544-.634.766-.952.226-.323.444-.686.648-1.076l.095-.183.201.042c1.699.359 3.061 1.322 4.06 2.862.787 1.212 1.219 2.67 1.296 4.349.029.637-.019 1.288-.146 1.957l-.022.118z"/>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <footer ref={footerRef} className="mt-24 border-t border-cyber-primary pt-8 pb-12">
      <div className="max-w-6xl mx-auto px-6">
        {/* Terminal style footer */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 font-mono flex items-center text-cyber-terminal-green">
            <span>&gt; CyberInvaders@NIET:~$ </span>
            <span className="terminal-text-animated ml-2"></span>
            <span ref={cursorRef} className="terminal-cursor ml-0"></span>
          </div>
          
          <div className="flex space-x-4">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyber-primary transition-colors duration-300"
                aria-label={link.name}
              >
                {renderIcon(link.icon)}
              </a>
            ))}
          </div>
        </div>
        
        {/* Footer bottom links */}
        <div className="mt-12 flex flex-col md:flex-row justify-between items-center font-mono text-xs">
          <div className="mb-4 md:mb-0 text-cyber-terminal-green opacity-70">
            <p>// &copy; {new Date().getFullYear()} CyberInvaders - NIET Cyber Security Club</p>
          </div>
          
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-cyber-primary">Privacy</a>
            <a href="#" className="text-gray-400 hover:text-cyber-primary">Terms</a>
            <a href="#" className="text-gray-400 hover:text-cyber-primary">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
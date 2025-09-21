# CyberInvaders – NIET Cyber Security Club Website

A futuristic, cyberpunk-themed website for the NIET Cyber Security Club built with Next.js and TailwindCSS.

## 🚀 Features

- **Dark, futuristic UI** with glowing neon accents (cyan, purple, green)
- **Interactive storytelling** with progressive "access level" unlocking
- **Smooth animations** using GSAP and Framer Motion
- **Matrix-style background** on the landing page
- **Terminal-style elements** including typing effects and command prompts
- **Glassmorphism cards** with hover effects
- **Holographic team profiles** with flip animations
- **Neon timeline** for events display
- **Terminal-style signup form** with sequential input fields

## 🛠️ Tech Stack

- **Frontend**: Next.js with TypeScript
- **Styling**: TailwindCSS with custom cyberpunk theme
- **UI Components**: shadcn/ui for base components
- **Animations**:
  - GSAP for scroll animations
  - Framer Motion for component transitions
  - Canvas-based Matrix rain effect
  - Custom terminal typing effects
- **Special Effects**:
  - Progressive section unlocking
  - Holographic card effects
  - Neon text with custom shadows
  - Glitch animations

## 🏗️ Project Structure

```
cyber-invaders/
├── components/
│   ├── animations/
│   │   ├── MatrixBackground.tsx
│   │   ├── ProgressiveAccessEffect.tsx
│   │   └── TypingEffect.tsx
│   ├── sections/
│   │   ├── AboutSection.tsx
│   │   ├── ActivitiesSection.tsx
│   │   ├── DevelopersSection.tsx
│   │   ├── EventsSection.tsx
│   │   ├── FooterSection.tsx
│   │   ├── HeroSection.tsx
│   │   ├── JoinUsSection.tsx
│   │   └── TeamSection.tsx
│   └── ui/ (shadcn components)
├── lib/
│   └── hooks/
├── public/
│   └── images/
└── src/
    └── app/
        ├── backface-utilities.css
        ├── globals.css
        ├── layout.tsx
        └── page.tsx
```

## 🎭 Page Sections

1. **Landing/Hero**:
   - Matrix-style code rain background
   - Animated "Decrypting..." to "Access Granted" text
   - Neon-styled heading and CTA button

2. **About Us**:
   - Scroll-triggered animations
   - Cybersecurity mission statement
   - Visual shield/firewall effects

3. **Activities**:
   - Interactive glassmorphism cards
   - Hover animations with neon glow
   - 6 main activity categories

4. **Events Timeline**:
   - Neon timeline with past/upcoming events
   - Interactive event cards with terminal-style pop-ups
   - Animated line drawing effect

5. **Team Section**:
   - Holographic cards for team members
   - "Hacking into profile" hover effect
   - Faculty and student coordinator sections

6. **Developers Section**:
   - Credits for website developers
   - Interactive profile cards
   - Tech stack information

7. **Join Us**:
   - Terminal-style form with sequential inputs
   - Blinking cursor effects
   - Terminal-themed success message

8. **Footer**:
   - Command-line terminal style
   - Animated typing effect
   - Social media links with neon icons

## ✨ Special Feature: Progressive Access Storytelling

The website implements a unique storytelling flow where each section is initially "locked" and gradually unlocks as the user scrolls down:

- Each section is designated as an "Access Level"
- When a user scrolls to a section, it triggers an "unlocking" animation for the next section
- Visual feedback includes terminal messages, lock/unlock icons, and highlight effects
- Creates an immersive experience of breaching deeper into a secure system

---

© 2025 CyberInvaders - NIET Cyber Security Club
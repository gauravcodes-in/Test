import HeroSection from "../../components/sections/HeroSection";
import AboutSection from "../../components/sections/AboutSection";
import ActivitiesSection from "../../components/sections/ActivitiesSection";
import EventsSection from "../../components/sections/EventsSection";
import TeamSection from "../../components/sections/TeamSection";
import DevelopersSection from "../../components/sections/DevelopersSection";
import JoinUsSection from "../../components/sections/JoinUsSection";
import FooterSection from "../../components/sections/FooterSection";
import ProgressiveAccessEffect from "../../components/animations/ProgressiveAccessEffect";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Add the progressive access effect */}
      <ProgressiveAccessEffect />
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* About Section */}
      <div id="about" className="access-level mt-20 max-w-5xl mx-auto">
        <span className="access-level-header">ACCESS LEVEL 1</span>
        <AboutSection />
      </div>
      
      {/* Activities Section */}
      <div id="activities" className="access-level mt-20 max-w-6xl mx-auto">
        <span className="access-level-header">ACCESS LEVEL 2</span>
        <ActivitiesSection />
      </div>
      
      {/* Events Timeline Section */}
      <div id="events" className="access-level mt-20 max-w-6xl mx-auto">
        <span className="access-level-header">ACCESS LEVEL 3</span>
        <EventsSection />
      </div>
      
      {/* Team Section */}
      <div id="team" className="access-level mt-20 max-w-6xl mx-auto">
        <span className="access-level-header">ACCESS LEVEL 4</span>
        <TeamSection />
      </div>
      
      {/* Developers Section */}
      <div id="developers" className="access-level mt-20 max-w-6xl mx-auto">
        <span className="access-level-header">ACCESS LEVEL 5</span>
        <DevelopersSection />
      </div>
      
      {/* Join Us Section */}
      <div id="join" className="access-level mt-20 max-w-6xl mx-auto">
        <span className="access-level-header">ACCESS LEVEL 6</span>
        <JoinUsSection />
      </div>
      
      {/* Footer */}
      <FooterSection />
    </div>
  );
}

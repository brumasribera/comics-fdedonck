import logo from "figma:asset/1b95d8eaf5e039e8f5347493a50ad998ff2ee01c.png";
import { Github, Mail } from "lucide-react";

export default function Hero() {
  return (
    <header className="relative min-h-screen flex items-center justify-center bg-white">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-50 via-white to-neutral-100/30" />
      
      <div className="relative z-10 container mx-auto px-6 md:px-12 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* Left column - Logo */}
          <div className="flex justify-center md:justify-end order-2 md:order-1">
            <div className="relative">
              <img 
                src={logo} 
                alt="Fien De Doncker" 
                className="w-72 h-72 md:w-96 md:h-96 object-contain"
              />
            </div>
          </div>
          
          {/* Right column - Text */}
          <div className="order-1 md:order-2 space-y-8">
            <div>
              <p className="text-neutral-400 tracking-[0.3em] mb-4 uppercase">Portfolio</p>
              <h1 className="mb-6">
                Fien De Doncker
              </h1>
              <div className="w-16 h-0.5 bg-neutral-900 mb-8" />
              <p className="text-neutral-600 leading-relaxed max-w-md">
                Comics exploring the intersection of science, art, and storytelling. 
                Making the invisible visible through narratives of climate, justice, and human experience.
              </p>
            </div>
            
            <div className="flex gap-6">
              <a 
                href="mailto:fien.a.c.de.doncker@gmail.com"
                className="text-neutral-900 hover:text-neutral-600 transition-colors flex items-center gap-2"
              >
                <Mail className="w-5 h-5" />
                <span>Contact</span>
              </a>
              <a 
                href="https://github.com/fdedonck/Comics"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-900 hover:text-neutral-600 transition-colors flex items-center gap-2"
              >
                <Github className="w-5 h-5" />
                <span>GitHub</span>
              </a>
            </div>
          </div>
          
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-neutral-400">
        <div className="w-px h-16 bg-neutral-300 mx-auto mb-2" />
        <p className="text-xs tracking-widest uppercase">Scroll</p>
      </div>
    </header>
  );
}

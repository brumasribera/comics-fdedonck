'use client'

import { Mail, Github } from "lucide-react"

export default function Footer() {
  return (
    <footer className="py-20 px-6 md:px-12 bg-white border-t border-neutral-200">
      <div className="container mx-auto max-w-7xl">
        
        <div className="grid md:grid-cols-2 gap-16 mb-16">
          
          <div className="space-y-6">
            <p className="text-neutral-400 tracking-[0.3em] uppercase">Get in Touch</p>
            <h3 className="text-lg font-medium text-neutral-900 max-w-md">
              Interested in collaboration or featuring this work?
            </h3>
            <p className="text-neutral-600 leading-relaxed max-w-md">
              Feel free to reach out for collaborations, exhibitions, or if you'd like to feature these comics.
            </p>
          </div>
          
          <div className="flex flex-col justify-center space-y-4">
            <a 
              href="mailto:fien.a.c.de.doncker@gmail.com"
              className="flex items-center gap-3 text-neutral-900 hover:text-neutral-600 transition-colors group"
            >
              <Mail className="w-5 h-5" />
              <span className="border-b border-transparent group-hover:border-neutral-600">
                fien.a.c.de.doncker@gmail.com
              </span>
            </a>
            
            <a 
              href="https://github.com/fdedonck/Comics"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-neutral-900 hover:text-neutral-600 transition-colors group"
            >
              <Github className="w-5 h-5" />
              <span className="border-b border-transparent group-hover:border-neutral-600">
                github.com/fdedonck/Comics
              </span>
            </a>
          </div>
          
        </div>

        <div className="pt-12 border-t border-neutral-200 flex flex-col md:flex-row justify-between items-center gap-4 text-neutral-500">
          <p>© 2025 Fien De Doncker</p>
          <p className="text-neutral-400">All rights reserved</p>
        </div>

      </div>
    </footer>
  )
}


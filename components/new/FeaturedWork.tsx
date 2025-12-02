'use client'

import { ImageWithFallback } from "./ImageWithFallback"
import { Award } from "lucide-react"

export default function FeaturedWork() {
  return (
    <section className="py-32 px-6 md:px-12 bg-white">
      <div className="container mx-auto max-w-7xl">
        
        {/* Section header */}
        <div className="mb-20 max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <Award className="w-6 h-6 text-neutral-900" />
            <p className="text-neutral-400 tracking-[0.3em] uppercase">Award Winning</p>
          </div>
          <h2 className="text-xl md:text-2xl font-medium mb-6 text-neutral-900">Figure 1A 2025</h2>
          <div className="w-16 h-0.5 bg-neutral-900 mb-6" />
          <p className="text-neutral-600 leading-relaxed">
            Winner of the jury award – Figure 1A Sci-Art Competition 2025. 
            Two visual narratives exploring the relationship between nature, humanity, and invisible forces.
          </p>
        </div>

        {/* Silent Robber */}
        <div className="mb-32">
          <div className="grid md:grid-cols-5 gap-12 items-center">
            <div className="md:col-span-3 relative aspect-[4/3] overflow-hidden">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1632416964939-ab163e49973f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnbGFjaWVyJTIwaWNlJTIwbGFuZHNjYXBlfGVufDF8fHx8MTc2NDYyNDU1Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Silent Robber"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="md:col-span-2 space-y-4">
              <p className="text-neutral-400 tracking-[0.2em] uppercase">01</p>
              <h3 className="text-lg font-medium text-neutral-900">Silent Robber</h3>
              <p className="text-neutral-600 leading-relaxed">
                Visual reflections on glacial erosion, landscapes, and the stories hidden beneath the ice. 
                An exploration of time, memory, and the slow transformation of our planet.
              </p>
              <a 
                href="https://github.com/fdedonck/Comics/tree/main/Figure%201A%202025"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-neutral-900 hover:text-neutral-600 transition-colors border-b border-neutral-900 hover:border-neutral-600 pb-1"
              >
                View on GitHub →
              </a>
            </div>
          </div>
        </div>

        {/* Borrowed Shade */}
        <div>
          <div className="grid md:grid-cols-5 gap-12 items-center">
            <div className="md:col-span-2 space-y-4 order-2 md:order-1">
              <p className="text-neutral-400 tracking-[0.2em] uppercase">02</p>
              <h3 className="text-lg font-medium text-neutral-900">Borrowed Shade</h3>
              <p className="text-neutral-600 leading-relaxed">
                Urban heat islands and social inequalities. A meditation on access to comfort, 
                the unequal distribution of environmental burdens, and the cooling shadows we share—or don't.
              </p>
              <a 
                href="https://github.com/fdedonck/Comics/tree/main/Figure%201A%202025"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-neutral-900 hover:text-neutral-600 transition-colors border-b border-neutral-900 hover:border-neutral-600 pb-1"
              >
                View on GitHub →
              </a>
            </div>
            <div className="md:col-span-3 relative aspect-[4/3] overflow-hidden order-1 md:order-2">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1685897023785-02c63e476c5f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1cmJhbiUyMGhlYXQlMjBjaXR5JTIwc3VtbWVyfGVufDF8fHx8MTc2NDYyNDU1Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Borrowed Shade"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}


'use client'

export default function Philosophy() {
  return (
    <section className="py-32 px-6 md:px-12 bg-neutral-900 text-white">
      <div className="container mx-auto max-w-5xl">
        
        <div className="text-center mb-20">
          <blockquote className="mb-8">
            <p className="text-2xl md:text-3xl italic text-neutral-200 leading-relaxed">
              "Art touches, science enlightens,<br />together they can lead to action."
            </p>
          </blockquote>
        </div>

        <div className="grid md:grid-cols-3 gap-16 mb-20">
          <div className="space-y-4">
            <div className="w-12 h-0.5 bg-white/30" />
            <h3 className="text-lg font-medium text-white">Making the Invisible Visible</h3>
            <p className="text-neutral-400 leading-relaxed">
              Each comic aims to reveal hidden structures, forgotten stories, and overlooked connections 
              in our shared experience of the world.
            </p>
          </div>
          
          <div className="space-y-4">
            <div className="w-12 h-0.5 bg-white/30" />
            <h3 className="text-lg font-medium text-white">Science Meets Art</h3>
            <p className="text-neutral-400 leading-relaxed">
              Bridging research and creativity, these works transform data and observations 
              into narratives that resonate emotionally and intellectually.
            </p>
          </div>
          
          <div className="space-y-4">
            <div className="w-12 h-0.5 bg-white/30" />
            <h3 className="text-lg font-medium text-white">Stories for Change</h3>
            <p className="text-neutral-400 leading-relaxed">
              From climate to justice, these comics explore urgent themes with care, 
              inviting reflection and inspiring action.
            </p>
          </div>
        </div>

        <div className="max-w-2xl mx-auto text-center space-y-6 pt-12 border-t border-white/10">
          <p className="text-neutral-400">
            This portfolio is a growing collection at the intersection of science, art, and storytelling.
          </p>
          <p className="text-neutral-500 italic">
            Please ask before sharing these works elsewhere.
          </p>
        </div>

      </div>
    </section>
  )
}


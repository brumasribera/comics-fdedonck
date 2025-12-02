'use client'

import Image from "next/image"
import { ArrowDown, Github, Mail } from "lucide-react"

const heroImage = {
  src: "/Figure 1A 2025/BorrowedShade_lowres.jpg",
  alt: "Borrowed Shade — exploring urban heat islands and social inequality"
}

const highlights = [
  {
    label: "Latest award",
    value: "Figure 1A Jury Award · 2025"
  },
  {
    label: "Focus",
    value: "Science communication, justice & fieldwork"
  },
  {
    label: "Mediums",
    value: "Comics · Research diaries · Poster narratives"
  }
]

export default function Hero() {
  const scrollToCollections = () => {
    if (typeof document === "undefined") return
    document.getElementById("collections")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <header className="relative isolate flex min-h-screen items-center justify-center overflow-hidden bg-neutral-950 text-white">
      <div className="absolute inset-0 -z-20">
        <Image
          src={heroImage.src}
          alt={heroImage.alt}
          fill
          sizes="100vw"
          priority
          className="object-cover"
        />
      </div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-neutral-950/90 via-neutral-950/70 to-neutral-900/40" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.25),_transparent_55%)] opacity-60 mix-blend-soft-light" />

      <div className="relative z-10 w-full max-w-6xl px-6 py-24 md:px-12">
        <div className="max-w-4xl space-y-10">
            <div>
              <p className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.4em] text-neutral-200/80">
                Portfolio
                <span className="h-px w-16 bg-neutral-200/60" aria-hidden />
                Science · Art · Storytelling
              </p>
              <h1 className="mt-6 text-4xl font-medium text-white md:text-5xl">
                Fien De Doncker
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-neutral-100/85">
                Comics that translate research, climate data, and lived experience into stories that can be felt.
                I draw on field notes, collaborations, and activism to make the invisible visible and inspire action.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <button
                type="button"
                onClick={scrollToCollections}
                className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-neutral-900 transition hover:bg-neutral-100"
              >
                View Collections
              </button>
              <a
                href="mailto:fien.a.c.de.doncker@gmail.com"
                className="inline-flex items-center gap-2 rounded-full border border-white/50 px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:border-white hover:bg-white/10"
              >
                <Mail className="h-4 w-4" />
                Contact
              </a>
              <a
                href="https://github.com/fdedonck/Comics"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/50 px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:border-white hover:bg-white/10"
              >
                <Github className="h-4 w-4" />
                GitHub
              </a>
            </div>

            <div className="grid gap-6 sm:grid-cols-3">
              {highlights.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur"
                >
                  <p className="text-xs uppercase tracking-[0.4em] text-neutral-200/70">{item.label}</p>
                  <p className="mt-3 text-base font-medium text-white">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-xs uppercase tracking-[0.4em] text-neutral-200/80">
        <div className="flex flex-col items-center gap-3">
          <ArrowDown className="h-6 w-6 animate-bounce" />
          <span>Scroll</span>
        </div>
      </div>
    </header>
  )
}


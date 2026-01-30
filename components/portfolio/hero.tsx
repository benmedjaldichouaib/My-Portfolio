"use client"

import { useLanguage } from "@/context/language-context"
import { Button } from "@/components/ui/button"
import { Download, ArrowDown } from "lucide-react"

export function Hero() {
  const { t, dir } = useLanguage()

  const scrollToAbout = () => {
    const element = document.querySelector("#about")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="home"
      dir={dir}
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />
      
      {/* Glow effect */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Greeting */}
          <p className="text-muted-foreground text-sm sm:text-base mb-4 tracking-wide">
            {t("hero.greeting")}
          </p>

          {/* Name */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4 tracking-tight text-balance">
            {t("hero.name")}
          </h1>

          {/* Title */}
          <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-primary mb-6">
            {t("hero.title")}
          </h2>

          {/* Description */}
          <p className="text-muted-foreground text-base sm:text-lg max-w-xl mx-auto mb-10 leading-relaxed text-pretty">
            {t("hero.description")}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="gap-2 min-w-[180px]">
              <a href="/CV.pdf" download>
                <Download className="h-4 w-4" />
                {t("hero.downloadCV")}
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={scrollToAbout}
              className="gap-2 min-w-[180px] bg-transparent"
            >
              {t("nav.about")}
              <ArrowDown className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-1.5 bg-muted-foreground rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  )
}

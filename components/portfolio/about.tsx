"use client"

import { useLanguage } from "@/context/language-context"
import { User, Code, Sparkles } from "lucide-react"

export function About() {
  const { t, dir } = useLanguage()

  return (
    <section id="about" dir={dir} className="py-20 sm:py-32 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-12">
          <div className="h-px flex-1 bg-border max-w-[60px]" />
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
            {t("about.title")}
          </h2>
          <div className="h-px flex-1 bg-border" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
              {t("about.description1")}
            </p>
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
              {t("about.description2")}
            </p>
          </div>

          {/* Cards */}
          <div className="grid gap-4">
            <div className="p-6 rounded-xl border border-border/50 bg-card hover:border-primary/40 transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <User className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Passionate Developer</h3>
                  <p className="text-muted-foreground text-sm">
                    Building clean and efficient user interfaces
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-xl border border-border/50 bg-card hover:border-primary/40 transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <Code className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Modern Technologies</h3>
                  <p className="text-muted-foreground text-sm">
                    React, Next.js, Tailwind CSS and more
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-xl border border-border/50 bg-card hover:border-primary/40 transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <Sparkles className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Continuous Learning</h3>
                  <p className="text-muted-foreground text-sm">
                    Always improving and exploring new skills
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

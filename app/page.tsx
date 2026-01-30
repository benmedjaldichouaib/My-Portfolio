"use client"

import { useEffect } from "react"
import { LanguageProvider, useLanguage } from "@/context/language-context"
import { Header } from "@/components/portfolio/header"
import { Hero } from "@/components/portfolio/hero"
import { About } from "@/components/portfolio/about"
import { Skills } from "@/components/portfolio/skills"
import { Projects } from "@/components/portfolio/projects"
import { Contact } from "@/components/portfolio/contact"
import { Footer } from "@/components/portfolio/footer"

function PortfolioContent() {
  const { dir, language } = useLanguage()

  useEffect(() => {
    document.documentElement.dir = dir
    document.documentElement.lang = language
  }, [dir, language])

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default function Home() {
  return (
    <LanguageProvider>
      <PortfolioContent />
    </LanguageProvider>
  )
}

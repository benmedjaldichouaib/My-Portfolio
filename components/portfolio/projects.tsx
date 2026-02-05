"use client"

import { useLanguage } from "@/context/language-context"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink, Folder } from "lucide-react"

export function Projects() {
  const { t, dir, language } = useLanguage()

  const projects = [
    {
      title: t("projects.project1.title"),
      description: t("projects.project1.description"),
      tags: ["Next.js", "React", "Tailwind CSS"],
      github: "https://github.com/benmedjaldichouaib/Portfolio",
      demo: "https://Chouaibportfolio.vercel.app",
    },
    {
      title: t("projects.project2.title"),
      description: t("projects.project2.description"),
      tags: ["Streamlit", "Python", "CSS","AI","APIs"],
      github: "https://github.com/benmedjaldichouaib/Biogenapp",
      demo: "https://biogenapp.onrender.com",
    },
    {
      title: t("projects.project3.title"),
      description: t("projects.project3.description"),
      tags: ["React", "Python", "HTML", "CSS",  "Gemini API", "JavaScript"],
      github: "https://github.com/benmedjaldichouaib/pdf-word-summarizer",
      demo: "https://pdf-word-summarizer.onrender.com",
    },
    {
      title: t("projects.project4.title"),
      description: t("projects.project4.description"),
      tags: ["HTML","CSS", "Python", "JavaScript"],
      github: "https://github.com/benmedjaldichouaib/image-compressor-web",
      demo: "https://image-compressor-web-am7c.onrender.com",
    },
    {
      title: t("projects.project5.title"),
      description: t("projects.project5.description"),
      tags: ["Telegram API", "Python", "AI"],
      github: "https://github.com/benmedjaldichouaib/Tel_bot1",
      demo: "https://tel-bot1-0zu9.onrender.com",
    },
    {
      title: t("projects.project6.title"),
      description: t("projects.project6.description"),
      tags: ["Python", "Telegram Bot", "E-commerce", "SQLite", "Automation"],
      github: "https://github.com/benmedjaldichouaib/Tel_Shop_bot",
      demo: "https://web.telegram.org/k/#@Chouaibshop19_bot",
    },
  ]

  return (
    <section id="projects" dir={dir} className="py-20 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-12">
          <div className="h-px flex-1 bg-border max-w-[60px]" />
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
            {t("projects.title")}
          </h2>
          <div className="h-px flex-1 bg-border" />
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative p-6 rounded-xl border border-border/50 bg-card hover:border-primary/40 transition-all duration-300"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary">
                  <Folder className="h-6 w-6" />
                </div>
                <div className={`flex items-center gap-3 ${language === 'ar' ? 'flex-row-reverse' : ''}`}>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={project.github}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    aria-label="View code on GitHub"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={project.demo}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    aria-label="View live demo"
                  >
                    <ExternalLink className="h-5 w-5" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-1 rounded-md bg-muted text-muted-foreground font-mono"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

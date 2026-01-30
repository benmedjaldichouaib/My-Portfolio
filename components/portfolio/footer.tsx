"use client"

import { useLanguage } from "@/context/language-context"

export function Footer() {
  const { dir } = useLanguage()
  const currentYear = new Date().getFullYear()

  return (
    <footer dir={dir} className="py-8 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Chouaib. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Built with Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}

'use client'

import "./globals.css"
// import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"

const inter = Inter({ subsets: ["latin"] })

// export const metadata: Metadata = {
//   title: "Depan.Go - 24/7 Roadside Assistance",
//   description: "Get reliable roadside assistance services including towing, battery jump-start, tire change, fuel delivery, and more, all through our easy-to-use mobile app.",
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [scrolling, setScrolling] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const bodyHeight = window.innerHeight - 80
      console.log("scrollTop", scrollTop)
      console.log("bodyHeight", bodyHeight)
      console.log("scrolling", scrollTop > bodyHeight)
      setScrolling(scrollTop > bodyHeight)
    }
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])
  const path = usePathname()
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          <Navbar className={cn(path === "/" ? "home": "", scrolling ? "scroll" : "")} />
          <div className="flex-1">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  )
}
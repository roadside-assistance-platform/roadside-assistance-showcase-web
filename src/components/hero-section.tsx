import Link from "next/link"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="py-20 md:py-32 overflow-hidden flex justify-center">
      <div className="container flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Roadside Assistance <span className="text-primary">When You Need It Most</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            24/7 reliable assistance for any roadside emergency, just a tap away on your smartphone.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button size="lg" asChild>
              <Link href="https://play.google.com/store" target="_blank">Download App</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/about">Learn More</Link>
            </Button>
          </div>
          <div className="pt-4 flex items-center gap-4">
            <div className="flex -space-x-2">
              {/* PLACEHOLDER: Add user avatar SVGs here */}
            </div>
            <p className="text-sm text-muted-foreground">
              <span className="font-medium">4.9/5</span> from over 10,000+ happy customers
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/2 mt-12 md:mt-0 flex justify-center">
          {/* PLACEHOLDER: Add hero image SVG here */}
        </div>
      </div>
    </section>
  )
}
'use client'

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { VideoBackground } from "./video-background";

export function HeroSection() {
  return (
    <div className="relative box-border">
      <VideoBackground />
      <section className="h-screen py-20 md:py-32 overflow-hidden flex justify-center relative z-3">
        <div className="container pt-16 flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white">
              Roadside Assistance{" "}
              <span className="text-primary">When You Need It Most</span>
            </h1>
            <p className="text-xl text-white/70 dark:text-black/80">
              24/7 reliable assistance for any roadside emergency, just a tap away
              on your smartphone.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" asChild>
                <Link href="https://play.google.com/store" target="_blank">
                  Download App
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/about">Learn More</Link>
              </Button>
            </div>
            <div className="pt-4 flex items-center gap-4">
              <div className="">
                {/* <StarRating size={.5}/> */}
              </div>
              <p className="text-sm text-white/70">
                <span className="font-medium">4.9/5</span> from over 10,000+ happy
                customers
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 mt-12 md:mt-0 flex justify-center">
            {/* PLACEHOLDER: Add hero image SVG here */}
          </div>
        </div>
      </section>
    </div>
  );
}

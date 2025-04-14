import Link from "next/link"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "About Depan.Go - Our Story & Mission",
  description: "Learn about Depan.Go's mission to revolutionize roadside assistance with technology and reliable service providers.",
}

export default function AboutPage() {
  return (
    <main>
      <section className="py-20 bg-slate-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Depan.Go</h1>
            <p className="text-xl text-muted-foreground">
              Revolutionizing roadside assistance with technology and reliable service.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              {/* PLACEHOLDER: Add company image/illustration SVG here */}
              <div className="aspect-video bg-slate-100 rounded-lg"></div>
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Our Story</h2>
              <p className="text-lg">
                Depan.Go was founded in 2023 with a simple mission: to eliminate the anxiety and uncertainty that comes with vehicle breakdowns and roadside emergencies.
              </p>
              <p className="text-lg">
                After experiencing firsthand the frustration of waiting hours for help with no updates or estimated arrival times, our founders knew there had to be a better way to provide roadside assistance in the digital age.
              </p>
              <p className="text-lg">
                By combining mobile technology, GPS tracking, and a network of vetted service providers, Depan.Go was born to provide fast, transparent, and reliable roadside assistance.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 order-2 md:order-1">
              <h2 className="text-3xl font-bold">Our Mission</h2>
              <p className="text-lg">
                We&apos;re on a mission to revolutionize roadside assistance by putting control and transparency back in the hands of drivers.
              </p>
              <p className="text-lg">
                We believe that getting help when you&apos;re stranded shouldn&apos;t be stressful or complicated. With real-time tracking, upfront pricing, and a network of professional service providers, we aim to make roadside emergencies less of an ordeal.
              </p>
              <p className="text-lg">
                Our commitment extends beyond just providing assistance—we&apos;re building a community of trust between drivers and service providers that elevates the entire roadside assistance experience.
              </p>
            </div>
            <div className="order-1 md:order-2">
              {/* PLACEHOLDER: Add mission image/illustration SVG here */}
              <div className="aspect-video bg-slate-100 rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Core Values</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 border rounded-lg">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                {/* PLACEHOLDER: Add reliability icon SVG here */}
              </div>
              <h3 className="text-xl font-medium mb-3">Reliability</h3>
              <p>
                We understand that when you&apos;re stranded, you need help you can count on. That&apos;s why we only partner with the most dependable service providers.
              </p>
            </div>
            
            <div className="text-center p-6 border rounded-lg">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                {/* PLACEHOLDER: Add transparency icon SVG here */}
              </div>
              <h3 className="text-xl font-medium mb-3">Transparency</h3>
              <p>
                From real-time tracking to upfront pricing, we believe in complete transparency throughout the roadside assistance process.
              </p>
            </div>
            
            <div className="text-center p-6 border rounded-lg">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                {/* PLACEHOLDER: Add innovation icon SVG here */}
              </div>
              <h3 className="text-xl font-medium mb-3">Innovation</h3>
              <p>
                We&apos;re constantly improving our technology to make getting roadside help faster, easier, and more efficient for both drivers and service providers.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Experience Better Roadside Assistance?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Download our app today and join thousands of drivers who never worry about being stranded again.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="https://play.google.com/store" target="_blank">Download App</Link>
          </Button>
        </div>
      </section>
    </main>
  )
}
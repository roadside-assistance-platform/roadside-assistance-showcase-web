import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export function ServicesSection() {
  return (
    <section className="py-20" id="services">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-xl text-muted-foreground">
            We offer a comprehensive range of roadside assistance services to keep you moving.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card id="towing">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                {/* PLACEHOLDER: Add tow truck icon SVG here */}
              </div>
              <CardTitle>Towing Services</CardTitle>
              <CardDescription>
                Professional towing for all vehicle types
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>We provide safe and reliable towing services for cars, motorcycles, and light trucks to the nearest repair facility or your preferred location.</p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" asChild>
                <Link href="/contact">Get Help Now</Link>
              </Button>
            </CardFooter>
          </Card>
          
          <Card id="battery">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                {/* PLACEHOLDER: Add battery icon SVG here */}
              </div>
              <CardTitle>Battery Jump-Start</CardTitle>
              <CardDescription>
                Quick battery assistance
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>Dead battery? Our providers carry professional-grade equipment to jump-start your vehicle safely and get you back on the road quickly.</p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" asChild>
                <Link href="/contact">Get Help Now</Link>
              </Button>
            </CardFooter>
          </Card>
          
          <Card id="tire">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                {/* PLACEHOLDER: Add tire icon SVG here */}
              </div>
              <CardTitle>Tire Change</CardTitle>
              <CardDescription>
                Fast flat tire replacement
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>Got a flat? Our trained professionals will safely change your tire with your spare or provide temporary solutions to get you to a repair facility.</p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" asChild>
                <Link href="/contact">Get Help Now</Link>
              </Button>
            </CardFooter>
          </Card>
          
          <Card id="fuel">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                {/* PLACEHOLDER: Add fuel/gas icon SVG here */}
              </div>
              <CardTitle>Fuel Delivery</CardTitle>
              <CardDescription>
                Emergency fuel when you run empty
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>Out of gas? We&apos;ll deliver enough fuel to get you to the nearest gas station, saving you time and hassle.</p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" asChild>
                <Link href="/contact">Get Help Now</Link>
              </Button>
            </CardFooter>
          </Card>
          
          <Card id="lockout">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                {/* PLACEHOLDER: Add key/lock icon SVG here */}
              </div>
              <CardTitle>Lockout Assistance</CardTitle>
              <CardDescription>
                Professional help when locked out
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>Locked your keys in your car? Our skilled technicians can help you regain access to your vehicle without causing damage.</p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" asChild>
                <Link href="/contact">Get Help Now</Link>
              </Button>
            </CardFooter>
          </Card>
          
          <Card id="winching">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                {/* PLACEHOLDER: Add winch icon SVG here */}
              </div>
              <CardTitle>Winching Services</CardTitle>
              <CardDescription>
                Recovery from tough situations
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>Stuck in mud, snow, or a ditch? Our providers have the equipment and expertise to safely recover your vehicle.</p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" asChild>
                <Link href="/contact">Get Help Now</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  )
}
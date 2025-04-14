import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata = {
  title: "Join Our Provider Network - Depan.Go",
  description: "Become a service provider for Depan.Go and grow your roadside assistance business with our platform.",
}

export default function ProvidersPage() {
  return (
    <main>
      <section className="py-20 bg-slate-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Join Our Provider Network</h1>
            <p className="text-xl text-muted-foreground">
              Partner with Depan.Go and grow your roadside assistance business.
            </p>
            <Button size="lg" className="mt-8" asChild>
              <Link href="https://play.google.com/store" target="_blank">Download Provider App</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20" id="benefits">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">Benefits of Becoming a Provider</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  {/* PLACEHOLDER: Add money/income icon SVG here */}
                </div>
                <CardTitle>Increased Revenue</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Access a steady stream of service requests in your area and fill gaps in your schedule to maximize earning potential.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  {/* PLACEHOLDER: Add flexible schedule icon SVG here */}
                </div>
                <CardTitle>Flexible Schedule</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Set your own availability and work when it&apos;s convenient for you. Accept only the jobs that fit your schedule and expertise.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  {/* PLACEHOLDER: Add payment icon SVG here */}
                </div>
                <CardTitle>Quick Payments</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Get paid quickly and reliably through our secure payment system, with transparent fee structures and no hidden costs.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  {/* PLACEHOLDER: Add technology icon SVG here */}
                </div>
                <CardTitle>Advanced Technology</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Our provider app offers route optimization, customer communication tools, and streamlined job management to make your work easier.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  {/* PLACEHOLDER: Add growth icon SVG here */}
                </div>
                <CardTitle>Business Growth</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Build your reputation through customer ratings and reviews, helping you grow your business and attract more clients.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  {/* PLACEHOLDER: Add support icon SVG here */}
                </div>
                <CardTitle>Dedicated Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Access provider-specific support for any issues or questions that arise while using our platform or serving customers.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50" id="requirements">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">Requirements</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="mr-4 mt-1 text-primary">
                  {/* PLACEHOLDER: Add check icon SVG here */}
                  ✓
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Valid Business License</h3>
                  <p className="text-muted-foreground">Active business license for roadside assistance or towing services in your operating area.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 mt-1 text-primary">
                  {/* PLACEHOLDER: Add check icon SVG here */}
                  ✓
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Insurance Coverage</h3>
                  <p className="text-muted-foreground">Commercial liability insurance with minimum coverage of $1 million per incident.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 mt-1 text-primary">
                  {/* PLACEHOLDER: Add check icon SVG here */}
                  ✓
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Clean Background</h3>
                  <p className="text-muted-foreground">Must pass a comprehensive background check for all drivers and technicians.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 mt-1 text-primary">
                  {/* PLACEHOLDER: Add check icon SVG here */}
                  ✓
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Proper Equipment</h3>
                  <p className="text-muted-foreground">Well-maintained and properly equipped service vehicles suitable for the services you offer.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 mt-1 text-primary">
                  {/* PLACEHOLDER: Add check icon SVG here */}
                  ✓
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Smartphone with Data Plan</h3>
                  <p className="text-muted-foreground">Compatible Android device with reliable internet connection to run the provider app.</p>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              {/* PLACEHOLDER: Add service provider image/illustration SVG here */}
              <div className="aspect-square max-w-md w-full bg-slate-100 rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6">How to Join</h2>
          <p className="text-xl mb-12">Getting started as a Depan.Go service provider is simple.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 border rounded-lg">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
              <h3 className="text-xl font-medium mb-3">Apply</h3>
              <p className="text-muted-foreground">
                Download the provider app and complete the application form with your business details.
              </p>
            </div>
            
            <div className="p-6 border rounded-lg">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
              <h3 className="text-xl font-medium mb-3">Verification</h3>
              <p className="text-muted-foreground">
                Submit required documentation for verification of your business, insurance, and background check.
              </p>
            </div>
            
            <div className="p-6 border rounded-lg">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
              <h3 className="text-xl font-medium mb-3">Start Earning</h3>
              <p className="text-muted-foreground">
                Once approved, set your service area and availability to start receiving service requests.
              </p>
            </div>
          </div>
          
          <div className="mt-12">
            <Button size="lg" asChild>
              <Link href="https://play.google.com/store" target="_blank">Download Provider App</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
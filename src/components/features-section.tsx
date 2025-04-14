import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function FeaturesSection() {
  return (
    <section className="py-20 bg-slate-50" id="features">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Our Roadside Assistance</h2>
          <p className="text-xl text-muted-foreground">
            We provide fast, reliable service backed by sophisticated technology and expert service providers.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                {/* PLACEHOLDER: Add speed icon SVG here */}
              </div>
              <CardTitle>Fast Response Time</CardTitle>
              <CardDescription>
                Our network of providers ensures help arrives within minutes, not hours.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>Average response time of less than 30 minutes in urban areas and 45 minutes in rural areas.</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                {/* PLACEHOLDER: Add GPS/location icon SVG here */}
              </div>
              <CardTitle>Real-time Tracking</CardTitle>
              <CardDescription>
                Track your service provider&apos;s location in real-time through our app.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>Know exactly when help will arrive with accurate ETA updates and live location sharing.</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                {/* PLACEHOLDER: Add verified/check icon SVG here */}
              </div>
              <CardTitle>Verified Providers</CardTitle>
              <CardDescription>
                All service providers undergo thorough background checks and training.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>Rest assured that qualified, professional help is on the way when you need assistance.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
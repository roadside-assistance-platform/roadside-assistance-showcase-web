export function HowItWorksSection() {
  return (
    <section className="py-20 bg-slate-50" id="how-it-works">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-xl text-muted-foreground">
            Getting roadside assistance has never been easier with our simple process.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold">1</div>
            <div className="relative flex justify-center">
              {/* PLACEHOLDER: Add mobile app icon SVG here */}
            </div>
            <h3 className="text-xl font-medium mt-6 mb-3">Download & Request</h3>
            <p className="text-muted-foreground">
              Download our app and request assistance with just a few taps. Your location is automatically detected.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold">2</div>
            <div className="relative flex justify-center">
              {/* PLACEHOLDER: Add tracking/map icon SVG here */}
            </div>
            <h3 className="text-xl font-medium mt-6 mb-3">Track Your Provider</h3>
            <p className="text-muted-foreground">
              Watch as your service provider accepts your request and track their arrival in real-time through the app.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold">3</div>
            <div className="relative flex justify-center">
              {/* PLACEHOLDER: Add service completion icon SVG here */}
            </div>
            <h3 className="text-xl font-medium mt-6 mb-3">Get Back on the Road</h3>
            <p className="text-muted-foreground">
              Your provider will solve your issue promptly, and you can rate and pay for the service through the app.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
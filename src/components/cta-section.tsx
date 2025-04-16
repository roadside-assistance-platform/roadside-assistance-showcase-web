import GooglePlayButton from "./ui/GooglePlayButton"

export function CTASection() {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">Download Our App Today</h2>
            <p className="text-xl opacity-90">
              Get roadside assistance at your fingertips. Our app is available for Android devices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <GooglePlayButton className="w-70" />
            </div>
          </div>
          <div className="flex justify-center">
            {/* PLACEHOLDER: Add mobile app mockup SVG/image here */}
          </div>
        </div>
      </div>
    </section>
  )
}
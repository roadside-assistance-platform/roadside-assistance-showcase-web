import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata = {
  title: "Contact Us - Depan.Go",
  description: "Get in touch with Depan.Go's support team for help with our roadside assistance services or to provide feedback.",
}

export default function ContactPage() {
  return (
    <main>
      <section className="py-20 bg-slate-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-muted-foreground">
              We&apos;re here to help. Reach out with any questions or feedback.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">Name</label>
                    <Input id="name" placeholder="Your name" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">Email</label>
                    <Input id="email" type="email" placeholder="Your email address" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                  <Input id="subject" placeholder="What is this regarding?" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">Message</label>
                  <Textarea id="message" placeholder="How can we help you?" rows={6} />
                </div>
                <Button type="submit" size="lg">Send Message</Button>
              </form>
            </div>
            
            <div>
              <div className="space-y-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Emergency Assistance</CardTitle>
                    <CardDescription>For immediate roadside help</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center">
                      {/* PLACEHOLDER: Add app icon SVG here */}
                      <p className="ml-3">Download and use our app for the fastest service</p>
                    </div>
                    <div className="flex items-center">
                      {/* PLACEHOLDER: Add phone icon SVG here */}
                      <p className="ml-3">Call our 24/7 hotline: (800) 555-0123</p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Customer Support</CardTitle>
                    <CardDescription>For app issues or account help</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center">
                      {/* PLACEHOLDER: Add email icon SVG here */}
                      <p className="ml-3">support@Depan.Go.com</p>
                    </div>
                    <div className="flex items-center">
                      {/* PLACEHOLDER: Add clock icon SVG here */}
                      <p className="ml-3">Mon-Fri, 9am-6pm EST</p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Business Inquiries</CardTitle>
                    <CardDescription>For partnerships and opportunities</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center">
                      {/* PLACEHOLDER: Add email icon SVG here */}
                      <p className="ml-3">partnerships@Depan.Go.com</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
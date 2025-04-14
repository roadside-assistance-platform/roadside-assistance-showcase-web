import { FAQAccordion } from "@/components/faq-accordion"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Frequently Asked Questions - Depan.Go",
  description: "Find answers to common questions about Depan.Go's roadside assistance services, app functionality, pricing, and more.",
}

export default function FAQPage() {
  return (
    <main>
      <section className="py-20 bg-slate-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Frequently Asked Questions</h1>
            <p className="text-xl text-muted-foreground">
              Find answers to common questions about our roadside assistance services.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container max-w-4xl">
          <FAQAccordion />
          
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold mb-4">Still have questions?</h3>
            <p className="text-lg text-muted-foreground mb-6">
              We&apos;re here to help! Reach out to our support team for assistance.
            </p>
            <Button asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
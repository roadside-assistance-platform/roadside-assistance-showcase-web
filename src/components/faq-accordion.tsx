import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function FAQAccordion() {
  const faqs = [
    {
      question: "How does Depan.Go work?",
      answer: "Depan.Go connects you with nearby service providers through our mobile app. When you request assistance, our system matches you with available providers in your area. You can track their arrival in real-time and pay through the app once the service is complete."
    },
    {
      question: "How quickly can I expect help to arrive?",
      answer: "Response times vary based on your location and current demand, but our average response time is under 30 minutes in urban areas and 45 minutes in rural areas. The app will show you an estimated arrival time once a provider accepts your request."
    },
    {
      question: "What services do you offer?",
      answer: "We offer towing, battery jump-starts, tire changes, fuel delivery, lockout assistance, and winching services. All services are available 24/7 through our network of service providers."
    },
    {
      question: "How much do your services cost?",
      answer: "Pricing varies depending on the service needed and your location. You'll see the estimated price before confirming your request, and you'll only pay for the services you actually receive. There are no hidden fees or subscription requirements."
    },
    {
      question: "Do I need to have the app to request service?",
      answer: "Yes, our services are primarily available through our mobile app, which provides the best experience with features like real-time tracking and seamless payment. The app is available for free download on Android devices."
    },
    {
      question: "Are your service providers certified or insured?",
      answer: "Yes, all service providers in our network undergo background checks and must provide proof of proper licensing and insurance. Many are certified by automotive service excellence (ASE) or have other relevant industry certifications."
    },
    {
      question: "What happens if the provider can't fix my issue?",
      answer: "If your vehicle requires more than roadside assistance can provide, our providers can tow your vehicle to a nearby repair facility of your choice. The app will update the service and pricing accordingly."
    },
    {
      question: "How do I become a service provider for Depan.Go?",
      answer: "If you're interested in joining our provider network, you can apply through our 'For Providers' page or download the provider app. You'll need to meet our requirements for equipment, licensing, insurance, and background checks."
    }
  ]

  return (
    <Accordion type="single" collapsible className="w-full">
      {faqs.map((faq, index) => (
        <AccordionItem key={index} value={`item-${index}`}>
          <AccordionTrigger className="text-left font-medium">{faq.question}</AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            {faq.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
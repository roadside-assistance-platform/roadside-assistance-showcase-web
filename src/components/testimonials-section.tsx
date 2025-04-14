import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "Chicago, IL",
      comment: "I had a flat tire on the highway during rush hour. The app found me help within 15 minutes! The service provider was professional and got me back on the road quickly.",
      rating: 5,
    },
    {
      name: "Michael Thompson",
      location: "Denver, CO",
      comment: "Locked my keys in the car while hiking. Used the app to find help, and they arrived faster than expected even though I was in a remote area. Excellent service!",
      rating: 5,
    },
    {
      name: "Jennifer Martinez",
      location: "Austin, TX",
      comment: "Battery died in a shopping center parking lot. The app was easy to use, and I could track exactly when help would arrive. Great experience during a stressful situation.",
      rating: 5,
    },
    {
      name: "David Wilson",
      location: "Seattle, WA",
      comment: "Needed a tow after a minor accident. The service was prompt and the driver was courteous. Being able to track their arrival time helped reduce my anxiety.",
      rating: 4,
    },
  ]

  return (
    <section className="py-20" id="testimonials">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
          <p className="text-xl text-muted-foreground">
            Don&apos;t just take our word for it. Hear from people we&apos;ve helped.
          </p>
        </div>
        
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-yellow-400">
                          {/* PLACEHOLDER: Add star icon SVG here */}
                          ★
                        </span>
                      ))}
                    </div>
                    <p className="italic">{testimonial.comment}</p>
                  </CardContent>
                  <CardFooter className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-slate-200 mr-3">
                      {/* PLACEHOLDER: Add avatar SVG here */}
                    </div>
                    <div>
                      <p className="font-medium">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                    </div>
                  </CardFooter>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  )
}
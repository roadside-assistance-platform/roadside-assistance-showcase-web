import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Link from "next/link"

export function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="md:hidden">
          {/* PLACEHOLDER: Add menu icon SVG here */}
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle className="text-left">Menu</SheetTitle>
        </SheetHeader>
        <div className="flex flex-col gap-4 mt-6">
          <Link href="/" className="text-lg font-medium">
            Home
          </Link>
          <Link href="/about" className="text-lg font-medium">
            About
          </Link>
          <div className="py-2">
            <p className="text-lg font-medium mb-2">Services</p>
            <div className="pl-4 flex flex-col gap-2">
              <Link href="/#towing" className="text-muted-foreground">
                Towing
              </Link>
              <Link href="/#battery" className="text-muted-foreground">
                Battery Jump-Start
              </Link>
              <Link href="/#tire" className="text-muted-foreground">
                Tire Change
              </Link>
              <Link href="/#fuel" className="text-muted-foreground">
                Fuel Delivery
              </Link>
              <Link href="/#lockout" className="text-muted-foreground">
                Lockout Assistance
              </Link>
            </div>
          </div>
          <Link href="/for-providers" className="text-lg font-medium">
            For Providers
          </Link>
          <Link href="/faq" className="text-lg font-medium">
            FAQ
          </Link>
          <Link href="/contact" className="text-lg font-medium">
            Contact
          </Link>
          <div className="mt-4 pt-4 border-t">
            <Button className="w-full" asChild>
              <Link href="https://play.google.com/store" target="_blank">
                Download App
              </Link>
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
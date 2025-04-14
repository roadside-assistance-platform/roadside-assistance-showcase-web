import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { MobileNav } from "@/components/mobile-nav"

export function Navbar() {
  return (
    <header className="border-b sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center space-x-2">
            {/* PLACEHOLDER: Add your logo SVG here */}
            <span className="font-bold text-xl">Depan.Go</span>
          </Link>
          
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/" passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Home
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/about" passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    About
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                    <li className="row-span-3">
                      <Link href="/" className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md">
                        {/* PLACEHOLDER: Add service hero SVG here */}
                        <div className="mb-2 mt-4 text-lg font-medium">
                          All Services
                        </div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          View our comprehensive roadside assistance services
                        </p>
                      </Link>
                    </li>
                    <li>
                      <Link href="/#towing" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">Towing</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Fast towing service for all vehicle types
                        </p>
                      </Link>
                    </li>
                    <li>
                      <Link href="/#battery" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">Battery Jump-Start</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Quick battery assistance when you need it
                        </p>
                      </Link>
                    </li>
                    <li>
                      <Link href="/#tire" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">Tire Change</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Professional tire changing service
                        </p>
                      </Link>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/for-providers" passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    For Providers
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/faq" passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    FAQ
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/contact" passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Contact
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden sm:flex">
            <Button variant="outline" asChild>
              <Link href="https://play.google.com/store" target="_blank">Download App</Link>
            </Button>
          </div>
          <div className="hidden sm:flex">
            <Button asChild>
              <Link href="/contact">Get Help Now</Link>
            </Button>
          </div>
          <MobileNav />
        </div>
      </div>
    </header>
  )
}
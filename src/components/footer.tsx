import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t py-12 bg-slate-50">
      <div className="container grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="space-y-4">
          <Link href="/" className="flex items-center space-x-2">
            {/* PLACEHOLDER: Add your logo SVG here */}
            <span className="font-bold text-xl">Depan.Go</span>
          </Link>
          <p className="text-sm text-muted-foreground">
            24/7 reliable roadside assistance services, just a tap away.
          </p>
          <div className="flex space-x-4">
            {/* PLACEHOLDER: Add social media icons SVGs here */}
          </div>
        </div>
        
        <div>
          <h3 className="font-medium text-lg mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link href="/" className="text-sm text-muted-foreground hover:text-primary">Home</Link></li>
            <li><Link href="/about" className="text-sm text-muted-foreground hover:text-primary">About Us</Link></li>
            <li><Link href="/#services" className="text-sm text-muted-foreground hover:text-primary">Services</Link></li>
            <li><Link href="/contact" className="text-sm text-muted-foreground hover:text-primary">Contact</Link></li>
            <li><Link href="/faq" className="text-sm text-muted-foreground hover:text-primary">FAQ</Link></li>
          </ul>
        </div>
        
        <div>
          <h3 className="font-medium text-lg mb-4">For Providers</h3>
          <ul className="space-y-2">
            <li><Link href="/for-providers" className="text-sm text-muted-foreground hover:text-primary">Join Our Network</Link></li>
            <li><Link href="/for-providers#benefits" className="text-sm text-muted-foreground hover:text-primary">Provider Benefits</Link></li>
            <li><Link href="/for-providers#requirements" className="text-sm text-muted-foreground hover:text-primary">Requirements</Link></li>
            <li><Link href="https://play.google.com/store" className="text-sm text-muted-foreground hover:text-primary">Provider App</Link></li>
          </ul>
        </div>
        
        <div>
          <h3 className="font-medium text-lg mb-4">Legal</h3>
          <ul className="space-y-2">
            <li><Link href="/privacy-policy" className="text-sm text-muted-foreground hover:text-primary">Privacy Policy</Link></li>
            <li><Link href="/terms" className="text-sm text-muted-foreground hover:text-primary">Terms of Service</Link></li>
          </ul>
          <div className="mt-6">
            <h3 className="font-medium text-lg mb-2">Download Our App</h3>
            <div className="flex space-x-2">
              {/* PLACEHOLDER: Add app store badges SVGs here */}
            </div>
          </div>
        </div>
      </div>
      
      <div className="container mt-8 pt-8 border-t">
        <p className="text-sm text-center text-muted-foreground">
          © {new Date().getFullYear()} Depan.Go. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
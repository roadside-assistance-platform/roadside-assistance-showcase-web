import { cn } from "@/lib/utils";
import Link from "next/link"
import Image from "next/image";

const GooglePlayButton = ({ className }: { className?: string }) => {
  return ( 
    <Link href="https://play.google.com/store" target="_blank">
      <Image src="/Google_Play_Store_badge_EN.svg" alt="Google Play Store" width={100} height={50} className={cn(className, "h-auto")} />
    </Link>
    );
}

export default GooglePlayButton;
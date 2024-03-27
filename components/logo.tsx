import Link from "next/link";
import Image from "next/image";
import localFont from "next/font/local";

import { cn } from "@/lib/utils";
import { Boxes } from "lucide-react";

const headingFont = localFont({
  src: "../public/fonts/font.woff2",
});

export const Logo = () => {
  return (
    <Link href="/">
      <div className="hover:opacity-75 transition items-center gap-x-2 hidden md:flex">
        <p
          className={cn(
            "text-lg text-neutral-700 pb-1 flex flex-row ml-2",
            headingFont.className
          )}
        >
          Cert
          <Boxes />
          Chain
        </p>
      </div>
    </Link>
  );
};

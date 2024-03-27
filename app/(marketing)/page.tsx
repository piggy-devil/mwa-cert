import Link from "next/link";
import localFont from "next/font/local";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Medal } from "lucide-react";
import { Poppins } from "next/font/google";

const headingFont = localFont({
  src: "../../public/fonts/font.woff2",
});

const textFont = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const MarketingPage = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div
        className={cn(
          "flex items-center justify-center flex-col",
          headingFont.className
        )}
      >
        <div className="mb-4 flex items-center border shadow-sm p-4 bg-amber-100 text-amber-700 rounded-full uppercase">
          <Medal className="h-6 w-6 mr-2" />
          No 1 Certificate managment
        </div>
        <h1 className="text-3xl md:text-6xl text-center text-neutral-800 mb-6">
          Digital Certificate Platform
        </h1>
        <div className="text-3xl md:text-6xl bg-gradient-to-r from-blue-700 to-blue-400 text-white px-4 p-2 rounded-md pb-4 w-fit">
          Blockchain Technology
        </div>
      </div>
      <div
        className={cn(
          "text-sm md:text-xl text-neutral-400 mt-4 max-w-xs md:max-w-2xl text-center mx-auto",
          textFont.className
        )}
      >
        Create digital credentials in minutes with our easy-to-use certificate
        base on Blockchain Technology.
      </div>
      <Button className="mt-6" size={"lg"}>
        <Link href="/sign-up">Start for free</Link>
      </Button>
    </div>
  );
};

export default MarketingPage;

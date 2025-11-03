import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function NotFound({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "flex h-[calc(100svh-5.5rem)] flex-col items-center justify-center",
        className
      )}
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="h-25 w-full text-border" viewBox="2 3 9 4">
        <path d="M 6 4 L 6 3 L 5 3 L 5 4 Z L 6 6 L 5 6 L 5 7 L 5 6 L 4 6 L 3 6 L 3 5 L 2 5 L 2 6 L 3 6 L 3 7 L 4 7 L 5 7 L 5 5 L 5 4 Z L 10 3 L 11 3 L 11 4 L 11 5 L 11 6 L 10 6 L 10 7 L 9 7 L 8 7 L 8 6 L 8 5 L 7 5 L 7 6 L 9 6 L 10 6 L 10 4 L 10 4 L 10 4 L 10 3" fill="#000000" />
      </svg>

      <h1 className="mt-8 mb-6 font-mono text-8xl font-medium">404</h1>

      <Button variant="default" asChild>
        <Link href="/">
          Go to Home
          <ArrowRightIcon />
        </Link>
      </Button>
    </div>
  );
}

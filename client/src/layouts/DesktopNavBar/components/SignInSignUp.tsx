import { Button } from "@/components/ui/button";

import { cn } from "@/lib/utils";

export default function SignInSignUp() {
  const pathname = window.location.pathname;
  const isMainPage = pathname === "/";

  return (
    <div
      className={cn(
        "flex flex-row justify-center items-center p-2 rounded-full gap-1",
        isMainPage ? "bg-primary-foreground" : "bg-primary"
      )}
    >
      <Button
        type="button"
        size="sm"
        variant="ghost"
        className={cn(
          "hover:text-primary-foreground hover:bg-[#942a2a] rounded-full",
          isMainPage ? "text-primary" : "text-primary-foreground"
        )}
      >
        Sign In
      </Button>
      <Button
        type="button"
        size="sm"
        variant={isMainPage ? "default" : "outline"}
        className="rounded-full"
      >
        Sign Up
      </Button>
    </div>
  );
}

import { Button } from "@/components/ui/button";

export default function SignInSignUp() {
  const pathname = window.location.pathname;
  const isMainPage = pathname === "/";

  return (
    <div
      className={`flex flex-row justify-center items-center p-2 bg-primary${isMainPage ? "-foreground" : ""} rounded-full gap-1`}
    >
      <Button
        type="button"
        size="sm"
        variant="ghost"
        className={`text-primary${isMainPage ? "" : "-foreground"} hover:text-primary-foreground hover:bg-[#942a2a] rounded-full`}
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

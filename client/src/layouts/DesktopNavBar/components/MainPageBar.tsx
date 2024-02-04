import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export default function MainPageBar() {
  const pathname = window.location.pathname;
  const styles = { color: "hsl(var(--primary-foreground))" };

  return (
    <div className="absolute top-0 left-0 flex flex-row justify-end items-center space-x-7 bg-transparent container h-20">
      <nav className="flex flex-row items-center space-x-7">
        <ul className="flex flex-row space-x-7">
          <li>
            <a href="/" className={pathname === "/" ? "underline" : ""} style={styles}>
              Home
            </a>
          </li>
          <li>
            <a href="/lists/recipes" style={styles}>
              Recipes
            </a>
          </li>
          <li>
            <a href="/lists/ingredients" style={styles}>Ingredients</a>
          </li>
          <li>
            <a href="/about-us" style={styles}>About Us</a>
          </li>
        </ul>
        <Button type="button" variant="outline" className="hidden xl:inline-flex gap-x-2">
          <span>
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="-4 -4 40 40"
            >
              <polyline
                data-cap="butt"
                points="2 19 11 19 11 23 21 23 21 19 30 19"
                fill="none"
                stroke="hsl(var(--primary))"
                strokeMiterlimit="10"
                strokeWidth="2.4"
              ></polyline>
              <rect
                x="2"
                y="2"
                width="28"
                height="28"
                rx="3"
                fill="none"
                stroke="hsl(var(--primary))"
                strokeLinecap="square"
                strokeMiterlimit="10"
                strokeWidth="2.4"
              ></rect>
              <polyline
                data-color="color-2"
                points="11 11 14 14 21 7"
                fill="none"
                stroke="hsl(var(--primary))"
                strokeLinecap="square"
                strokeMiterlimit="10"
                strokeWidth="2.4"
              ></polyline>
            </svg>
          </span>
          Your recipes
        </Button>
      </nav>
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </div>
  );
}

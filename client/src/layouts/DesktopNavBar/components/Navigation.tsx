import { Button } from "@/components/ui/button";

export default function Navigation() {
  const pathname = window.location.pathname;
  const isLogged = false;

  return (
    <nav className="flex flex-row items-center space-x-7">
      <ul className="flex flex-row space-x-7">
        <li>
          <a href="/" className={pathname === "/" ? "underline" : ""}>
            Home
          </a>
        </li>
        <li>
          <a
            href="/lists/recipes"
            className={pathname === "/lists/recipes" ? "underline" : ""}
          >
            Recipes
          </a>
        </li>
        <li>
          <a
            href="/lists/ingredients"
            className={pathname === "/lists/ingredients" ? "underline" : ""}
          >
            Ingredients
          </a>
        </li>
        <li>
          <a
            href="/about-us"
            className={pathname === "/about-us" ? "underline" : ""}
          >
            About Us
          </a>
        </li>
      </ul>
      {isLogged ? (
        <Button type="button" className="hidden xl:inline-flex gap-x-2">
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
                stroke="hsl(var(--primary-foreground))"
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
                stroke="hsl(var(--primary-foreground))"
                strokeLinecap="square"
                strokeMiterlimit="10"
                strokeWidth="2.4"
              ></rect>
              <polyline
                data-color="color-2"
                points="11 11 14 14 21 7"
                fill="none"
                stroke="hsl(var(--primary-foreground))"
                strokeLinecap="square"
                strokeMiterlimit="10"
                strokeWidth="2.4"
              ></polyline>
            </svg>
          </span>
          Your recipes
        </Button>
      ) : (
        <></>
      )}
    </nav>
  );
}

export default function Navigation() {
  const pathname = window.location.pathname;
  const styles = { color: "hsl(var(--primary-foreground))" };

  return (
    <ul className="flex flex-row space-x-7">
      <li>
        <a
          href="/"
          className={pathname === "/" ? "underline" : ""}
          style={styles}
        >
          Home
        </a>
      </li>
      <li>
        <a href="/lists/recipes" style={styles}>
          Recipes
        </a>
      </li>
      <li>
        <a href="/lists/ingredients" style={styles}>
          Ingredients
        </a>
      </li>
      <li>
        <a href="/about-us" style={styles}>
          About Us
        </a>
      </li>
    </ul>
  );
}

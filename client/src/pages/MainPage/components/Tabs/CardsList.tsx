import RecipeCard from "@/layouts/RecipeCard";

export default function CardsList() {
  return (
    <div className="container">
      <ul className="grid min-[790px]:grid-cols-2 min-[1140px]:grid-cols-3 gap-14">
        <li>
          <RecipeCard />
        </li>
        <li>
          <RecipeCard />
        </li>
        <li>
          <RecipeCard />
        </li>
      </ul>
    </div>
  );
}

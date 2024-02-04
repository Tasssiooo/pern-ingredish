export default function Navigation() {
  return (
    <>
      <div className="flex flex-col justify-between">
        <ul className="space-y-2">
          <li>
            <h4>Learn More</h4>
          </li>
          <li>Our cooks</li>
          <li>See our features</li>
          <li>FAQ</li>
        </ul>
        <ul className="space-y-2">
          <li>
            <h4>Shop</h4>
          </li>
          <li>Gift subscription</li>
          <li>Send us feedback</li>
        </ul>
      </div>
      <ul className="space-y-2">
        <li>
          <h4>Recipes</h4>
        </li>
        <li>What to cook this week</li>
        <li>Pasta</li>
        <li>Dinner</li>
        <li>Healthy</li>
        <li>Vegetarian</li>
        <li>Vegan</li>
        <li>Christmas</li>
      </ul>
    </>
  );
}

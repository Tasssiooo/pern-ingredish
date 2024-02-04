import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import CardImage from "./components/CardImage";
import CardBadges from "./components/CardBadges";
import CardActions from "./components/CardActions";

export default function RecipeCard() {
  return (
    <Card className="w-[350px]">
      <CardImage />
      <CardHeader className="pb-2">
        <CardTitle className="truncate">Sesame Flank Steak Salad</CardTitle>
        <CardBadges />
        <CardDescription className="h-16 overflow-y-hidden">
          Sesame Flank Steak Salad is a main course that serves 4. One serving
          contains 331 calories, 29g of protein, and 19g of fat. For $9.58 per
          serving, this recipe covers 28% of your daily requirements of vitamins
          and minerals. This recipe from spoonacular user supersimplelowcarb
          requires juice of lime, lime zest, olive oil, and butter lettuce. It
          is perfect for valentin day. It is a good option if you're following a
          gluten free and dairy free diet. From preparation to the plate, this
          recipe takes around 30 minutes. Similar recipes include Rice Noodles
          with Sesame-Ginger Flank Steak, Rice Noodles with Sesame-Ginger Flank
          Steak, and Rice Noodles with Sesame-Ginger Flank Steak.
        </CardDescription>
      </CardHeader>
      <CardFooter className="justify-between">
        <CardActions />
      </CardFooter>
    </Card>
  );
}

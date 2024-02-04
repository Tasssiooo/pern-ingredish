import { Badge } from "@/components/ui/badge";

export default function CardBadges() {
  return (
    <ul className="flex flex-row space-x-2">
      <li>
        <Badge>Main dish</Badge>
      </li>
      <li>
        <Badge variant="outline">Gluten free</Badge>
      </li>
      <li>
        <Badge variant="outline">Healthy</Badge>
      </li>
    </ul>
  );
}

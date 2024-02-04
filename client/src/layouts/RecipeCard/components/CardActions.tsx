import { Button } from "@/components/ui/button";
import { DotsVerticalIcon, HeartIcon, Share1Icon } from "@radix-ui/react-icons";

import { Link } from "react-router-dom";

export default function CardActions() {
  return (
    <>
      <Link to={`recipe/:id`}>
        <Button>Let's cook</Button>
      </Link>
      <div role="group" className="flex flex-row">
        <Button type="button" variant="ghost" size="icon">
          <Share1Icon className="w-4 h-4" />
        </Button>
        <Button type="button" variant="ghost" size="icon">
          <HeartIcon className="w-4 h-4" />
        </Button>
        <Button type="button" variant="ghost" size="icon">
          <DotsVerticalIcon className="w-4 h-4" />
        </Button>
      </div>
    </>
  );
}

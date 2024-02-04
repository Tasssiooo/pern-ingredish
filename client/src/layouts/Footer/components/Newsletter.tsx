import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Newsletter() {
  return (
    <div className="flex flex-col space-y-2 w-full">
      <h3>Newsletter</h3>
      <p className="max-w-md">
        Welcome to our website, a wonderful place to try out new recipes and
        learn how to cook like a pro.
      </p>
      <div className="flex w-full max-w-md items-center space-x-2">
        <Input type="email" placeholder="johndoe@email.com" className="bg-white" />
        <Button type="submit">Subscribe</Button>
      </div>
    </div>
  );
}

import { Input } from "@/components/ui/input";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";

export default function SearchInput() {
  return (
    <div className="flex w-80 items-center">
      <MagnifyingGlassIcon
        width={20}
        height={20}
        aria-hidden
        className="relative left-7"
      />
      <Input
        type="search"
        name="q"
        aria-label="Search for recipes"
        className="bg-accent pl-9"
      />
    </div>
  );
}

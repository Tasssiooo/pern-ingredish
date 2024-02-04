import { Input } from "@/components/ui/input";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";

export default function SearchInput() {
  return (
    <div className="flex flex-row items-center space-x-1 min-w-80 w-1/3">
      <MagnifyingGlassIcon width={20} height={20} aria-hidden className="relative left-8" />
      <Input
        type="search"
        name="q"
        placeholder="Brazilian Cuscuz"
        className="bg-white pl-9"
        aria-label="Search for a dish"
      />
    </div>
  );
}

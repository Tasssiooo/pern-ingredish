import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

import Logomark from "./components/Logomark";
import Navigation from "./components/Navigation";
import SearchInput from "./components/SearchInput";
import MainPageBar from "./components/MainPageBar";

export default function DesktopNavBar() {
  const pathname = window.location.pathname;

  if (pathname === "/") {
    return <MainPageBar />;
  }
  return (
    <div className="hidden lg:flex flex-row justify-between items-center container h-20 border-b">
      <div className="flex flex-row space-x-2 items-center h-full">
        <Logomark />
        <SearchInput />
      </div>
      <div className="flex flex-row space-x-7 xl:space-x-4 items-center">
        <Navigation />
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
}

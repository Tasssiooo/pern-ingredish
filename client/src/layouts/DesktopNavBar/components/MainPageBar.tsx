import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

import NavDrawer from "./MainPageBar/NavDrawer";
import Navigation from "./MainPageBar/Navigation";
import YourRecipes from "./MainPageBar/YourRecipes";
import SignInSignUp from "./SignButtons";

export default function MainPageBar() {
  const isLogged = false;
  return (
    <div className="absolute top-0 left-0 flex flex-row justify-end items-center space-x-7 bg-transparent container h-20">
      <div className="hidden sm:flex flex-row space-x-7 xl:space-x-4 items-center">
        <nav className="hidden sm:flex flex-row items-center space-x-7">
          <Navigation />
          {isLogged ? <YourRecipes /> : <></>}
        </nav>
        {isLogged ? (
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        ) : (
          <SignInSignUp />
        )}
      </div>
      <NavDrawer />
    </div>
  );
}

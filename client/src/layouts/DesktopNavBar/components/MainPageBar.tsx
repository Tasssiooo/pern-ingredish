import { Avatar, AvatarFallback } from "@/components/ui/avatar";

import { UserData } from "@/types";

import NavDrawer from "@/layouts/MobileNavBar/components/NavDrawer";
import Navigation from "./MainPageBar/Navigation";
import YourRecipes from "./MainPageBar/YourRecipes";
import SignInSignUp from "./SignButtons";

export default function MainPageBar({ user } : { user: UserData | null }) {
  return (
    <div className="absolute top-0 left-0 flex flex-row justify-end items-center space-x-7 bg-transparent container h-20">
      <div className="hidden sm:flex flex-row space-x-7 xl:space-x-4 items-center">
        <nav className="hidden sm:flex flex-row items-center space-x-7">
          <Navigation />
          {user ? <YourRecipes /> : <></>}
        </nav>
        {user ? (
          <Avatar>
            <AvatarFallback>{user.result.username[0]}</AvatarFallback>
          </Avatar>
        ) : (
          <SignInSignUp />
        )}
      </div>
      <NavDrawer />
    </div>
  );
}

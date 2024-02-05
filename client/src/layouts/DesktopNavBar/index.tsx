import { Avatar, AvatarFallback } from "@/components/ui/avatar";

import CombinationMark from "./components/CombinationMark";
import Navigation from "./components/Navigation";
import SearchInput from "./components/SearchInput";
import MainPageBar from "./components/MainPageBar";
import SignButtons from "./components/SignButtons";

import { useState, useEffect } from "react";
import { useAppDispatch } from "@/redux/hooks";

import { logout } from "@/redux/reducers/authSlice";

import * as jose from "jose";
import { UserData } from "@/types";

export default function DesktopNavBar() {
  const [user, setUser] = useState<UserData | null>(
    JSON.parse(localStorage.getItem("profile")!)
  );
  const dispatch = useAppDispatch();
  const currentPathname = window.location.pathname;

  function handleLogout() {
    dispatch(logout());

    window.location.pathname = currentPathname;

    setUser(null);
  }

  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = jose.decodeJwt(token);

      if (decodedToken.exp) {
        if (decodedToken.exp * 1000 < new Date().getTime()) handleLogout();
      }
    }

    setUser(JSON.parse(localStorage.getItem("profile")!));
  }, [currentPathname]);

  if (currentPathname === "/") {
    return <MainPageBar user={user} />;
  }
  return (
    <div className="hidden lg:flex flex-row justify-between items-center container h-20 border-b">
      <div className="flex flex-row space-x-2 items-center h-full">
        <CombinationMark />
        <SearchInput />
      </div>
      <div className="flex flex-row space-x-7 xl:space-x-4 items-center">
        <Navigation user={user} />
        {user ? (
          <Avatar>
            <AvatarFallback>{user.result.username[0]}</AvatarFallback>
          </Avatar>
        ) : (
          <SignButtons />
        )}
      </div>
    </div>
  );
}

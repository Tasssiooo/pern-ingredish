import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerTrigger,
} from "@/components/ui/drawer";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";

import { Button } from "@/components/ui/button";

import { HamburgerMenuIcon } from "@radix-ui/react-icons";

import Navigation from "./Navigation";
import SignButtons from "@/layouts/DesktopNavBar/components/SignButtons";

import { useEffect, useState } from "react";
import { useAppDispatch } from "@/redux/hooks";

import { logout } from "@/redux/reducers/authSlice";

import * as jose from "jose";
import { UserData } from "@/types";

export default function NavDrawer() {
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

  return (
    <Drawer>
      <DrawerTrigger
        title="Open navigation drawer"
        className={currentPathname === "/" ? "sm:hidden" : ""}
      >
        <HamburgerMenuIcon
          color={
            currentPathname === "/"
              ? "hsl(var(--primary-foreground))"
              : "hsl(var(--foreground))"
          }
        />
      </DrawerTrigger>
      <DrawerContent>
        <div className="container max-w-sm mt-4">
          <div className="flex flex-row items-center space-x-2.5 py-4">
            {user ? (
              <>
                <Avatar>
                  <AvatarFallback>{user.result.username[0]}</AvatarFallback>
                </Avatar>
                <div className="flex flex-col -space-y-1 border-b py-1.5 w-full">
                  <h4>{user.result.username}</h4>
                  <span className="text-xs ml-0.5">Your profile</span>
                </div>
              </>
            ) : (
              <SignButtons />
            )}
          </div>
          <Navigation user={user} />
        </div>
        <DrawerFooter className="px-8">
          <DrawerClose>
            <Button variant="outline" className="w-full max-w-xs">
              Cancel
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

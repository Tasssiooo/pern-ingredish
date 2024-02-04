import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerTrigger,
} from "@/components/ui/drawer";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { Button } from "@/components/ui/button";

import { HamburgerMenuIcon } from "@radix-ui/react-icons";

import Navigation from "./Navigation";

export default function NavDrawer() {
  return (
    <Drawer>
      <DrawerTrigger title="Open navigation drawer">
        <HamburgerMenuIcon />
      </DrawerTrigger>
      <DrawerContent>
        <div className="container max-w-sm mt-4">
          <div className="flex flex-row items-center space-x-2.5 py-4">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="flex flex-col -space-y-1 border-b py-1.5 w-full">
              <h4>Tasssiooo</h4>
              <span className="text-xs ml-0.5">Your profile</span>
            </div>
          </div>
          <Navigation />
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

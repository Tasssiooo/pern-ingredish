import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

import type { ReactNode } from "react";

import SignUpForm from "./components/SignUpForm";
import FormArt from "./components/FormArt";

export default function SignUpModal({ children }: { children: ReactNode }) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="w-full sm:max-w-4xl p-0">
        <div className="grid grid-flow-col sm:grid-cols-[repeat(1,minmax(0,1fr))_25rem]">
          <SignUpForm />
          <FormArt />
        </div>
      </DialogContent>
    </Dialog>
  );
}

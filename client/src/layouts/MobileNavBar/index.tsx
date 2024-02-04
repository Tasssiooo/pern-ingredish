import Logotype from "./components/Logotype";
import NavDrawer from "./components/NavDrawer";

export default function MobileNavBar() {
  return (
    <div className="lg:hidden flex flex-row justify-between items-center container h-16 border-b">
      <Logotype />
      <NavDrawer />
    </div>
  );
}

import logomark from "@/assets/Image 4.png";

export default function Header() {
  return (
    <header className="text-primary-foreground text-center space-y-1.5">
      <div className="flex flex-row items-center space-x-2 min-w-max">
        <img
          src={logomark}
          width={42}
          height={42}
          alt="A red kitchen chef hat"
          className="object-contain select-none relative bottom-1.5"
        />
        <h1 className="font-epilogue">IngreDish</h1>
      </div>
      <p className="text-sm">Transform your kitchen experience!</p>
    </header>
  );
}

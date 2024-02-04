import logo from "@/assets/Image 4.png";

export default function IngreDishInfo() {
  const today = new Date().getFullYear();
  return (
    <ul className="flex flex-row flex-wrap items-end gap-x-4 text-sm">
      <li className="flex flex-row items-end space-x-2.5">
        <img src={logo} alt="IgreDish logotype" />
        <h3>IngreDish</h3>
      </li>
      <li>
        <p>&copy;{today} IngreDish Company</p>
      </li>
      <li>
        <p className="underline underline-offset-2">Terms of Service</p>
      </li>
      <li>
        <p className="underline underline-offset-2">Privacy Policy</p>
      </li>
    </ul>
  );
}

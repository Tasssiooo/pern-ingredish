import IngreDishInfo from "./components/IngreDishInfo";
import Navigation from "./components/Navigation";
import Newsletter from "./components/Newsletter";


export default function Footer() {
  return (
    <div className="flex flex-col items-center w-full pt-20 text-white">
      <footer className="grid sm:grid-cols-2 w-full max-w-[1440px] sm:space-x-5 p-7 min-h-[350px] h-max bg-[#212121] max-md:text-sm">
        <div className="flex flex-col justify-between w-full space-y-5">
          <Newsletter />
          <IngreDishInfo />
        </div>
        <div className="flex flex-row justify-between sm:justify-around space-x-2 w-full">
          <Navigation />
        </div>
      </footer>
    </div>
  )
}

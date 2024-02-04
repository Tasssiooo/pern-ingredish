import Header from "./MainBanner/Header";
import SearchInput from "./MainBanner/SearchInput";

export default function MainBanner() {
  return (
    <div className="w-full h-[536px] bg-[url(./assets/pexels-ella-olsson.jpg)] bg-no-repeat bg-cover">
      <section className="bg-[#7D0A0A] bg-opacity-85 w-full h-full flex flex-col space-y-7 justify-center items-center">
        <Header />
        <SearchInput />
      </section>
    </div>
  );
}

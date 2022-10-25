//Icons
import { BiSearchAlt } from "react-icons/bi";

function Header() {
  return (
    <header className="flex flex-col md:flex-row items-center justify-between gap-4">
      <h1 className=" text-2xl md:text-3xl font-bold">🌞 Good morning, <span className="text-primary-100">Facundo</span></h1>
      <form action="" className="w-full md:w-auto">
        <div className="relative">
          <BiSearchAlt className="absolute text-blue-900 top-1/2 -translate-y-1/2 left-2" />
          <input
            type="text"
            name="search"
            id=""
            placeholder="Search for projects"
            className="bg-gray-200 w-full md:w-auto py-2 pl-8 pr-4 outline-none rounded-xl border border-transparent focus:border-blue-700"
          />
        </div>
      </form>
    </header>
  );
}

export default Header;

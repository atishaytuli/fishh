import { LuFishSymbol } from "react-icons/lu";
import { HiMiniLanguage } from "react-icons/hi2";

function Navbar() {
  return (
    <>
      <nav className="w-full h-16 flex justify-between items-center px-4 sm:px-6 md:px-8 lg:px-10 py-2 mt-4 absolute top-0 left-0 z-3">
        <div className="nav-1 hidden lg:flex lg:items-center lg:gap-2">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
            <LuFishSymbol />
          </div>
          <h3 className="text-white text-lg">Fishing</h3>
        </div>
        <div className="nav-2 w-full lg:w-auto flex justify-center">
          <ul className="flex items-center gap-2 sm:gap-4 md:gap-8 bg-zinc-300/30 px-2 sm:px-6 md:px-10 py-2 rounded-xl mx-auto overflow-x-auto">
            <li className="text-white text-xs sm:text-sm md:text-md cursor-pointer hover:bg-blue-200/30 transition-all px-2 sm:px-3 py-1 rounded-lg whitespace-nowrap">Maps</li>
            <li className="text-white text-xs sm:text-sm md:text-md cursor-pointer hover:bg-blue-200/30 transition-all px-2 sm:px-3 py-1 rounded-lg whitespace-nowrap">Forecast</li>
            <li className="text-white text-xs sm:text-sm md:text-md cursor-pointer hover:bg-blue-200/30 transition-all px-2 sm:px-3 py-1 rounded-lg whitespace-nowrap">Shop</li>
            <li className="text-blue-500 text-xs sm:text-sm md:text-md cursor-pointer bg-zinc-100/30 transition-all px-2 sm:px-3 py-1 rounded-lg whitespace-nowrap">Sale</li>
          </ul>
        </div>
        <div className="nav-3 hidden lg:flex lg:items-center lg:gap-6">
          <h3 className="text-white text-md flex items-center gap-2 cursor-pointer">
            <HiMiniLanguage className="text-xl" /> English
          </h3>
          <button className="bg-white text-black px-6 py-2 rounded-lg text-sm font-medium hover:bg-blue-300 shadow-lg">
            Get Started
          </button>
        </div>
      </nav>
    </>
  )
}

export default Navbar
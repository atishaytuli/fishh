import Navbar from "./Navbar";
import { FaFish } from "react-icons/fa";

function Hero() {
  return (
    <>
    <div className="w-full min-h-screen bg-cover bg-center bg-no-repeat z-1 relative cursor-[url(/cursor.png),_auto]" style={{ backgroundImage: `url('04.jpg')` }}>
      <div className="absolute inset-0 bg-black/30"></div>
      <Navbar />
      <div className="main w-full h-[86vh] absolute bottom-0 left-0 z-2 flex flex-col lg:flex-row ">
        <div className="left w-full lg:w-1/2 h-full flex flex-col p-4 lg:p-6">
          <div className="left1 w-full h-auto lg:h-[60%]">
            <h2 className="text-white text-2xl sm:text-3xl lg:text-4xl font-medium uppercase w-full lg:w-[80%] mt-10 lg:mt-20">Discover the Perfect Time and Place for Your Next Fishing Adventure.</h2>
            <div className="buttons flex flex-col sm:flex-row items-center gap-4 mt-6 lg:mt-10">
              <button type="submit" className="flex justify-center gap-2 items-center w-full sm:w-auto shadow-xl text-base bg-gray-50 backdrop-blur-md isolation-auto border-gray-50 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-emerald-500 hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-3 py-1.5 overflow-hidden border-2 rounded-full group">
                Discover Now
                <span className="text-lg group-hover:rotate-90 ease-linear duration-300"><FaFish /></span>
              </button>
              <button className="w-full sm:w-auto bg-zinc-100/30 text-white border-[1px] border-white px-6 py-2 rounded-3xl text-sm font-medium hover:scale-95 transition-all duration-200 shadow-lg">Gallery</button>
            </div>
          </div>

          <div className="left2 w-full h-auto lg:h-[40%] mt-6 lg:mt-0 flex flex-col sm:flex-row gap-4">
            <div className="imgcont w-full sm:w-56 h-56 z-3 bg-zinc-100/30 rounded-2xl border-[1px] border-white">
              <video 
                src="./v2.mp4"
                className="w-full h-full object-cover rounded-2xl shadow-lg"
                autoPlay
                loop
                muted
              />
            </div>
            <div className="textcont w-full sm:w-44 h-56 z-3 bg-zinc-400/30 rounded-2xl border-[1px] border-white p-4 backdrop-blur-sm flex flex-col justify-between backdrop-blur-sm">
              <p className="text-white text-sm font-medium leading-relaxed">Learn about the best baits and lures for different fish species to maximize your catch on every fishing trip.</p>
              <button className="bg-white text-black px-4 py-2 rounded-lg text-sm font-medium hover:bg-zinc-200 hover:scale-95 transition-all duration-200 shadow-lg mt-auto flex items-center justify-center gap-2">
                View More 
              </button>
            </div>
          </div>
        </div>
        <div className="right w-full lg:w-auto px-4 lg:px-0 mt-6 lg:mt-0">
          <div className="card1 w-full sm:w-72 h-96 bg-zinc-100/20 rounded-2xl lg:absolute lg:right-12 lg:top-12 z-3 border-[1px] border-white p-2 backdrop-blur-sm mx-auto">
            <div className="imgcont w-full h-[60%] rounded-xl">
              <img src="./02.jpeg" alt="Fishing spot" className="w-full h-full object-cover rounded-xl shadow-lg" />
            </div>
            <div className="textcont p-3">
              <p className="text-white/90 text-sm leading-snug">Premium Fishing Spot - Experience world-class fishing at this pristine location with abundant marine life.</p>
              <div className="flex items-center justify-between mt-8">
                <button className="bg-white text-black px-4 py-1 rounded-lg text-sm font-medium hover:bg-zinc-200 shadow-lg">
                  Find Spot
                </button>
                <div className="text-white font-medium">
                  <p className="text-md underline">Read More</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Hero
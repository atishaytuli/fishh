import { LuFishSymbol } from "react-icons/lu";
const Maps = () => {
    return (
        <div className="w-full h-screen bg-[#F6F1EB] shadow-lg p-2">
            <div className="sticky w-full flex justify-between items-center z-20 py-4 px-4 top-10">
                <h3 className="text-sm bg-white rounded-2xl px-4 py-1 text-gray-700 flex items-center gap-3 shadow-sm hover:shadow-md transition-all duration-300">
                    <div className="w-8 h-8 bg-blue-400 text-white rounded-full flex items-center justify-center">
                        <LuFishSymbol size={20} />
                    </div>
                    <span className="font-medium tracking-wide">EXPLORE FISHING SPOTS</span>
                </h3>
                <button className="text-sm bg-white rounded-xl px-4 py-2 text-gray-700 font-medium transition-all duration-100 shadow-sm hover:rounded-full hover:bg-blue-400">
                    FIND NEW SPOT
                </button>
            </div>

            <div className="h-[85vh] w-[85vw] relative bg-gray-50 rounded-2xl border-[5px] border-white m-auto my-20">
                <div className="absolute inset-0 z-0">
                    <div className="w-full h-full rounded-2xl overflow-hidden">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d491201.0123456789!2d45.7010236!3d-15.7638108!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sus!4v1635786889174!5m2!1sen!2sus"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            className="w-full h-full"
                        />
                    </div>
                </div>


                <div className="absolute inset-0 z-10 p-2 flex flex-col justify-between">
                    <div></div>
                    <div className="bg-white/90 rounded-2xl p-4 border-2 border-black w-[35%] h-fit">
                        <div className="flex flex-wrap gap-3">
                            <button className="px-4 py-2 rounded-xl text-xs font-medium bg-white text-black hover:bg-green-300">
                                ALASKA KENAI RIVER
                            </button>
                            <button className="px-4 py-2 rounded-xl text-xs font-medium bg-white text-black hover:bg-green-300">
                                FLORIDA KEYS
                            </button>
                            <button className="px-4 py-2 rounded-xl text-xs font-medium bg-white text-black hover:bg-green-300">
                                GREAT BARRIER REEF
                            </button>
                            <button className="px-4 py-2 rounded-xl text-xs font-medium bg-white text-black hover:bg-green-300">
                                OUTER BANKS NC
                            </button>
                            <button className="px-4 py-2 rounded-xl text-xs font-medium bg-white text-black hover:bg-green-300">
                                MALDIVES
                            </button>
                            <button className="px-4 py-2 rounded-xl text-xs font-medium bg-white text-black hover:bg-green-300">
                                COSTA RICA ....
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Maps;
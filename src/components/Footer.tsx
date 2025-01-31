import { FaFish } from "react-icons/fa";

function Footer() {
    return (
        <div className="relative w-full h-screen overflow-hidden bg-white">
            <div className="h-[200vh]  bg-center bg-cover bg-[url(/foot.jpg)] ">
                <div className="flex gap-56 items-center relative z-10 container mx-auto px-6 py-24">
                    <h2 className="text-[6rem] font-light tracking-wide text-white uppercase leading-[9rem]">
                        Let's Go Out For<br /> <span className="text-[12rem]">Fishing.</span>

                    </h2>
                    <button type="submit" className="flex justify-center gap-2 items-center w-full sm:w-auto shadow-xl text-base bg-gray-50 backdrop-blur-md isolation-auto border-gray-50 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-blue-400 hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-3 py-1.5 overflow-hidden border-2 rounded-full group">
                        Let's Go
                        <span className="text-lg group-hover:rotate-[-45deg] ease-linear duration-300"><FaFish /></span>
                    </button>
                </div>


                <footer className="bg-[#F6F1EB] rounded-t-[2rem] -mt-8 relative z-20 px-6 py-12 w-[97.5%] mx-auto">
                    <div className="container mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                            <div>
                                <img src="/cursor.png" alt="Fishing Logo" className="h-20" />
                                <p className="text-sm text-gray-600 mb-4">
                                    Fishiing ©2025
                                </p>
                            </div>

                            <div>
                                <h3 className="relative text-lg text-black font-medium mb-4 before:content-[''] before:w-[0.14em] before:h-6 before:absolute before:top-0 before:left-0 before:bg-red-500 before:rounded-[2px] pl-4">
                                    Fishing Resources
                                </h3>
                                <ul className="space-y-2">
                                    <li className="text-sm text-gray-600 hover:text-gray-900 cursor-pointer">Best Fishing Spots</li>
                                    <li className="text-sm text-gray-600 hover:text-gray-900 cursor-pointer">Fishing Tips & Tricks</li>
                                    <li className="text-sm text-gray-600 hover:text-gray-900 cursor-pointer">Seasonal Fishing Guide</li>
                                    <li className="text-sm text-gray-600 hover:text-gray-900 cursor-pointer">Catch & Release Techniques</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="relative text-lg text-black font-medium mb-4 before:content-[''] before:w-[0.14em] before:h-6 before:absolute before:top-0 before:left-0 before:bg-green-400 before:rounded-[2px] pl-4">
                                    Shop
                                </h3>
                                <ul className="space-y-2">
                                    <li className="text-sm text-gray-600 hover:text-gray-900 cursor-pointer">Fishing Rods</li>
                                    <li className="text-sm text-gray-600 hover:text-gray-900 cursor-pointer">Baits & Lures</li>
                                    <li className="text-sm text-gray-600 hover:text-gray-900 cursor-pointer">Fishing Gear</li>
                                    <li className="text-sm text-gray-600 hover:text-gray-900 cursor-pointer">Boating Accessories</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="relative text-lg text-black font-medium mb-4 before:content-[''] before:w-[0.14em] before:h-6 before:absolute before:top-0 before:left-0 before:bg-blue-500 before:rounded-[2px] pl-4">
                                    Contact Us
                                </h3>
                                <ul className="space-y-2">
                                    <li className="text-sm text-gray-600">+1 (800) 123-4567</li>
                                    <li className="text-sm text-gray-600">support@fishmaster.com</li>
                                    <li className="text-sm text-gray-600">www.fishmaster.com</li>
                                </ul>
                            </div>
                        </div>

                        <div className="mt-12 pt-8 border-t border-gray-200 flex justify-between items-center">
                            <p className="text-sm text-gray-500">
                                Trusted by millions of anglers worldwide.
                            </p>
                            <p className="text-sm text-gray-500">
                                Powered by Designing Solutions
                            </p>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
}

export default Footer;

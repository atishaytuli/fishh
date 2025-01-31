import { FaArrowRightLong } from "react-icons/fa6";
function Second() {
    return (
        <div className="relative h-screen w-full mt-10">
            <div
                className="c-bg-line absolute w-full z-1 place-items-center pointer-events-none overflow-hidden top-10"
                aria-hidden="true">
                <svg
                    width="120%"
                    height="100%"
                    viewBox="0 0 2430 1000"
                    preserveAspectRatio="none"
                    stroke="#4d89b3"
                    strokeWidth="90"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M3 38.6792C457 38.6792 628.5 -15.321 961.23 427.934C1409.74 1025.44 1953 727.179 2393.24 358.341" />
                </svg>
            </div>

            <div className="flex h-screen w-full gap-[2%]">
                <div className="left w-[58%] h-screen relative ml-[2vw] ">
                    <div className="flex flex-col justify-between z-2 container bg-[#F6F1EB] w-full h-64 rounded-2xl absolute bottom-0 mb-[3vh] p-5">
                        <div className="top flex justify-between uppercase text-sm text-zinc-500/50">
                            <p>Discuss with experienced fishermen</p>
                            <p>1/3</p>
                        </div>
                        <div className="line w-full h-[0.4px] bg-slate-600"></div>
                        <h1 className="text-7xl uppercase">Fishing forum</h1>
                        <button className="flex justify-center items-center gap-4 bg-emerald-500 px-4 py-2 w-fit rounded-xl hover:rounded-full ">Learn More <span className="bg-white rounded-full p-1"><FaArrowRightLong /></span></button>
                    </div>
                </div>
                <div className="right w-[40%] h-[95vh] mt-[2vh] mr-[2vw]">
                    <img className="h-full w-full object-cover rounded-2xl border-[4px] border-[#F6F1EB]" src="/f1.jpg" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Second
import { FaArrowRightLong } from "react-icons/fa6";
function Second() {
    return (
        <div className="relative h-screen w-full mt-10">

            <div className="flex h-screen w-full gap-[2%]">

                <div className="right w-[40%] h-[95vh] mt-[2vh] ml-[2vw]">
                    <img className="h-full w-full object-cover rounded-2xl border-[4px] border-[#F6F1EB]" src="/f2.jpg" alt="" />
                </div>
                <div className="left w-[58%] h-screen relative mr-[2vw] ">
                    <div className="flex flex-col justify-between z-2 container bg-[#F6F1EB] w-full h-64 rounded-2xl absolute bottom-0 mb-[3vh] p-5">
                        <div className="top flex justify-between uppercase text-sm text-zinc-500/50">
                            <p>fishing gallery full of high quality pictures and videos</p>
                            <p>2/3</p>
                        </div>
                        <div className="line w-full h-[0.4px] bg-slate-600"></div>
                        <h1 className="text-7xl uppercase">Photos & blogs</h1>
                        <button className="flex justify-center items-center gap-4 bg-emerald-500 px-4 py-2 w-fit rounded-xl hover:rounded-full ">VIEW NOW <span className="bg-white rounded-full p-1"><FaArrowRightLong /></span></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Second
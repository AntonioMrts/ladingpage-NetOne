import Image from "next/image"

export default function Inicio() {
    return (
        <div className="flex justify-between items-center px-28 py-20 bg-white">
            <div className="flex flex-col max-w-[500px]">
                <h1 className="text-[50px] font-medium text-[#0B132A] mb-5 leading-[70px]">
                    Want anything to be easy with Net<span className="font-bold">ONE</span>.
                </h1>
                <p className="text-[#4F5665] text-base mb-7 w-[400px]">
                    Provide a network for all your needs with ease and fun using NetONE discover interesting features from us.
                </p>
                <button className="bg-[#3878FF] cursor-pointer hover:bg-[#3840ff] transition text-white py-3 px-12 rounded-2xl font-bold w-fit">
                    Get Started
                </button>
            </div>

            <div className="ml-10">
                <Image
                    src="/freepik23.png"
                    width={612}
                    height={382}
                    alt=""
                />
            </div>
        </div>
    )
}
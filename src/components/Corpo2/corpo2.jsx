import Image from "next/image"

export default function Corpo2() {
    return (
        <div className="flex justify-evenly items-center w-full max-w-7xl bg-[#fff] mx-auto rounded-2xl p-10 shadow-lg">
           <div className="flex items-center space-x-5">
            <Image
            src="/user.png"
            width={53}
            height={53}
            alt=""
            />
            <div>
                <p className="w-13 text-2xl font-bold text-[#0b132a]">90+</p>
                <p className="text-1xl text-[#4f5665]">Users</p>
            </div>
           </div>

           <div className="h-20 bg-[#eeeff2] w-px"></div>

           <div className="flex items-center space-x-5">
            <Image
            src="/location.png"
            width={55}
            height={55}
            alt=""
            />
            <div>
                <p className="w-13 text-2xl font-bold text-[#0b132a]">30+</p>
                <p className="text-1xl text-[#4f5665]">Locations</p>
            </div>
           </div>

           <div className="h-20 bg-[#eeeff2] w-px"></div>

           <div className="flex items-center space-x-5">
            <Image
            src="/Server.png"
            width={55}
            height={55}
            alt=""
            />
            <div>
                <p className="w-13 text-2xl font-bold text-[#0b132a]">50+</p>
                <p className="text-1xl text-[#4f5665]">Servers</p>
            </div>
           </div>
        </div>
    )
}
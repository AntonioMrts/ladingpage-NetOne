
import Image from "next/image"

export default function NavBar() {
    return (
        <div className="flex flex-row items-center justify-between w-full p-10">
            <div className="w-50 cursor-pointer">
                <Image
                    src="/group.png"
                    width={121}
                    height={35}
                    alt="Logo"
                />
            </div>

            <ul className="flex cursor-pointer flex-row w-96 justify-between text-[#4f5665] font-medium">
                <li>About</li>
                <li>Features</li>
                <li>Pricing</li>
                <li>Testimonials</li>
                <li>Help</li>
            </ul>

            <div className="flex items-center w-50 justify-between">
                <button className="text-[#0b132a] cursor-pointer font-bold flex items-center justify-center">
                    Sign in
                </button>
                <button className="border cursor-pointer border-[#3878ff] px-9 py-2 rounded-full text-[#3878ff] flex items-center justify-center hover:bg-[#3878ff] hover:text-[#ffff] transition">
                    Sign up
                </button>
            </div>
        </div>
    );
}

import Image from "next/image"

export default function Corpo3() {
    return (
        <div className="flex justify-between items-center my-10 px-28 py-10 bg-[#fff] ml-39">
            {/* Imagem à esquerda */}
            <div className="ml-16">
                <Image
                    src="/image.png"
                    width={438}
                    height={393}
                    alt="Illustration"
                />
            </div>

            {/* Conteúdo à direita */}
            <div className="max-w-125">
                <h2 className="text-[40px] font-bold text-[#0B132A] mb-5">
                    We Provide Many Features You Can Use
                </h2>
                <p className="text-[#4F5665] text-base mb-7 max-w-[400px]">
                    You can explore the features that we provide with fun and have their own functions each feature.
                </p>
                <ul className="space-y-4">
                    <li className="flex items-center">
                        <span className="text-[#3878FF] text-xl mr-3"><Image
                        src="/checked.png"
                        width={24}
                        height={24}
                        alt=""
                        /></span>
                        <span className="text-[#4F5665]">Powerfull online protection.</span>
                    </li>
                    <li className="flex items-center">
                        <span className="text-[#3878FF] text-xl mr-3">
                            <Image
                            src="/checked.png"
                            width={24}
                            height={24}
                            alt=""
                            />
                        </span>
                        <span className="text-[#4F5665]">Internet without borders.</span>
                    </li>
                    <li className="flex items-center">
                        <span className="text-[#3878FF] text-xl mr-3">
                        <Image
                            src="/checked.png"
                            width={24}
                            height={24}
                            alt=""
                            />
                        </span>
                        <span className="text-[#4F5665]">Supercharged NetONE.</span>
                    </li>
                    <li className="flex items-center">
                        <span className="text-[#3878FF] text-xl mr-3">
                        <Image
                            src="/checked.png"
                            width={24}
                            height={24}
                            alt=""
                            />
                        </span>
                        <span className="text-[#4F5665]">No specific time limits.</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}
"use client";

import Image from "next/image"
import React, { useState, useEffect } from 'react';

export default function Corpo4() {
    return (
        <div className="px-28 p-20 text-center">
            <div className="mb-10">
            <h2 className="font-medium text-[#0B132A] text-[32px]">
                Choose Your Plan
            </h2> 
            <p className="leading-8 text-[16px] w-[555px] mx-auto text-[#4F5665]">
                Let's choose the package that is best for you and explore it happily and cheerfully.
                </p>
            </div>

            <div className="flex justify-evenly">
            
            {/* ========== Carrossel */}

            <div className="border-2 border-[#DDDDDD] rounded-2xl w-[330px] h-[760px] my-20">
                <div className="flex justify-center py-10 ml-10">
                    <Image
                    src="/freeplan.png"
                    width={142}
                    height={198}
                    alt=""
                    />
                </div>

                <div className="mb-10">
                    <p className="text-[18px] text-[#0b132a] ">Free Plan</p>
                </div>

                <div>
                    <ul className="flex flex-col mx-auto imtes-center w-[191px]">
                        <li className="flex items-center">
                            <span className="text-[#3878FF] text-xl mr-5 mb-4">
                                <Image
                                src="/checked2.png"
                                width={24}
                                height={24}
                                alt=""
                                />
                            </span>
                            <span className="text-[14px] mb-4 text-[#4F5665]">Unlimited Bandwitch</span>
                        </li>
                        <li className="flex items-center">
                            <span className="text-[#3878FF] text-xl mr-5 mb-4">
                                <Image
                                src="/checked2.png"
                                width={24}
                                height={24}
                                alt=""
                                />
                            </span>
                            <span className="text-[14px] mb-4 text-[#4F5665]">Encrypted Connection</span>
                        </li>
                        <li className="flex items-center">
                            <span className="text-[#3878FF] text-xl mr-5 mb-4">
                            <Image
                                src="/checked2.png"
                                width={24}
                                height={24}
                                alt=""
                                />
                            </span>
                            <span className="text-[14px] mb-4 text-[#4F5665]">No Traffic Logs</span>
                        </li>
                        <li className="flex items-center">
                            <span className="text-[#3878FF] text-xl mr-5 mb-4">
                            <Image
                                src="/checked2.png"
                                width={24}
                                height={24}
                                alt=""
                                />
                            </span>
                            <span className="text-[14px] mb-4 text-[#4F5665]">Works on All Devices</span>
                        </li>
                    </ul>

                    <p className="text-[#0B132A] text-[25px] font-bold text-2xl mt-28 py-3">Free</p>
                    <button className="w-[177px] h-[45px] border-2 bg-[#fff] text-[#3878ff] py-2 px-6 rounded-full font-bold hover:bg-[#3878ff] hover:text-[#fff] cursor-pointer">
                        Select
                    </button>
                </div>

            </div>
            <div className="border-2 border-[#DDDDDD] rounded-2xl w-[330px] h-[760px] my-20">
                <div className="flex justify-center py-10 ml-10">
                    <Image
                    src="/freeplan.png"
                    width={142}
                    height={198}
                    alt=""
                    />
                </div>

                <div className="mb-10">
                    <p className="text-[18px] text-[#0b132a]">Standart Plan</p>
                </div>

                <div>
                    <ul className="flex flex-col mx-auto imtes-center w-[191px]">
                        <li className="flex items-center">
                            <span className="text-[#3878FF] text-xl mr-5 mb-4">
                                <Image
                                src="/checked2.png"
                                width={24}
                                height={24}
                                alt=""
                                />
                            </span>
                            <span className="text-[14px] mb-4 text-[#4F5665]">Unlimited Bandwitch</span>
                        </li>
                        <li className="flex items-center">
                            <span className="text-[#3878FF] text-xl mr-5 mb-4">
                                <Image
                                src="/checked2.png"
                                width={24}
                                height={24}
                                alt=""
                                />
                            </span>
                            <span className="text-[14px] mb-4 text-[#4F5665]">Encrypted Connection</span>
                        </li>
                        <li className="flex items-center">
                            <span className="text-[#3878FF] text-xl mr-5 mb-4">
                            <Image
                                src="/checked2.png"
                                width={24}
                                height={24}
                                alt=""
                                />
                            </span>
                            <span className="text-[14px] mb-4 text-[#4F5665]">Yes Traffic Logs</span>
                        </li>
                        <li className="flex items-center">
                            <span className="text-[#3878FF] text-xl mr-5 mb-4">
                            <Image
                                src="/checked2.png"
                                width={24}
                                height={24}
                                alt=""
                                />
                            </span>
                            <span className="text-[14px] mb-4 text-[#4F5665]">Works on All Devices</span>
                        </li>
                        <li className="flex items-center">
                            <span className="text-[#3878FF] text-xl mr-5 mb-4">
                            <Image
                                src="/checked2.png"
                                width={24}
                                height={24}
                                alt=""
                                />
                            </span>
                            <span className="text-[14px] mb-4 text-[#4F5665]">Connect Anyware</span>
                        </li>
                    </ul>

                    <p className="text-[#0B132A] text-[25px] font-bold text-2xl mt-20 mb-4">₹250 / <span className="text-[#4f5665]">mo</span></p>
                    <button className="w-[177px] h-[45px] border-2 bg-[#fff] text-[#3878ff] py-2 px-6 rounded-full font-bold hover:bg-[#3878ff] hover:text-[#fff] transition cursor-pointer">
                        Select
                    </button>
                </div>
            </div>
            
            <div className="border-2 border-[#DDDDDD] rounded-2xl w-[330px] h-[760px] my-20 ">
                <div className="flex justify-center py-10 ml-10">
                    <Image
                    src="/freeplan.png"
                    width={142}
                    height={198}
                    alt=""
                    />
                </div>

                <div className="mb-10">
                    <p className="text-[18px] text-[#0b132a]">Pro Plan</p>
                </div>

                <div>
                    <ul className="flex flex-col mx-auto imtes-center w-[191px]">
                        <li className="flex items-center">
                            <span className="text-[#3878FF] text-xl mr-5 mb-4">
                                <Image
                                src="/checked2.png"
                                width={24}
                                height={24}
                                alt=""
                                />
                            </span>
                            <span className="text-[14px] mb-4 text-[#4F5665]">Unlimited Bandwitch</span>
                        </li>
                        <li className="flex items-center">
                            <span className="text-[#3878FF] text-xl mr-5 mb-4">
                                <Image
                                src="/checked2.png"
                                width={24}
                                height={24}
                                alt=""
                                />
                            </span>
                            <span className="text-[14px] mb-4 text-[#4F5665]">Encrypted Connection</span>
                        </li>
                        <li className="flex items-center">
                            <span className="text-[#3878FF] text-xl mr-5 mb-4">
                            <Image
                                src="/checked2.png"
                                width={24}
                                height={24}
                                alt=""
                                />
                            </span>
                            <span className="text-[14px] mb-4 text-[#4F5665]">No Traffic Logs</span>
                        </li>
                        <li className="flex items-center">
                            <span className="text-[#3878FF] text-xl mr-5 mb-4">
                            <Image
                                src="/checked2.png"
                                width={24}
                                height={24}
                                alt=""
                                />
                            </span>
                            <span className="text-[14px] mb-4 text-[#4F5665]">Works on All Devices</span>
                        </li>
                        <li className="flex items-center">
                            <span className="text-[#3878FF] text-xl mr-5 mb-4">
                            <Image
                                src="/checked2.png"
                                width={24}
                                height={24}
                                alt=""
                                />
                            </span>
                            <span className="text-[14px] mb-4 text-[#4F5665]">Connect Anyware</span>
                        </li>
                        <li className="flex items-center">
                            <span className="text-[#3878FF] text-xl mr-5 mb-4">
                            <Image
                                src="/checked2.png"
                                width={24}
                                height={24}
                                alt=""
                                />
                            </span>
                            <span className="text-[14px] mb-4 text-[#4F5665]">Get New Features</span>
                        </li>
                    </ul>

                    <p className="text-[#0B132A] text-[25px] font-bold text-2xl mt-8 py-3">₹999 / <span className="text-[#4f5665]">mo</span></p>
                    <button className="w-[177px] h-[45px] border-2 bg-[#fff] text-[#3878ff] py-2 px-6 rounded-full font-bold hover:bg-[#3878ff] hover:text-[#fff] cursor-pointer">
                        Select
                    </button>
                </div>
            </div>
            </div>

            {/* Carrosel */}

        </div>
    )
}
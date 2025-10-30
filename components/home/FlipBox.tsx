"use client";

import Image from "next/image";
import React from "react";

interface CardData {
    id: number;
    title: string;
    time: string;
    desc: string;
    bgColor: string;
    Icon: string;
}

interface FlipBoxProps {
    data: CardData;
}

const FlipBox: React.FC<FlipBoxProps> = ({ data }) => {
    return (
        <div className="group relative w-full h-60 [perspective:1000px]">
            <div className="relative h-full w-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(-180deg)]">
                {/* Front Side */}
                <div className={`absolute inset-0 flex flex-col items-center justify-center rounded-xl text-white text-center text-lg font-semibold shadow-xl [backface-visibility:hidden] ${data.bgColor}`} >
                    <Image
                        src={data.Icon}
                        alt={data.title}
                        width={140}
                        height={144}
                        className=""
                    />
                </div>

                {/* Back Side */}
                <div className={`${data.bgColor} absolute inset-0 flex flex-col items-center justify-center rounded-xl bg-gray-900 [transform:rotateY(180deg)] [backface-visibility:hidden]`}>
                    <h3 className="md:text-2xl text-xl font-bold text-white">{data.title}</h3>
                    <p className="md:text-2xl text-xl font-bold text-white">{data.time}</p>
                    <p className="md:text-2xl text-xl font-bold text-white">{data.desc}</p>
                </div>
            </div>
        </div>
    );
};

export default FlipBox;

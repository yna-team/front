"use client";

import { Icon } from "@iconify/react";
import Image from "next/image";

const ITEMS = [
    {
        src: "/images/1.png",
        alt: "",
        name: "함께 먹는 소고기",
        category: "식당",
    },
    {
        src: "/images/2.png",
        alt: "",
        name: "고려 자유 부여",
        category: "농산물",
    },
    {
        src: "/images/3.png",
        alt: "",
        name: "우리 동네 시장",
        category: "재래시장",
    },
    {
        src: "/images/4.png",
        alt: "",
        name: "봄꽃 화원",
        category: "꽃집",
    },
    {
        src: "/images/5.png",
        alt: "",
        name: "동네 이발소",
        category: "이발",
    },
];

export const MainSection07 = () => {
    return (
        <div className="mt-[1px] pt-[1rem] pb-[1.25rem] px-[1rem] bg-[#fff]">
            <div className="flex items-center justify-between mb-[.75rem]">
                <div>
                    <h2 className="text-[17px] font-[800] text-[#111] break-all tracking-[-.02em]">
                        우리 동네 사장님을
                    </h2>
                    <h2 className="text-[17px] font-[800] text-[#111] break-all tracking-[-.02em]">
                        소개합니다
                    </h2>
                </div>
                <button className="text-[12px] text-[#999] flex items-center gap-[1px] font-[500]">
                    더보기<p className="text-[13px]">{">"}</p>
                </button>
            </div>
            <div className="gap-[1rem] flex overflow-x-auto scrollbar-hide">
                {ITEMS.map((item, i) => (
                    <div
                        key={i}
                        className="flex-shrink-0 flex flex-col items-center gap-[6px] cursor-pointer"
                    >
                        <div className="w-[60px] bg-[0000000a] rounded-[16px] p-[3px] shadow-[0_2px_12px_rgba(0,0,0,0.07)]">
                            <div className="bg-[#fff] rounded-[13px] overflow-hidden shadow-[inset_0_1px_0_rgba(255,255,255,0.9)]">
                                <div className="w-[60px] h-[60px] overflow-hidden rounded-[14px] flex items-center justify-center">
                                    <Image
                                        src={item.src}
                                        alt={item.alt}
                                        width={60}
                                        height={60}
                                        className="w-full h-full object-cover object-center-center"
                                    />
                                </div>
                            </div>
                        </div>
                        <span className="text-[11px] text-[#444] font-[500] text-center max-w-[64px] leading-[1.3]">
                            <span className="block truncate">{item.name}</span>
                            <span className="block truncate text-[#999] text-[10px]">
                                {item.category}
                            </span>
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};

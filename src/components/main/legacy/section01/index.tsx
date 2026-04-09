"use client";

import { LiveBadge } from "@/components/ui/LiveBadge";
import Image from "next/image";

const ITEMS = [
    { src: "/images/1.png", alt: "" },
    { src: "/images/2.png", alt: "" },
    { src: "/images/3.png", alt: "" },
    { src: "/images/4.png", alt: "" },
    { src: "/images/5.png", alt: "" },
    { src: "/images/6.png", alt: "" },
];

export const MainSection01 = () => {
    return (
        <div className="bg-[#fff] mt-[.5rem] px-[1rem] pb-[1.25rem] pt-[1rem]">
            <div className="flex items-center justify-between mb-[.75rem]">
                <div className="flex items-center gap-[.5rem]">
                    <LiveBadge />
                    <h2 className="text-[17px] font-[800] text-[#111] break-all tracking-[-.02em]">
                        지금 라이브
                    </h2>
                </div>
                <button className="text-[12px] text-[#999] flex items-center gap-[1px] font-[500]">
                    전체보기<p className="text-[13px]">{">"}</p>
                </button>
            </div>
            <div className="gap-[.625rem] flex overflow-x-auto scrollbar-hide">
                {ITEMS.map((item, i) => (
                    <div
                        key={i}
                        className="cursor-pointer flex-shrink-0 w-[130px] transition-all duration-200 cubic-bezier(.16, 1, .3, 1)"
                    >
                        <div className="aspect-3/4 shadow-[0_4px_16px_rgba(0,0,0,0.18)] rounded-[.75rem] overflow-hidden relative">
                            <Image
                                src={item.src}
                                alt={item.alt}
                                width={400}
                                height={400}
                                className="absolute inset-0 w-full h-full object-cover object-center-center"
                            />
                            <div className="absolute top-[8px] left-[8px]">
                                <LiveBadge />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

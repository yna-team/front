"use client";

import { LiveBadge } from "@/components/ui/LiveBadge";
import Image from "next/image";

const ITEMS = [
    { src: "/images/1.png", alt: "", des: "이달의 라이브 인기", price: 1800 },
    { src: "/images/2.png", alt: "", des: "인기 상품", price: 2500 },
    { src: "/images/3.png", alt: "", des: "신상품", price: 3000 },
    { src: "/images/4.png", alt: "", des: "할인 상품", price: 1500 },
    { src: "/images/5.png", alt: "", des: "추천 상품", price: 2000 },
    { src: "/images/6.png", alt: "", des: "인기 라이브", price: 1200 },
];

export const MainSection02 = () => {
    return (
        <div className="bg-[#fff] mt-[1px] px-[1rem] pb-[1.25rem] pt-[1rem]">
            <div className="flex items-center justify-between mb-[.75rem]">
                <div className="flex items-center gap-[.5rem]">
                    <LiveBadge />
                    <h2 className="text-[17px] font-[800] text-[#111] break-all tracking-[-.02em]">
                        지금 뜨는 쇼핑
                    </h2>
                </div>
                <button className="text-[12px] text-[#999] flex items-center gap-[1px] font-[500]">
                    전체보기<p className="text-[13px]">{">"}</p>
                </button>
            </div>
            <div className="gap-[.75rem] flex overflow-x-auto scrollbar-hide">
                {ITEMS.map((item, i) => (
                    <div
                        key={i}
                        className="cursor-pointer flex-shrink-0 w-[140px] transition-all duration-200 cubic-bezier(.16, 1, .3, 1)"
                    >
                        <div className="mb-[.5rem] bg-[#0000000a] rounded-[16px] p-[3px] shadow-[0_2px_12px_rgba(0,0,0,0.07)]">
                            <div className="bg-[#fff] rounded-[13px] overflow-hidden shadow-[inset_0_1px_0_rgba(255,255,255,0.9)]">
                                <div className="aspect-[1] overflow-hidden relative flex items-center justify-center">
                                    <Image
                                        src={item.src}
                                        alt={item.alt}
                                        width={200}
                                        height={200}
                                        className="absolute inset-0 w-full h-full object-cover object-center-top"
                                    />
                                    <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.45)_0%,transparent_50%)]"></div>
                                    <div className="absolute top-[8px] left-[8px]">
                                        <LiveBadge />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p className="text-[12px] text-[#555] mb-[2px] break-keep">{item.des}</p>
                        <p className="text-[14px] font-[800] text-[#111] tracking-[-.02em]">
                            {item.price.toLocaleString()}원
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

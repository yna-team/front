"use client";

import { StarRating } from "@/components/ui/StarRating";
import { Icon } from "@iconify/react";
import Image from "next/image";

const ITEMS = [
    {
        src: "/images/1.png",
        alt: "",
        name: "아라미 배품",
        price: 2500,
        rating: 5,
    },
    {
        src: "/images/2.png",
        alt: "",
        name: "아라미 배품",
        price: 6700,
        rating: 1,
    },
    {
        src: "/images/3.png",
        alt: "",
        name: "아라미 배품",
        price: 2500,
        rating: 3,
    },
    {
        src: "/images/4.png",
        alt: "",
        name: "아라미 배품",
        price: 3500,
        rating: 4,
    },
];

export const MainSection08 = () => {
    return (
        <div className="mt-[1px] pt-[1rem] pb-[1.25rem] px-[1rem] bg-[#fff]">
            <div className="flex items-center justify-between mb-[.75rem]">
                <h2 className="text-[17px] font-[800] text-[#111] break-all tracking-[-.02em]">
                    함께 브랜드관
                </h2>
                <button className="text-[12px] text-[#999] flex items-center gap-[1px] font-[500]">
                    전체보기<p className="text-[13px]">{">"}</p>
                </button>
            </div>
            <div className="gap-[0.75rem] flex overflow-x-auto scrollbar-hide">
                {ITEMS.map((item, i) => (
                    <div
                        key={i}
                        className="flex-shrink-0 w-[96px] cursor-pointer transition-all duuration-[150ms] cubic-bezier(0.4,0,0.2,1)"
                    >
                        <div className="mb-[0.5rem] rounded-[16px]">
                            <div className="mb-[0.5rem] rounded-[16px] p-[3px] shadow-[0_2px_12px_rgba(0,0,0,0.07)]">
                                <div className="bg-[#fff] rounded-[13px] overflow-hidden shadow-[inset_0_1px_0_rgba(255,255,255,0.9)]">
                                    <div className="w-[96px] h-[96px] overflow-hidden rounded-[16px] flex items-center justify-center">
                                        <Image
                                            src={item.src}
                                            alt={item.alt}
                                            width={96}
                                            height={96}
                                            className="w-full h-full object-cover object-center-center"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p className="text-[12px] text-[#333] font-[600] text-center break-all mb-[2px]">
                            {item.name}
                        </p>
                        <div className="text-center mb-[2px] text-[10px] text-[#f5a623] leading-[1] flex justify-center">
                            <StarRating rating={item.rating} />
                        </div>
                        <p className="text-[13px] font-[800] text-[#111] text-center tracking-[-.0.02em]">
                            {item.price.toLocaleString()} 원
                        </p>
                    </div>
                ))}
            </div>
            <div className="grid grid-cols-[1fr_1fr] gap-[8px] mt-[12px]">
                <button className="border-[1.5px] border-[#e8e8e8] text-[#555] font-[600] rounded-[10px] pt-[9px] pb-[9px] w-full text-center text-[12px] transition-all duration-200">
                    장바구니 담기
                </button>
                <button className="border-[1.5px] border-[#e8e8e8] text-[#555] font-[600] rounded-[10px] pt-[9px] pb-[9px] w-full text-center text-[12px] transition-all duration-200">
                    장바구니 담기
                </button>
            </div>
        </div>
    );
};

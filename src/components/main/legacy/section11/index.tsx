"use client";

import { StarRating } from "@/components/ui/StarRating";
import { Icon } from "@iconify/react";
import Image from "next/image";

const ITEMS = [
    {
        src: "/images/1.png",
        alt: "",
        event_category: "SPRING EVENT",
        name: "봄 맞이 이벤트",
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
];

export const MainSection11 = () => {
    return (
        <div className="mt-[1px] pt-[1rem] pb-[1.25rem] px-[1rem] bg-[#fff]">
            <div className="flex items-center justify-between mb-[.75rem]">
                <h2 className="text-[17px] font-[800] text-[#111] break-all tracking-[-.02em]">
                    이벤트 & 기획전
                </h2>
                <button className="text-[12px] text-[#999] flex items-center gap-[1px] font-[500]">
                    전체보기
                    <Icon icon="solar:alt-arrow-right-linear" className="text-[13px]" />
                </button>
            </div>

            <div className="gap-[0.75rem] flex overflow-x-auto scrollbar-hide"></div>
        </div>
    );
};

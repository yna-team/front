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

export const MainSection09 = () => {
    return (
        <div className="mt-[1px] pt-[1rem] pb-[1.25rem] px-[1rem] bg-[#fff]">
            <div className="flex items-center justify-between mb-[.375rem]">
                <div>
                    <div className="flex items-center gap-[5px] mb-[4px]">
                        <Icon icon="solar:star-bold" className="text-[#f5a623] text-[16px]" />
                        <h2 className="text-[17px] font-[800] text-[#111] break-all tracking-[-.02em]">
                            실제 후기가 풍성한 상품
                        </h2>
                    </div>
                    <p className="text-[12px] text-[#aaa] break-all">
                        실제 구매자만 작성 가능한 진짜 후기
                    </p>
                </div>
            </div>

            <div className="flex items-center gap-[10px] py-[10px] px-[12px] bg-[#f9f9f9] rounded-[12px] my-[12px] cursor-pointer border-[1.5px] border-dashed border-[#e0e0e0]">
                <Icon
                    icon="solar:camera-add-linear"
                    className="text-[20px] text-[#bbb] flex-shrink-0"
                />
                <span className="text-[13px] text-[#aaa]">내 후기를 등록하고 포인트 받기</span>
                <Icon
                    icon="solar:alt-arrow-right-linear"
                    className="text-[13px] text-[#ccc] ml-[auto]"
                />
            </div>

            <div className="gap-[0.75rem] flex overflow-x-auto scrollbar-hide">
                {ITEMS.map((item, i) => (
                    <div key={i} className="flex-shrink-0 w-[120px] cursor-pointer">
                        <div className="mb-[0.5rem] bg-[rgba(0,0,0,0.04)]">
                            <div className="bg-[#fff] rounded-[13px] overflow-hidden shadow-[inset_0_1px_0_rgba(255,255,255,0.9)]">
                                <div className="w-[120px] h-[120px] overflow-hidden rounded-[14px] flex items-center justify-center">
                                    <Image
                                        src={item.src}
                                        alt={item.alt}
                                        width={120}
                                        height={120}
                                        className="w-full h-full object-cover object-center-center"
                                    />
                                </div>
                            </div>
                        </div>
                        <p className="text-[12px] text-[#333] font-[600] break-all mb-[2px]">
                            {item.name}
                        </p>
                        <div className="text-[11px] mb-[2px] h-[11px] items-center flex">
                            <StarRating rating={item.rating} />
                        </div>
                        <p className="text-[13px] font-[800] text-[#111] tracking-[-0.02em]">
                            {item.price.toLocaleString()}원
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

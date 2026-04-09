"use client";

import { StarRating } from "@/components/ui/StarRating";
import { Icon } from "@iconify/react";
import Image from "next/image";

// 좋아요(=장바구니?)는 백엔드에서 유저가 좋아요를 등록한 상품과 '함께 인기 상품'에서의 상품 uuid가 같으면 true로 둠
const ITEMS = [
    {
        src: "/images/1.png",
        alt: "",
        name: "전통 된장국 밀키트 - 충청도 할머니 레시피",
        price: 7500,
        rating: 5,
        reviewAll: 247,
        cart: false,
    },
    {
        src: "/images/2.png",
        alt: "",
        name: "제주 돌담 나물 - 봄 한정 직송",
        price: 7500,
        rating: 4,
        reviewAll: 135,
        cart: true,
    },
    {
        src: "/images/3.png",
        alt: "",
        name: "보성 녹차 한과",
        price: 2500,
        rating: 3.5,
        reviewAll: 89,
        cart: false,
    },
];

export const MainSection04 = () => {
    return (
        <div className="bg-[#fff] mt-[1px] px-[1rem] pb-[1.25rem] pt-[1rem]">
            <div className="flex items-center justify-between mb-[.75rem]">
                <div className="flex items-center gap-[.5rem]">
                    <h2 className="text-[17px] font-[800] text-[#111] break-all tracking-[-.02em]">
                        함께 인기 상품
                    </h2>
                </div>
                <button className="text-[12px] text-[#999] flex items-center gap-[1px] font-[500]">
                    전체보기<p className="text-[13px]">{">"}</p>
                </button>
            </div>
            <div className="flex flex-col gap-[0]">
                {ITEMS.map((item, i) => (
                    <div key={i} className="flex items-center gap-[12px] p-[10px] cursor-pointer">
                        <span className="bg-[#F5A623] text-[#fff] w-[22px] h-[22px] rounded-full text-[11px] font-[800] flex items-center justify-center flex-shrink-0">
                            1
                        </span>
                        <div className="w-[60px] flex-shrink-0 bg-[#0000000a] rounded-[16px] p-[3px] shadow-[0_2px_12px_rgba(0,0,0,0.07)]">
                            <div className="bg-[#fff] rounded-[13px] overflow-hidden shadow-[inset_0_1px_0_rgba(255,255,255,0.9)]">
                                <div className="w-[60px] h-[60px] overflow-hidden relative flex items-center justify-center">
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
                        <div className="flex-1 min-w-[0]">
                            <p className="text-[13px] font-[600] text-[#1A1A1A] leading-[1.4] break-all mb-[3px]">
                                {item.name}
                            </p>
                            <div className="flex items-center gap-[4px] mb-[3px] text-[#f5a623] text-[11px] leading-[1]">
                                <StarRating rating={item.rating} />
                                <span className="text-[#999] text-[10px]">({item.reviewAll})</span>
                            </div>
                            <p className="text-[14px] font-[800] text-[#111] tracking-[-0.02em]">
                                {item.price.toLocaleString()}원
                            </p>
                        </div>
                        <div className="flex-shrink-0 p-[4px]">
                            {item.cart ? (
                                <Icon
                                    icon="solar:heart-bold"
                                    className="text-[20px] text-[#e8352a]"
                                />
                            ) : (
                                <Icon
                                    icon="solar:heart-linear"
                                    className="text-[20px] text-[#ccc]"
                                />
                            )}
                        </div>
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

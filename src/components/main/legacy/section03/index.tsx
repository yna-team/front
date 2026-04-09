"use client";

import Image from "next/image";

const ITEMS = [
    { src: "/images/1.png", alt: "", price: 3600, salePer: 47 },
    { src: "/images/2.png", alt: "", price: 1200, salePer: 60 },
    { src: "/images/3.png", alt: "", price: 5800, salePer: 15 },
];

export const MainSection03 = () => {
    return (
        <div className="bg-[#fff] mt-[1px] px-[1rem] pb-[1.25rem] pt-[1rem]">
            <div className="flex items-center justify-between mb-[.75rem]">
                <div className="flex items-center gap-[.5rem]">
                    <div className="gap-[.625rem] items-center flex-wrap flex">
                        <h2 className="text-[17px] font-[800] text-[#111] break-all tracking-[-.02em]">
                            오늘만 이 가격
                        </h2>
                        <div className="flex items-center gap-[4px]">
                            <span className="bg-[#111] text-[#fff] rounded-[7px] px-[5px] py-[9px] text-[19px] font-[800] tabular-nums min-w-[38px] text-center tracking-[-.02em] leading-[1]">
                                03
                            </span>
                            <span className="text-[16px] font-[800] text-[#333] leading-[1]">
                                :
                            </span>
                            <span className="bg-[#111] text-[#fff] rounded-[7px] px-[5px] py-[9px] text-[19px] font-[800] tabular-nums min-w-[38px] text-center tracking-[-.02em] leading-[1]">
                                03
                            </span>
                            <span className="text-[16px] font-[800] text-[#333] leading-[1]">
                                :
                            </span>
                            <span className="bg-[#111] text-[#fff] rounded-[7px] px-[5px] py-[9px] text-[19px] font-[800] tabular-nums min-w-[38px] text-center tracking-[-.02em] leading-[1]">
                                03
                            </span>
                        </div>
                    </div>
                </div>
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
                                    <div className="absolute top-[8px] left-[8px] bg-[#E8352A] text-[#fff] text-[9px] font-[800] py-[2px] px-[7px] rounded-[3px]">
                                        오늘만
                                    </div>
                                    <div className="absolute top-[8px] right-[8px] bg-[#111] text-[#fff] text-[9px] font-[800] py-[2px] px-[7px] rounded-[3px]">
                                        -{item.salePer}%
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p className="text-[12px] text-[#999] mb-[1px] line-through">
                            {item.price.toLocaleString()}원
                        </p>
                        <p className="text-[15px] font-[900] text-[#E8352A] tracking-[-.03em] mb-[8px]">
                            {(
                                Math.floor((item.price * (100 - item.salePer) * 0.01) / 10) * 10
                            ).toLocaleString()}
                            원
                        </p>
                        <button className="pt-[9px] pb-[9px] text-[12px] bg-[#E8352A] text-[#fff] font-[700] rounded-[10px] w-full align-center shadow-[0_2px_10px_rgba(232,53,42,0.25)]">
                            바로 구매
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

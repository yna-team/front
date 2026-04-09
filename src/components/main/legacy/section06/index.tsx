"use client";

import { Icon } from "@iconify/react";
import Image from "next/image";

const ITEMS = [
    {
        src: "/images/1.png",
        alt: "",
        name: "함께 걷는 등산 모임",
        category: "운동 · 등산",
        maxParticipants: 13,
    },
    {
        src: "/images/2.png",
        alt: "",
        name: "책읽는 동네 사람들",
        category: "독서 · 인문",
        maxParticipants: 8,
    },
    {
        src: "/images/3.png",
        alt: "",
        name: "함께 요리해요",
        category: "요리 · 레시피",
        maxParticipants: 21,
    },
];

export const MainSection06 = () => {
    return (
        <div className="mt-[1px] pt-[1rem] pb-[1.25rem] px-[1rem] bg-[#fff]">
            <div className="flex items-center justify-between mb-[.75rem]">
                <div className="flex items-center gap-[.5rem]">
                    <h2 className="text-[17px] font-[800] text-[#111] break-all tracking-[-.02em]">
                        함께 하는 소모임
                    </h2>
                </div>
                <button className="text-[12px] text-[#999] flex items-center gap-[1px] font-[500]">
                    더보기<p className="text-[13px]">{">"}</p>
                </button>
            </div>
            <div className="gap-[10px] flex flex-col">
                {ITEMS.map((item, i) => (
                    <div
                        key={item.src}
                        className="flex items-center gap-[12px] p-[12px] bg-[#f9f9f9] rounded-[14px] cursor-pointer transition-all duration-[0.2s]"
                    >
                        <div className="w-[48px] flex-shrink-0 bg-[0000000a] rounded-[16px] p-[3px] shadow-[0_2px_12px_rgba(0,0,0,0.07)]">
                            <div className="bg-[#fff] rounded-[13px] overflow-hidden shadow-[inst_0_1px_0_rgba(255,255,255,0,9)]">
                                <div className="w-[48px] h-[48px] overflow-hidden rounded-[12px] flex items-center justify-center">
                                    <Image
                                        src={item.src}
                                        alt={item.alt}
                                        width={48}
                                        height={48}
                                        className="w-full h-full object-cover object-center-center"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="flex-1 min-w-[0px]">
                            <p className="text-[14px] font-[700] text-[#111] mb-[2px] break-all">
                                {item.name}
                            </p>
                            <p className="text-[11px] text-[#999] mb-[4px]">{item.category}</p>
                            <div className="flex items-center gap-[6px]">
                                <div className="flex items-center gap-[3px]">
                                    <Icon
                                        icon="solar:users-group-rounded-linear"
                                        className="text-[#bbb] text-[12px]"
                                    />
                                    <span className="text-[11px] text-[#999]">
                                        {item.maxParticipants}명
                                    </span>
                                </div>
                                <span className="text-[#ddd] text-[10px]"> · </span>
                                <span className="text-[11px] text-[#bbb]">오늘 활동</span>
                            </div>
                        </div>
                        <button className="flex-shrink-0 bg-[#e8352a] text-[#fff] text-[12px] font-[700] py-[7px] px-[14px] rounded-[10px] border-none cursor-pointer shadow-[0_2px_8px_rgba(232,53,42,0.25)]">
                            참여하기
                        </button>
                    </div>
                ))}
            </div>

            <button className="mt-[12px] border-[1.5px] border-[#e8e8e8] text-[#555] font-[600] rounded-[10px] py-[9px] w-full align-center text-[12px] transition-all duration-[0.2s]">
                더보기
            </button>
        </div>
    );
};

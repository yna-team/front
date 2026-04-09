"use client";

import Image from "next/image";

const ITEMS = [
    {
        src: "/images/1.png",
        alt: "",
        name: "전통 된장국 밀키트 - 충청도 할머니 레시피",
        price: 3600,
        salePer: 15,
    },
    {
        src: "/images/2.png",
        alt: "",
        name: "제주 돌담 나물 - 봄 한정 직송",
        price: 5200,
        salePer: 42,
    },
];

export const MainSection05 = () => {
    return (
        <div className="bg-[#fff] mt-[1px] px-[1rem] pb-[1.25rem] pt-[1rem]">
            <div className="flex items-center justify-between mb-[.75rem]">
                <div>
                    <div className="inline-flex items-center gap-[6px] mb-[4px]">
                        <span className="bg-[#fff2f1] border-[1px] border-[#ffd5d2] text-[#e8352a] text-[10px] font-[700] py-[2px] px-[8px] rounded-[20px] tracking-[0.04em]">
                            5060 맞춤
                        </span>
                    </div>
                    <h2 className="text-[17px] font-[800] text-[#111] break-all tracking-[-.02em]">
                        함께 인기 상품
                    </h2>
                </div>
                <button className="text-[12px] text-[#999] flex items-center gap-[1px] font-[500]">
                    전체보기<p className="text-[13px]">{">"}</p>
                </button>
            </div>
            <div className="grid grid-cols-[1fr_1fr] gap-[12px]">
                {ITEMS.map((item) => (
                    <div
                        key={item.alt}
                        className="transition-[transform] duration-[250ms] [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] cursor-pointer"
                    >
                        <div className="mb-[0.625rem] bg-[#0000000a] rounded-[16px] p-[3px] shadow-[0_2px_12px_rgba(0,0,0,0.07)]">
                            <div className="bg-[#fff] rounded-[13px] overflow-hidden shadow-[inset_0_1px_0_rgba(255,255,255,0.9)]">
                                <div className="aspect-[1] overflow-hidden relative flex items-center justify-center">
                                    <Image
                                        src={item.src}
                                        alt={item.alt}
                                        width={200}
                                        height={200}
                                        className="w-full h-full object-cover object-center-center"
                                    />
                                    <div className="absolute bottom-[0px] left-[0px] right-[0px] p-[8px] bg-[linear-gradient(transparent,rgba(0,0,0,0.45))]">
                                        <p className="text-[#fff] text-[10px] font-[700] break-keep">
                                            {item.name}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p className="text-[11px] text-[#aaa] line-through mb-[1px]">
                            {item.price.toLocaleString()}원
                        </p>
                        <p className="text-[15px] font-[900] text-[#111] leading-[-0.03em] mb-[8px]">
                            {(
                                Math.floor((item.price * (100 - item.salePer) * 0.01) / 10) * 10
                            ).toLocaleString()}
                            원
                        </p>
                        <button className="py-[9px] text-[12px] bg-[#e8352a] text-[#fff] font-[700] rounded-[10px] w-full align-center transition-all duration-[250ms] [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] shadow-[0_2px_10px_rgba(232,53,42,0.25)]">
                            구매하기
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

"use client";

import { useMainCategory } from "../legacy/category/hook";

const CATEGORIES = [
    { label: "전체" },
    { label: "건강·운동" },
    { label: "여행" },
    { label: "요리" },
    { label: "독서" },
    { label: "문화·예술" },
    { label: "반려동물" },
    { label: "사진" },
];

export const MainCategory = () => {
    const { selected, setSelected } = useMainCategory();

    return (
        <div className="px-4 pt-4">
            <div className="flex gap-1 overflow-x-auto whitespace-nowrap [-ms-overflow-style:none] [scrollbar-width:none] [&amp;::-webkit-scrollbar]:hidden">
                {CATEGORIES.map(({ label }) => (
                    <div
                        key={label}
                        onClick={() => setSelected(label)}
                        // hover:opacity-80
                        className="shrink-0 flex flex-col items-center gap-[8px] cursor-pointer pr-[10px] pl-[10px] transition-opacity duration-[180m]"
                    >
                        <button
                            className="h-9 flex-none rounded-full text-[14px] min-h-0 min-w-0 bg-[#F0F0F0] px-[14px]"
                            style={{
                                fontWeight: selected === label ? "700" : "500",
                                backgroundColor: selected === label ? "#E83462" : "#F5F5F5",
                                color: selected === label ? "#FFFFFF" : "#4D4D4D",
                            }}
                        >
                            {label}
                        </button>
                    </div>
                ))}
                {/* <button className="h-9 flex-none rounded-full px-4 text-[14px] min-h-0 min-w-0 bg-[#F0F0F0] font-bold text-[#191919]">
                    전체
                </button>
                <button className="h-9 flex-none rounded-full px-4 text-[14px] min-h-0 min-w-0 font-medium text-[#8C8C8C]">
                    건강·운동
                </button>
                <button className="h-9 flex-none rounded-full px-4 text-[14px] min-h-0 min-w-0 font-medium text-[#8C8C8C]">
                    여행
                </button>
                <button className="h-9 flex-none rounded-full px-4 text-[14px] min-h-0 min-w-0 font-medium text-[#8C8C8C]">
                    요리
                </button>
                <button className="h-9 flex-none rounded-full px-4 text-[14px] min-h-0 min-w-0 font-medium text-[#8C8C8C]">
                    독서
                </button>
                <button className="h-9 flex-none rounded-full px-4 text-[14px] min-h-0 min-w-0 font-medium text-[#8C8C8C]">
                    문화·예술
                </button>
                <button className="h-9 flex-none rounded-full px-4 text-[14px] min-h-0 min-w-0 font-medium text-[#8C8C8C]">
                    반려동물
                </button>
                <button className="h-9 flex-none rounded-full px-4 text-[14px] min-h-0 min-w-0 font-medium text-[#8C8C8C]">
                    사진
                </button> */}
            </div>
        </div>
    );
};

// ("use client");

// "use client";

// import { useState } from "react";
// const CATEGORIES = [
//     { label: "전체" },
//     { label: "건강·운동" },
//     { label: "여행" },
//     { label: "요리" },
//     { label: "독서" },
//     { label: "문화·예술" },
//     { label: "반려동물" },
//     { label: "사진" },
// ];

// export const MainCategory = () => {
//     const [selected, setSelected] = useState("전체");

//     return (
//         <div className="flex overflow-x-auto scrollbar-hide p-3 border-b border-b-[#ebebeb]">
//             {CATEGORIES.map(({ label }, i) => (
//                 <div
//                     key={label}
//                     onClick={() => setSelected(label)}
//                     // hover:opacity-80
//                     className="shrink-0 flex flex-col items-center gap-[6px] cursor-pointer pr-[10px] pl-[10px] transition-opacity duration-[180m]"
//                 >
//                     <button
//                         className="text-[10px] whitespace-nowrap font-bold"
//                         style={{
//                             color: selected === label ? "#E42A57" : "#4a4a4a",
//                             fontWeight: selected === label ? "700" : "500",
//                         }}
//                     >
//                         {label}
//                     </button>
//                 </div>
//             ))}
//         </div>
//     );
// };

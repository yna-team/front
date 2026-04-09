"use client";

import { useState } from "react";
const CATEGORIES = [
    { label: "전체", text: "ALL" },
    { label: "동네가게", text: "🏪" },
    { label: "동네모임", text: "🤝" },
    { label: "함께티비", text: "📺" },
    { label: "함께샵", text: "🛍️" },
    { label: "미용 뷰티", text: "💄" },
    { label: "운동 웰니스", text: "🏋️" },
    { label: "여행 레저", text: "✈️" },
    { label: "취미 문화", text: "🎨" },
    { label: "컨설팅 비즈니스", text: "💼" },
];

export const MainCategory = () => {
    const [selected, setSelected] = useState("전체");

    return (
        <div className="flex overflow-x-auto scrollbar-hide p-3 border-b border-b-[#ebebeb]">
            {CATEGORIES.map(({ label, text }, i) => (
                <div
                    key={label}
                    onClick={() => setSelected(label)}
                    // hover:opacity-80
                    className="shrink-0 flex flex-col items-center gap-[6px] cursor-pointer pr-[10px] pl-[10px] transition-opacity duration-[180m]"
                >
                    <div
                        // hover:opacity-80
                        className={`w-[52px] h-[52px] text-[#4a4a4a] rounded-full bg-[#f4f4f4] flex items-center justify-center border-2 font-[800] transition-opacity duration-[180m] ${i === 0 ? "text-[14px]" : "text-[22px]"}`}
                        style={{
                            borderColor: selected === label ? "#E42A57" : "transparent",
                            backgroundColor: selected === label ? "#fff0f3" : undefined,
                        }}
                    >
                        {text}
                    </div>
                    <div
                        className="text-[10px] whitespace-nowrap font-bold"
                        style={{
                            color: selected === label ? "#E42A57" : "#4a4a4a",
                            fontWeight: selected === label ? "700" : "500",
                        }}
                    >
                        {label}
                    </div>
                </div>
            ))}
        </div>
    );
};

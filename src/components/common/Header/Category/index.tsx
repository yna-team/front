"use client";

import { useState } from "react";

const CATEGORIES = ["전체", "라이브", "건강식품", "패션뷰티", "소모임", "클래스", "생활건강"];

export const Category = () => {
    const [selected, setSelected] = useState("전체");

    return (
        <div className="flex overflow-x-auto scrollbar-hide gap-[0.25rem] pl-[.75rem] pr-[.75rem] pd-[.75rem] pt-[2px] pb-3.5 bg-white">
            {CATEGORIES.map((category) => (
                <button
                    key={category}
                    onClick={() => setSelected(category)}
                    className="whitespace-nowrap py-[7px] px-[15px] text-[13px] rounded-[20px] cursor-pointer transition-all duration-200 cubic-bezier(.16, 1, .3, 1)"
                    style={{
                        fontWeight: selected === category ? 700 : 500,
                        color: selected === category ? "white" : "#666",
                        backgroundColor: selected === category ? "black" : "transparent",
                        boxShadow: selected === category ? "0 2px 8px rgba(0, 0, 0, 0.18)" : "none",
                    }}
                >
                    {category}
                </button>
            ))}
        </div>
    );
};

"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ITEMS = [
    { src: "/images/1.png", alt: "" },
    { src: "/images/2.png", alt: "" },
    { src: "/images/3.png", alt: "" },
    { src: "/images/4.png", alt: "" },
    { src: "/images/5.png", alt: "" },
    { src: "/images/6.png", alt: "" },
];

const ITEMS_PER_PAGE = 1;
const AUTO_INTERVAL_MS = 5000;

export const MainCarousel = () => {
    const totalPages = Math.ceil(ITEMS.length / ITEMS_PER_PAGE);
    const [current, setCurrent] = useState(0);

    const next = useCallback(() => {
        setCurrent((prev) => (prev + 1) % totalPages);
    }, [totalPages]);

    const prev = () => {
        setCurrent((prev) => (prev - 1 + totalPages) % totalPages);
    };

    useEffect(() => {
        const timer = setInterval(next, AUTO_INTERVAL_MS);
        return () => clearInterval(timer);
    }, [next]);

    const pages = Array.from({ length: totalPages }, (_, i) => {
        const sliced = ITEMS.slice(i * ITEMS_PER_PAGE, i * ITEMS_PER_PAGE + ITEMS_PER_PAGE);
        return [...sliced, ...Array(ITEMS_PER_PAGE - sliced.length).fill(null)];
    });

    return (
        <div className="relative w-full bg-(--b-c-f4f4f2)">
            <div className="overflow-hidden">
                <div
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${current * 100}%)` }}
                >
                    {pages.map((pageItems, pageIdx) => (
                        <div key={pageIdx} className="min-w-full relative">
                            {pageItems.map((item, i) => (
                                <div key={i} className="overflow-hidden relative h-[280px]">
                                    {item ? (
                                        <Image
                                            src={item.src}
                                            alt={item.alt}
                                            width={400}
                                            height={400}
                                            className="w-full h-full object-cover block object-center-center"
                                        />
                                    ) : (
                                        <div className="w-full h-[280px]" />
                                    )}
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
            <div className="absolute bottom-2 right-2 flex items-center gap-2 bg-white text-black px-2 py-1 rounded-full">
                <button
                    onClick={prev}
                    className="p-1 rounded-full hover:bg-gray-100 transition cursor-pointer"
                >
                    <ChevronLeft className="w-4 h-4" />
                </button>
                <span className="text-xs font-bold">
                    {current + 1} / {totalPages}
                </span>
                <button
                    onClick={next}
                    className="p-1 rounded-full hover:bg-gray-100 transition cursor-pointer"
                >
                    <ChevronRight className="w-4 h-4" />
                </button>
            </div>
        </div>
    );
};

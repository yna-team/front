"use client";

import Image from "next/image";
import { Icon } from "@iconify/react";
import { LiveBadge } from "@/components/ui/LiveBadge";

const CATEGORIES = [
    "건강·운동",
    "여행",
    "요리",
    "독서",
    "문화·예술",
    "반려동물",
    "사진",
];

const MEETINGS = [
    { name: "달리기 클럽 망원 14기", location: "마포구", members: 12, date: "이번 토요일", src: "/images/1.png" },
    { name: "달리기 클럽 망원 14기", location: "마포구", members: 12, date: "이번 토요일", src: "/images/2.png" },
    { name: "달리기 클럽 망원 14기", location: "마포구", members: 12, date: "이번 토요일", src: "/images/3.png" },
];

const VIDEOS = [
    { title: "망원시장 골목 맛집 탐방", duration: "3:24", views: "1.2만", src: "/images/1.png" },
    { title: "망원시장 골목 맛집 탐방", duration: "3:24", views: "1.2만", src: "/images/2.png" },
    { title: "망원시장 골목 맛집 탐방", duration: "3:24", views: "1.2만", src: "/images/3.png" },
];

export const SampleSection = () => {
    return (
        <div className="bg-[#f5f5f5] min-h-screen pb-[70px]">

            {/* 헤더 */}
            <div className="bg-[#fff] px-[16px] pt-[16px] pb-[12px]">
                <div className="flex items-center justify-between">
                    <div>
                        <p className="text-[12px] text-[#999]">마포구 망원동</p>
                        <h1 className="text-[20px] font-[800] text-[#111] tracking-[-.02em]">함께</h1>
                    </div>
                    <div className="flex items-center gap-[12px]">
                        <button className="relative">
                            <Icon icon="solar:bell-linear" className="text-[24px] text-[#333]" />
                            <span className="absolute top-0 right-0 w-[5px] h-[5px] rounded-full bg-[#E42A57]" />
                        </button>
                        <button>
                            <Icon icon="solar:user-circle-linear" className="text-[24px] text-[#333]" />
                        </button>
                    </div>
                </div>

                {/* 검색 */}
                <div className="mt-[12px] flex items-center gap-[8px] bg-[#f5f5f5] rounded-[12px] px-[12px] py-[10px]">
                    <Icon icon="solar:magnifer-linear" className="text-[18px] text-[#999]" />
                    <span className="text-[13px] text-[#bbb]">우리동네 매장, 모임을 검색해보세요</span>
                </div>
            </div>

            {/* 할일 알림 */}
            <div className="mx-[16px] mt-[12px] bg-[#fff7f8] border-[1px] border-[#ffe0e3] rounded-[12px] px-[14px] py-[10px] flex items-center justify-between">
                <div>
                    <p className="text-[12px] font-[700] text-[#E42A57]">오늘 할 일이 있어요</p>
                    <p className="text-[11px] text-[#999] mt-[2px]">체크인 1곳 · 콘텐츠 업로드 대기 2건</p>
                </div>
                <Icon icon="solar:arrow-right-linear" className="text-[18px] text-[#E42A57]" />
            </div>

            {/* 카테고리 */}
            <div className="bg-[#fff] mt-[12px] px-[16px] py-[12px]">
                <div className="flex gap-[8px] overflow-x-auto scrollbar-hide">
                    {CATEGORIES.map((cat, i) => (
                        <button
                            key={cat}
                            className={`shrink-0 px-[12px] py-[6px] rounded-full text-[12px] font-[600] border transition-all duration-200 ${
                                i === 0
                                    ? "bg-[#E42A57] text-[#fff] border-[#E42A57]"
                                    : "bg-[#fff] text-[#555] border-[#e8e8e8]"
                            }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>

            {/* 우리모임 섹션 */}
            <div className="bg-[#fff] mt-[8px] px-[16px] pt-[16px] pb-[16px]">
                <div className="flex items-center justify-between mb-[12px]">
                    <h2 className="text-[16px] font-[800] text-[#111] tracking-[-.02em]">우리모임</h2>
                    <button className="text-[12px] text-[#999] font-[500]">더보기 &gt;</button>
                </div>
                <div className="flex gap-[10px] overflow-x-auto scrollbar-hide">
                    {MEETINGS.map((item, i) => (
                        <div key={i} className="shrink-0 w-[140px] cursor-pointer">
                            <div className="w-full h-[100px] rounded-[12px] overflow-hidden relative mb-[8px]">
                                <Image src={item.src} alt={item.name} fill className="object-cover" />
                            </div>
                            <p className="text-[13px] font-[700] text-[#111] truncate">{item.name}</p>
                            <p className="text-[11px] text-[#999] mt-[2px]">
                                {item.location} · {item.members}명
                            </p>
                            <p className="text-[11px] text-[#E42A57] font-[600] mt-[2px]">{item.date}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* 가까운 매장 섹션 */}
            <div className="bg-[#fff] mt-[8px] px-[16px] pt-[16px] pb-[16px]">
                <div className="flex items-center justify-between mb-[12px]">
                    <h2 className="text-[16px] font-[800] text-[#111] tracking-[-.02em]">가까운 매장</h2>
                    <button className="text-[12px] text-[#999] font-[500]">더보기 &gt;</button>
                </div>
                <div className="flex items-center gap-[12px] p-[12px] bg-[#f9f9f9] rounded-[14px] cursor-pointer">
                    <div className="w-[56px] h-[56px] rounded-[12px] overflow-hidden relative flex-shrink-0">
                        <Image src="/images/1.png" alt="망원커피" fill className="object-cover" />
                    </div>
                    <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-[6px] mb-[2px]">
                            <p className="text-[14px] font-[700] text-[#111] truncate">망원커피</p>
                            <span className="shrink-0 text-[10px] bg-[#fff3cd] text-[#856404] px-[6px] py-[1px] rounded-full font-[600]">
                                매니저 방문
                            </span>
                        </div>
                        <p className="text-[11px] text-[#999]">카페 · 도보 5분</p>
                    </div>
                    <Icon icon="solar:arrow-right-linear" className="text-[16px] text-[#ccc] flex-shrink-0" />
                </div>
            </div>

            {/* 함께TV 섹션 */}
            <div className="bg-[#fff] mt-[8px] px-[16px] pt-[16px] pb-[16px]">
                <div className="flex items-center justify-between mb-[12px]">
                    <div className="flex items-center gap-[6px]">
                        <h2 className="text-[16px] font-[800] text-[#111] tracking-[-.02em]">함께TV</h2>
                        <LiveBadge />
                    </div>
                    <button className="text-[12px] text-[#999] font-[500]">더보기 &gt;</button>
                </div>
                <div className="flex gap-[10px] overflow-x-auto scrollbar-hide">
                    {VIDEOS.map((item, i) => (
                        <div key={i} className="shrink-0 w-[140px] cursor-pointer">
                            <div className="w-full h-[90px] rounded-[12px] overflow-hidden relative mb-[8px]">
                                <Image src={item.src} alt={item.title} fill className="object-cover" />
                                <span className="absolute bottom-[6px] right-[6px] bg-[rgba(0,0,0,0.7)] text-[#fff] text-[10px] font-[600] px-[5px] py-[1px] rounded-[4px]">
                                    {item.duration}
                                </span>
                            </div>
                            <p className="text-[12px] font-[600] text-[#111] line-clamp-2 leading-[1.4]">{item.title}</p>
                            <p className="text-[11px] text-[#999] mt-[2px]">조회 {item.views}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* 추천 상품 섹션 */}
            <div className="bg-[#fff] mt-[8px] px-[16px] pt-[16px] pb-[16px]">
                <div className="flex items-center justify-between mb-[12px]">
                    <h2 className="text-[16px] font-[800] text-[#111] tracking-[-.02em]">추천 상품</h2>
                    <button className="text-[12px] text-[#999] font-[500]">더보기 &gt;</button>
                </div>
                <div className="flex items-center gap-[12px] cursor-pointer">
                    <div className="w-[72px] h-[72px] rounded-[12px] overflow-hidden relative flex-shrink-0">
                        <Image src="/images/1.png" alt="소금빵" fill className="object-cover" />
                    </div>
                    <div className="flex-1 min-w-0">
                        <p className="text-[13px] font-[600] text-[#111] truncate">망원동 소금빵 6개입</p>
                        <div className="flex items-center gap-[6px] mt-[4px]">
                            <span className="text-[12px] font-[700] text-[#E42A57]">22%</span>
                            <span className="text-[13px] font-[800] text-[#111]">3,500원</span>
                            <span className="text-[11px] text-[#bbb] line-through">4,500원</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* 하단 네비게이션 */}
            <div className="fixed bottom-0 left-0 right-0 bg-[#fff] border-t border-[#f0f0f0] flex">
                {[
                    { icon: "solar:home-2-linear", label: "우리동네" },
                    { icon: "solar:users-group-rounded-linear", label: "우리모임" },
                    { icon: "solar:gift-linear", label: "이벤트" },
                    { icon: "solar:bag-3-linear", label: "커머스" },
                    { icon: "solar:tv-linear", label: "함께TV" },
                ].map((tab, i) => (
                    <button
                        key={tab.label}
                        className={`flex-1 flex flex-col items-center py-[10px] gap-[3px] ${i === 0 ? "text-[#E42A57]" : "text-[#bbb]"}`}
                    >
                        <Icon icon={tab.icon} className="text-[22px]" />
                        <span className="text-[10px] font-[600]">{tab.label}</span>
                    </button>
                ))}
            </div>
        </div>
    );
};

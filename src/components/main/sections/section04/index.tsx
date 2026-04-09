export const MainSection04 = () => {
    return (
        <section className="pb-6">
            <div className="mb-4 flex items-end justify-between px-4 pt-8">
                <div>
                    <p className="mb-1 text-[13px] font-medium tracking-[-0.2px] text-[#E83462]">
                        매니저가 고른 상품
                    </p>
                    <h2 className="text-[22px] font-extrabold leading-[1.25] tracking-[-0.5px] text-[#191919]">
                        오늘의 추천
                    </h2>
                </div>
            </div>
            <div className="space-y-6 px-4">
                <article className="flex items-start gap-[14px]">
                    <div className="relative h-[110px] w-[110px] flex-none overflow-hidden rounded-[12px] bg-[#F5F5F5]">
                        <span className="absolute left-2 top-2 rounded-[6px] bg-[#E83462] px-2 py-[3px] text-[11px] font-bold text-white">
                            22%
                        </span>
                        <button className="absolute bottom-2 right-2 flex min-h-0 min-w-0 items-center justify-center p-0">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-heart text-white"
                                aria-hidden="true"
                            >
                                <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path>
                            </svg>
                        </button>
                    </div>
                    <div className="min-w-0 flex-1 pt-1">
                        <span className="inline-flex items-center rounded-[4px] bg-[#FFF0F4] px-2 py-[3px] text-[11px] font-bold tracking-[-0.1px] text-[#E83462]">
                            매니저 추천
                        </span>
                        <div className="mt-[6px] line-clamp-2 text-[14px] font-medium leading-[1.45] tracking-[-0.2px] text-[#191919]">
                            망원동 소금빵 6개입
                        </div>
                        <div className="mt-[6px] flex items-center gap-2">
                            <span className="text-[14px] font-bold tracking-[-0.2px] text-[#E83462]">
                                22%
                            </span>
                            <span className="text-[13px] tracking-[-0.2px] text-[#8C8C8C] line-through">
                                4,500원
                            </span>
                        </div>
                        <div className="mt-[2px] text-[18px] font-bold tracking-[-0.3px] text-[#191919]">
                            3,500원
                        </div>
                    </div>
                </article>
                <article className="flex items-start gap-[14px]">
                    <div className="relative h-[110px] w-[110px] flex-none overflow-hidden rounded-[12px] bg-[#F5F5F5]">
                        <span className="absolute left-2 top-2 rounded-[6px] bg-[#E83462] px-2 py-[3px] text-[11px] font-bold text-white">
                            22%
                        </span>
                        <button className="absolute bottom-2 right-2 flex min-h-0 min-w-0 items-center justify-center p-0">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-heart text-white"
                                aria-hidden="true"
                            >
                                <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path>
                            </svg>
                        </button>
                    </div>
                    <div className="min-w-0 flex-1 pt-1">
                        <span className="inline-flex items-center rounded-[4px] bg-[#FFF0F4] px-2 py-[3px] text-[11px] font-bold tracking-[-0.1px] text-[#E83462]">
                            매니저 추천
                        </span>
                        <div className="mt-[6px] line-clamp-2 text-[14px] font-medium leading-[1.45] tracking-[-0.2px] text-[#191919]">
                            망원동 소금빵 6개입
                        </div>
                        <div className="mt-[6px] flex items-center gap-2">
                            <span className="text-[14px] font-bold tracking-[-0.2px] text-[#E83462]">
                                22%
                            </span>
                            <span className="text-[13px] tracking-[-0.2px] text-[#8C8C8C] line-through">
                                4,500원
                            </span>
                        </div>
                        <div className="mt-[2px] text-[18px] font-bold tracking-[-0.3px] text-[#191919]">
                            3,500원
                        </div>
                    </div>
                </article>
            </div>
            <div className="mt-4">
                <div className="px-4">
                    <button
                        type="button"
                        className="flex h-[52px] w-full items-center justify-center rounded-[12px] bg-[#FFF0F4] text-[16px] font-bold tracking-[-0.3px] text-[#E83462]"
                    >
                        더보기
                    </button>
                </div>
            </div>
        </section>
    );
};

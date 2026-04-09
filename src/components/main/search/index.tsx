export const MainSearch = () => {
    return (
        <div className="sticky z-40 bg-white px-4 py-3">
            <div className="flex h-12 w-full items-center gap-2 rounded-full bg-[#F5F5F5] px-4">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-search text-[#B0B0B0]"
                    aria-hidden="true"
                >
                    <path d="m21 21-4.34-4.34"></path>
                    <circle cx="11" cy="11" r="8"></circle>
                </svg>
                <span className="text-[14px] font-medium tracking-[-0.2px] text-[#B0B0B0]">
                    우리동네 매장, 모임을 검색해보세요
                </span>
            </div>
        </div>
    );
};

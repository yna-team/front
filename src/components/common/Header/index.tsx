export const Header = () => {
    return (
        <header className="fixed top-0 z-50 flex w-full max-w-[390px] h-14 items-center justify-between bg-white px-4 border-b border-[#F5F5F5] ">
            <div className="flex min-w-0 items-center">
                <div className="h-12 w-12" aria-hidden="true"></div>
            </div>
            <div className="flex items-center gap-4">
                <button
                    type="button"
                    className="flex h-12 min-w-12 items-center gap-1 px-2"
                    aria-label="위치 선택"
                >
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
                        className="lucide lucide-map-pin text-[#E83462]"
                        aria-hidden="true"
                    >
                        <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    <span className="text-[16px] font-bold tracking-[-0.3px] text-[#191919]">
                        마포구 망원동
                    </span>
                    {/* <select name="" id="">
                        <option value="">전체</option>
                        <option value="">마포구</option>
                        <option value="">영등포구</option>
                        <option value="">양천구</option>
                    </select> */}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-chevron-down text-[#191919]"
                        aria-hidden="true"
                    >
                        <path d="m6 9 6 6 6-6"></path>
                    </svg>
                </button>
                <div className="flex items-center gap-3">
                    <button
                        type="button"
                        className="relative flex h-12 w-12 items-center justify-center"
                        aria-label="알림"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-bell text-[#191919]"
                            aria-hidden="true"
                        >
                            <path d="M10.268 21a2 2 0 0 0 3.464 0"></path>
                            <path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path>
                        </svg>
                        <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-[#E83462]"></span>
                    </button>
                    <button
                        type="button"
                        className="relative flex h-12 w-12 items-center justify-center"
                        aria-label="장바구니"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-shopping-bag text-[#191919]"
                            aria-hidden="true"
                        >
                            <path d="M16 10a4 4 0 0 1-8 0"></path>
                            <path d="M3.103 6.034h17.794"></path>
                            <path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path>
                        </svg>
                        <span className="absolute right-1 top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-[#E83462] px-1 text-[10px] font-bold tracking-[-0.1px] text-white">
                            2
                        </span>
                    </button>
                </div>
            </div>
        </header>
    );
};

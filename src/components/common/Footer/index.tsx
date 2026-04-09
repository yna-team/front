export const Footer = () => {
    return (
        <nav className="fixed bottom-0 z-50 flex h-[calc(64px+env(safe-area-inset-bottom))] w-full max-w-[390px] items-stretch border-t border-[#F0F0F0] bg-white pb-[env(safe-area-inset-bottom)]">
            <a
                className="flex min-h-0 min-w-0 flex-1 flex-col items-center justify-center gap-[2px] text-[#E83462]"
                href="/neighborhood"
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
                    className="lucide lucide-house"
                    aria-hidden="true"
                >
                    <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>
                    <path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                </svg>
                <span className="text-[10px] tracking-[-0.1px] font-bold">우리동네</span>
            </a>
            <a
                className="flex min-h-0 min-w-0 flex-1 flex-col items-center justify-center gap-[2px] text-[#8C8C8C]"
                href="/gathering"
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
                    className="lucide lucide-users"
                    aria-hidden="true"
                >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                    <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                </svg>
                <span className="text-[10px] tracking-[-0.1px] font-medium">우리모임</span>
            </a>
            <a
                className="flex min-h-0 min-w-0 flex-1 flex-col items-center justify-center gap-[2px] text-[#8C8C8C]"
                href="/events"
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
                    className="lucide lucide-calendar-days"
                    aria-hidden="true"
                >
                    <path d="M8 2v4"></path>
                    <path d="M16 2v4"></path>
                    <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                    <path d="M3 10h18"></path>
                    <path d="M8 14h.01"></path>
                    <path d="M12 14h.01"></path>
                    <path d="M16 14h.01"></path>
                    <path d="M8 18h.01"></path>
                    <path d="M12 18h.01"></path>
                    <path d="M16 18h.01"></path>
                </svg>
                <span className="text-[10px] tracking-[-0.1px] font-medium">이벤트</span>
            </a>
            <a
                className="flex min-h-0 min-w-0 flex-1 flex-col items-center justify-center gap-[2px] text-[#8C8C8C]"
                href="/commerce"
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
                    className="lucide lucide-shopping-cart"
                    aria-hidden="true"
                >
                    <circle cx="8" cy="21" r="1"></circle>
                    <circle cx="19" cy="21" r="1"></circle>
                    <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
                </svg>
                <span className="text-[10px] tracking-[-0.1px] font-medium">커머스</span>
            </a>
            <a
                className="flex min-h-0 min-w-0 flex-1 flex-col items-center justify-center gap-[2px] text-[#8C8C8C]"
                href="/tv"
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
                    className="lucide lucide-play"
                    aria-hidden="true"
                >
                    <path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path>
                </svg>
                <span className="text-[10px] tracking-[-0.1px] font-medium">함께TV</span>
            </a>
        </nav>
    );
};

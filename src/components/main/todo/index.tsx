export const MainTodo = () => {
    return (
        <div className="px-4 pt-4">
            <button className="flex w-full items-center gap-3 rounded-[14px] border border-[#FFD6E3] bg-[#FFF0F4] p-4 text-left">
                <div className="h-10 w-10 flex-none rounded-full border-2 border-[#E83462] bg-[var(--color-gray-300)]"></div>
                <div className="min-w-0 flex-1">
                    <div className="text-[16px] font-bold text-[#191919]">오늘 할 일이 있어요</div>
                    <div className="mt-[3px] text-[13px] tracking-[-0.2px] text-[#E83462]">
                        체크인 1곳 · 콘텐츠 업로드 대기 2건
                    </div>
                </div>
                <span className="flex-none text-[16px] text-[#E83462]">→</span>
            </button>
        </div>
    );
};

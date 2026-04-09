// 부모태그에 absolute 필요 // 임시로 div 하나 만들어서 해도 ㄱㅊ
export const LiveBadge = () => {
    return (
        <span className="inline-flex items-center gap-[4px] bg-[#E8352A] text-[#fff] text-[10px] font-[800] py-[2px] pr-[7px] pl-[5px] rounded-[4px] tracking-[.06em] leading-[1.4] before:content-[''] before:w-[5px] before:h-[5px] before:bg-[#fff] before:rounded-full before:animate-blink">
            LIVE
        </span>
    );
};

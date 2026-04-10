import Image from "next/image";
import { useMainSection02 } from "./hook";

export const MainSection02 = () => {
    const { DATA } = useMainSection02();

    return (
        <>
            <div className="mb-4 flex items-end justify-between px-4 pt-8">
                <div>
                    <p className="mb-1 text-[13px] font-medium tracking-[-0.2px] text-[#E83462]">
                        가까운 매장 탐색
                    </p>
                    <h2 className="text-[22px] font-extrabold leading-[1.25] tracking-[-0.5px] text-[#191919]">
                        우리동네
                    </h2>
                </div>
            </div>

            <div className="flex gap-3 overflow-x-auto px-4 pb-8 [-ms-overflow-style:none] [scrollbar-width:none] [&amp;::-webkit-scrollbar]:hidden">
                {DATA.map((data, i) => (
                    <article
                        key={i}
                        className="w-[140px] flex-none overflow-hidden rounded-[12px] border border-[#F0F0F0] bg-white"
                    >
                        <div className="relative h-[88px] w-[140px] bg-[#F5F5F5]">
                            <Image
                                src={data.src}
                                alt={data.alt}
                                width={100}
                                height={160}
                                className="w-full h-full object-cover object-center-center"
                            />
                            <span className="absolute bottom-2 left-2 rounded-[4px] bg-[#E83462] px-2 py-[3px] text-[10px] font-bold tracking-[-0.1px] text-white">
                                {data.text}
                            </span>
                        </div>
                        <div className="px-3 pb-3">
                            <div className="mt-2 text-[12px] tracking-[-0.1px] text-[#8C8C8C]">
                                {data.category}
                            </div>
                            <div className="mt-[3px] text-[14px] font-semibold tracking-[-0.2px] text-[#191919]">
                                {data.name}
                            </div>
                            <div className="mt-[3px] text-[12px] tracking-[-0.1px] text-[#8C8C8C]">
                                {data.loc}
                            </div>
                        </div>
                    </article>
                ))}
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
        </>
    );
};

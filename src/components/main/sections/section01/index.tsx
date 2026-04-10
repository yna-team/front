import Image from "next/image";
import { useMainSection01 } from "./hook";

export const MainSection01 = () => {
    const { DATA } = useMainSection01();

    return (
        <>
            <div className="mb-4 flex items-end justify-between px-4 pt-8">
                <div>
                    <p className="mb-1 text-[13px] font-medium tracking-[-0.2px] text-[#E83462]">
                        우리동네에서 함께
                    </p>
                    <h2 className="text-[22px] font-extrabold leading-[1.25] tracking-[-0.5px] text-[#191919]">
                        우리모임
                    </h2>
                </div>
            </div>

            <div className="flex gap-3 overflow-x-auto px-4 pb-8 [-ms-overflow-style:none] [scrollbar-width:none] [&amp;::-webkit-scrollbar]:hidden">
                {DATA.map((data, i) => (
                    <article
                        key={i}
                        className="h-[221px] w-[160px] flex-none overflow-hidden rounded-[14px] border border-[#F0F0F0] bg-white"
                    >
                        <div className="h-[100px] w-[160px] bg-[#F5F5F5]">
                            <Image
                                src={data.src}
                                alt={data.alt}
                                width={100}
                                height={160}
                                className="w-full h-full object-cover object-center-center"
                            />
                        </div>
                        <div className="px-3 pt-3 pb-5">
                            <span className="inline-flex items-center rounded-[4px] bg-[#FFF0F4] px-2 py-[2px] text-[11px] font-bold tracking-[-0.1px] text-[#E83462]">
                                {data.category}
                            </span>
                            <div className="mt-[6px] line-clamp-2 text-[14px] font-semibold leading-[1.4] tracking-[-0.2px] text-[#191919]">
                                {data.name}
                            </div>
                            <div className="mt-1 text-[12px] tracking-[-0.1px] text-[#8C8C8C]">
                                {data.loc} · {data.maxParticipant}명
                            </div>
                            <div className="mt-1 text-[12px] font-semibold tracking-[-0.1px] text-[#E83462]">
                                {data.whenDate}
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

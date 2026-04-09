"use client";

import { Icon } from "@iconify/react";

export const MainSection10 = () => {
    return (
        <div className="mt-[1px] bg-[#fff]">
            <div className="flex items-stretch">
                <div className="flex-1 flex flex-col items-center justify-center py-[20px] px-[8px] border-r-[1px] border-r-[#f0f0f0]">
                    <Icon
                        icon="solar:hand-money-linear"
                        className="text-[28px] text-[#e8352a] mb-[8px]"
                    />
                    <p className="text-[22px] font-[900] text-[#qqq] leading-[-0.03em] tracking-[1.1]">
                        2.3만
                    </p>
                    <p className="test-[11px] text-[#999] mt-[3px] font-[500]">누적 거래</p>
                </div>

                <div className="flex-1 flex flex-col items-center justify-center py-[20px] px-[8px] border-r-[1px] border-r-[#f0f0f0]">
                    <Icon
                        icon="solar:chat-round-like-linear"
                        className="text-[28px] text-[#e8352a] mb-[8px]"
                    />
                    <p className="text-[22px] font-[900] text-[#qqq] leading-[-0.03em] tracking-[1.1]">
                        47.2만
                    </p>
                    <p className="test-[11px] text-[#999] mt-[3px] font-[500]">후기 수</p>
                </div>

                <div className="flex-1 flex flex-col items-center justify-center py-[20px] px-[8px] border-r-[1px] border-r-[#f0f0f0]">
                    <Icon
                        icon="solar:shield-check-linear"
                        className="text-[28px] text-[#e8352a] mb-[8px]"
                    />
                    <p className="text-[22px] font-[900] text-[#qqq] leading-[-0.03em] tracking-[1.1]">
                        98.7%
                    </p>
                    <p className="test-[11px] text-[#999] mt-[3px] font-[500]">신뢰도</p>
                </div>
            </div>
        </div>
    );
};

import { MainCarousel } from "@/components/main/carousel";
import { MainCategory } from "@/components/main/category";
import { SampleSection } from "@/components/main/sections/sample";
import { MainSection01 } from "@/components/main/sections/section01";
import { MainSection02 } from "@/components/main/sections/section02";
import { MainSection03 } from "@/components/main/sections/section03";
import { MainSection04 } from "@/components/main/sections/section04";
import { MainSection05 } from "@/components/main/sections/section05";
import { MainSection06 } from "@/components/main/sections/section06";
import { MainSection07 } from "@/components/main/sections/section07";
import { MainSection08 } from "@/components/main/sections/section08";
import { MainSection09 } from "@/components/main/sections/section09";
import { MainSection10 } from "@/components/main/sections/section10";
import { MainSection11 } from "@/components/main/sections/section11";

export default function Home() {
    return (
        // items-center
        <div className="flex flex-col flex-1 font-sans">
            {/* <MainCarousel /> */}
            {/* <MainCategory /> */}
            <MainSection01 />
            <MainSection02 />
            <MainSection03 />
            <MainSection04 />
            <MainSection05 />
            <MainSection06 />
            <MainSection07 />
            <MainSection08 />
            <MainSection09 />
            <MainSection10 />
            <MainSection11 />
            {/* <SampleSection /> */}
        </div>
    );
}

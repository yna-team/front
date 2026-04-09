import { Footer } from "@/components/common/Footer";
import { Header } from "@/components/common/Header";
import { MainCategory } from "@/components/main/category";
import { MainSearch } from "@/components/main/search";
import { MainSection01 } from "@/components/main/sections/section01";
import { MainSection02 } from "@/components/main/sections/section02";
import { MainSection03 } from "@/components/main/sections/section03";
import { MainSection04 } from "@/components/main/sections/section04";
import { MainTodo } from "@/components/main/todo";

export default function Home() {
    return (
        // items-center
        <div className="relative mx-auto min-h-dvh max-w-[390px] overflow-hidden bg-[var(--color-gray-50)]">
            <div className="flex min-h-dvh flex-col bg-white font-sans">
                <Header />
                <main className="flex-1 overflow-y-auto pb-20">
                    <MainSearch />
                    <MainTodo />
                    <MainCategory />
                    <section>
                        <MainSection01 />
                        <MainSection02 />
                        <MainSection03 />
                        <MainSection04 />
                    </section>
                </main>
                <Footer />
                {/* <MainCarousel /> */}
                {/* <MainCategory /> */}
                {/* <MainSection01 />
                <MainSection02 />
                <MainSection03 />
                <MainSection04 />
                <MainSection05 />
                <MainSection06 />
                <MainSection07 />
                <MainSection08 />
                <MainSection09 />
                <MainSection10 />
                <MainSection11 /> */}
                {/* <SampleSection /> */}
            </div>
        </div>
    );
}

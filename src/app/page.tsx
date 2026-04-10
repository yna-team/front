import { MainCategory } from "@/components/main/category";
import { MainSearch } from "@/components/main/search";
import { MainSection01 } from "@/components/main/sections/section01";
import { MainSection02 } from "@/components/main/sections/section02";
import { MainSection03 } from "@/components/main/sections/section03";
import { MainSection04 } from "@/components/main/sections/section04";
import { MainTodo } from "@/components/main/todo";

export default function Home() {
    return (
        <>
            <MainSearch />
            <MainTodo />
            <MainCategory />
            <MainSection01 />
            <MainSection02 />
            <MainSection03 />
            <MainSection04 />
        </>
    );
}

"use client";

import { useState } from "react";

export const useMainCategory = () => {
    const [selected, setSelected] = useState("전체");

    return {
        selected,

        setSelected,
    };
};

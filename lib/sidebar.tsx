"use client";

import { useEffect, useState } from "react";
import ButtonComponents from "@/lib/Components";

export default function Sidebar() {
    const [width, setWidth] = useState(256);
    const [isResizing, setIsResizing] = useState(false);

    useEffect(() => {
        function handleMouseMove(e: MouseEvent) {
            if (!isResizing) return;

            const newWidth = Math.min(Math.max(e.clientX, 200), 500);
            setWidth(newWidth);
        }

        function handleMouseUp() {
            setIsResizing(false);
        }

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseup", handleMouseUp);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseup", handleMouseUp);
        };
    }, [isResizing]);

    return (
        <aside
            className="fixed left-0 top-0 h-screen border-r border-gray-200 p-4 bg-white"
            style={{ width: `${width}px` }}
        >
            <h1>logo</h1>

            // 섹션 전부 변경 예정

            <section>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </section>

            <section className="absolute inset-x-0 bottom-0 m-6 flex justify-center">
                <ButtonComponents rounded={true} color="blue" fullWidth>
                    하단 버튼
                </ButtonComponents>
            </section>

            <div
                onMouseDown={() => setIsResizing(true)}
                className="absolute top-0 right-0 h-full w-1 cursor-col-resize"
            />
        </aside>
    );
}
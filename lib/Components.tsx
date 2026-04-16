type ButtonProps = {
    rounded?: boolean;
    fullWidth?: boolean;
    color: "blue" | "black" | string;
    children: React.ReactNode;
};

// 로고 컴포넌트 여기에

export default function ButtonComponents({
    rounded = false,
    fullWidth = false,
    color,
    children,
}: ButtonProps) {
    const bgClass =
        color === "blue"
            ? "bg-blue-500"
            : color === "black"
            ? "bg-black"
            : "bg-gray-500";

    return (
        <button
            className={`
                ${bgClass}
                text-white px-4 py-2
                ${rounded ? "rounded-full" : "rounded"}
                ${fullWidth ? "w-full" : "w-auto"}

                transition-all duration-150 ease-out
                active:scale-95
                active:opacity-90
            `}
        >
            {children}
        </button>
    );
}
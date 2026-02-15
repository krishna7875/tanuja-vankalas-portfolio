"use client";

import { HTMLAttributes, forwardRef } from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
    as?: React.ElementType;
}

const Container = forwardRef<HTMLDivElement, ContainerProps>(
    ({ className, as: Component = "div", children, ...props }, ref) => {
        return (
            <Component
                ref={ref}
                className={cn("max-w-6xl mx-auto px-6 md:px-8", className)}
                {...props}
            >
                {children}
            </Component>
        );
    }
);
Container.displayName = "Container";

export { Container };

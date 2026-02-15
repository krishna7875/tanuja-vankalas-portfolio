"use client";

import { HTMLAttributes, forwardRef } from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

// Heading Component
interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
    level?: 1 | 2 | 3 | 4 | 5 | 6;
    family?: "sans" | "serif";
}

const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(
    ({ className, level = 1, family = "sans", children, ...props }, ref) => {
        const Tag = `h${level}` as keyof JSX.IntrinsicElements;

        // Default to Inter (sans), user can override to Playfair (serif)
        const baseStyles = "text-foreground tracking-tight";
        const familyStyles = family === "serif" ? "font-serif" : "font-sans";

        const sizeStyles = {
            1: "text-4xl md:text-6xl font-semibold",
            2: "text-3xl md:text-4xl font-semibold",
            3: "text-xl md:text-2xl font-medium",
            4: "text-lg md:text-xl font-medium",
            5: "text-base font-medium",
            6: "text-sm font-medium uppercase tracking-widest",
        };

        return (
            <Tag
                ref={ref}
                className={cn(baseStyles, familyStyles, sizeStyles[level], className)}
                {...props}
            >
                {children}
            </Tag>
        );
    }
);
Heading.displayName = "Heading";

// Text Component
interface TextProps extends HTMLAttributes<HTMLParagraphElement> {
    variant?: "default" | "muted" | "large" | "small";
}

const Text = forwardRef<HTMLParagraphElement, TextProps>(
    ({ className, variant = "default", children, ...props }, ref) => {
        const variants = {
            default: "text-foreground text-base leading-relaxed",
            muted: "text-foreground/70 text-sm leading-relaxed",
            large: "text-lg text-foreground leading-relaxed",
            small: "text-sm text-neutral-600",
        };

        return (
            <p
                ref={ref}
                className={cn(variants[variant], className)}
                {...props}
            >
                {children}
            </p>
        );
    }
);
Text.displayName = "Text";

export { Heading, Text };

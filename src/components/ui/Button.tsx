"use client";

import { ButtonHTMLAttributes, forwardRef } from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "ghost";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", ...props }, ref) => {
        const baseStyles = "inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-medium transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent disabled:pointer-events-none disabled:opacity-50";

        const variants = {
            primary: "bg-foreground text-background hover:bg-foreground/90",
            secondary: "border border-foreground/20 bg-transparent hover:border-foreground hover:text-foreground",
            ghost: "hover:bg-accent/10 hover:text-accent-foreground",
        };

        return (
            <button
                ref={ref}
                className={cn(baseStyles, variants[variant], className)}
                {...props}
            />
        );
    }
);
Button.displayName = "Button";

export { Button };

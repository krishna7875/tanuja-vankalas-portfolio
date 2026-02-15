"use client";

import { HTMLAttributes, forwardRef } from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface SectionProps extends HTMLAttributes<HTMLElement> {
    container?: boolean;
}

const Section = forwardRef<HTMLElement, SectionProps>(
    ({ className, container = true, children, ...props }, ref) => {
        return (
            <section
                ref={ref}
                className={cn("py-24", className)}
                {...props}
            >
                {container ? (
                    <div className="container-section">
                        {children}
                    </div>
                ) : children}
            </section>
        );
    }
);
Section.displayName = "Section";

export { Section };

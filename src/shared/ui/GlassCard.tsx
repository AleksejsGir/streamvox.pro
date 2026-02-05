import * as React from "react";
import { cn } from "@/shared/lib/utils";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> { }


const GlassCard = React.forwardRef<HTMLDivElement, GlassCardProps>(
    ({ className, ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={cn("glass-card p-6", className)}
                {...props}
            />
        );
    }
);
GlassCard.displayName = "GlassCard";

export { GlassCard };

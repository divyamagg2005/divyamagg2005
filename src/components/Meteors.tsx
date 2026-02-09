import { useEffect, useState } from "react";
import { cn } from "../lib/utils";

export interface MeteorsProps {
    className?: string;
    children?: React.ReactNode;
    /** Number of meteors */
    count?: number;
    /** Meteor angle in degrees (215 = diagonal down-left) */
    angle?: number;
    /** Meteor color */
    color?: string;
    /** Tail gradient color */
    tailColor?: string;
}

interface MeteorData {
    id: number;
    left: number;
    top: number;
    delay: number;
    duration: number;
}

export function Meteors({
    className,
    children,
    count = 25,
    angle = 215,
    color = "#3b82f6",
    tailColor = "#60a5fa",
}: MeteorsProps) {
    const [meteors, setMeteors] = useState<MeteorData[]>([]);

    useEffect(() => {
        setMeteors(
            Array.from({ length: count }, (_, i) => {
                // Keep the balanced distribution around the diagonal
                const spawnOnTop = Math.random() > 0.5;

                return {
                    id: i,
                    // Spread spawns across a wider area to ensure the center axis is populated
                    left: spawnOnTop
                        ? (Math.random() * 120) - 20 // Top edge: -20% to 100%
                        : 100,                      // Right edge: fixed at 100%
                    top: spawnOnTop
                        ? -5                        // Top edge: fixed slightly above
                        : (Math.random() * 100) - 20, // Right edge: -20% to 80%
                    delay: Math.random() * 5,
                    duration: 2 + Math.random() * 6,
                };
            })
        );
    }, [count]);

    return (
        <div className={cn("fixed inset-0 overflow-hidden pointer-events-none", className)}>
            {/* Keyframe animation */}
            <style>{`
        @keyframes meteor-fall {
          0% {
            transform: rotate(${angle}deg) translateX(0);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: rotate(${angle}deg) translateX(-120vmax);
            opacity: 0;
          }
        }
      `}</style>

            {/* Subtle gradient overlay (The Glow) */}
            <div
                className="pointer-events-none absolute inset-0"
                style={{
                    background: `
            radial-gradient(ellipse at center, rgba(30, 58, 138, 0.15) 0%, transparent 60%)
          `,
                }}
            />

            {/* Meteors */}
            {meteors.map((meteor) => (
                <span
                    key={meteor.id}
                    className="absolute h-0.5 w-0.5 rounded-full"
                    style={{
                        top: `${meteor.top}%`,
                        left: `${meteor.left}%`,
                        backgroundColor: color,
                        boxShadow: `0 0 0 1px ${color}20`,
                        animation: `meteor-fall ${meteor.duration}s linear infinite`,
                        animationDelay: `${meteor.delay}s`,
                    }}
                >
                    {/* Tail */}
                    <span
                        className="absolute top-1/2 -translate-y-1/2"
                        style={{
                            left: "100%",
                            width: "60px",
                            height: "1px",
                            background: `linear-gradient(to right, ${tailColor}, transparent)`,
                        }}
                    />
                </span>
            ))}

            {/* Vignette */}
            <div
                className="pointer-events-none absolute inset-0"
                style={{
                    background:
                        "radial-gradient(ellipse at center, transparent 0%, transparent 50%, rgba(0,0,0,0.6) 100%)",
                }}
            />

            {/* Content layer */}
            {children && <div className="relative z-10 h-full w-full">{children}</div>}
        </div>
    );
}

export default Meteors;

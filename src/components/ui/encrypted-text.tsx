import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface EncryptedTextProps {
    text: string;
    interval?: number;
    encryptedClassName?: string;
    revealedClassName?: string;
    revealDelayMs?: number;
}

const CHARS = "!@#$%^&*()_+-=[]{}|;':\",./<>?~`0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

export const EncryptedText = ({
    text,
    interval = 50,
    encryptedClassName,
    revealedClassName,
    revealDelayMs = 50,
}: EncryptedTextProps) => {
    const [displayText, setDisplayText] = useState<string>("");

    useEffect(() => {
        let intervalId: NodeJS.Timeout;
        let currentRevealIndex = 1;

        // Initial fill with random chars, keeping first char revealed
        setDisplayText(
            text
                .split("")
                .map((char, i) => {
                    if (i === 0 || char === " ") return char;
                    return CHARS[Math.floor(Math.random() * CHARS.length)];
                })
                .join("")
        );

        const startRevealing = () => {
            intervalId = setInterval(() => {
                setDisplayText((prev) => {
                    return prev
                        .split("")
                        .map((_, index) => {
                            if (index < currentRevealIndex) {
                                return text[index];
                            }
                            if (text[index] === " ") return " ";
                            return CHARS[Math.floor(Math.random() * CHARS.length)];
                        })
                        .join("");
                });

                currentRevealIndex++;
                if (currentRevealIndex > text.length) {
                    clearInterval(intervalId);
                    // Final ensure
                    setDisplayText(text);
                }
            }, interval);
        };

        const timeoutId = setTimeout(startRevealing, revealDelayMs);

        return () => {
            clearInterval(intervalId);
            clearTimeout(timeoutId);
        };
    }, [text, interval, revealDelayMs]);

    return (
        <div className="inline-block whitespace-pre-wrap">
            {displayText.split("").map((char, index) => {
                const isRevealed = char === text[index];
                return (
                    <span
                        key={index}
                        className={cn(
                            isRevealed ? revealedClassName : encryptedClassName
                        )}
                    >
                        {char}
                    </span>
                );
            })}
        </div>
    );
};

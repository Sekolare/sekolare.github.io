import { useEffect, useState } from 'react';
import './PageLoadHearts.css'; // Creeremo questo file CSS

interface Heart {
    id: number;
    x: number;
    size: number;
    delay: number;
    duration: number;
}

export const PageLoadHearts = () => {
    const [hearts, setHearts] = useState<Heart[]>([]);

    useEffect(() => {
        const generateHearts = () => {
            const numberOfHearts = 60; // Ancora più cuori!
            return Array.from({ length: numberOfHearts }, (_, index) => ({
                id: index,
                x: Math.random() * 100,
                size: Math.random() * 24 + 16,
                delay: Math.random() * 1.5,
                duration: Math.random() * 1.5 + 1.5
            }));
        };

        setHearts(generateHearts());

        const timer = setTimeout(() => {
            setHearts([]);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="hearts-container">
            {hearts.map((heart) => (
                <div
                    key={heart.id}
                    className="heart"
                    style={{
                        left: `${heart.x}%`,
                        fontSize: `${heart.size}px`,
                        animationDelay: `${heart.delay}s`,
                        animationDuration: `${heart.duration}s`
                    }}
                >
                    ❤️
                </div>
            ))}
        </div>
    );
};
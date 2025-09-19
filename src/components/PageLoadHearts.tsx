import React, { useState, useEffect } from 'react';
import './PageLoadHearts.css';

interface Heart {
    id: number;
    left: number;
    bottom: number;
    size: number;
    animationDuration: string;
    opacity: number;
}

const PageLoadHearts: React.FC = () => {
    const [hearts, setHearts] = useState<Heart[]>([]);

    useEffect(() => {
        const createHeart = () => {
            const heart: Heart = {
                id: Math.random(),
                left: Math.random() * 100,
                bottom: Math.random() * 20,
                size: Math.random() * 15 + 10,
                animationDuration: `${Math.random() * 5 + 3}s`,
                opacity: Math.random() * 0.6 + 0.4
            };
            setHearts(prev => [...prev, heart]);
        };

        const interval = setInterval(createHeart, 100);

        const timeout = setTimeout(() => {
            clearInterval(interval);
            setTimeout(() => setHearts([]), 5000);
        }, 3000);

        return () => {
            clearInterval(interval);
            clearTimeout(timeout);
        };
    }, []);

    return (
        <div className="hearts-container">
            {hearts.map(heart => (
                <div
                    key={heart.id}
                    className="heart"
                    style={{
                        left: `${heart.left}%`,
                        bottom: `${heart.bottom}%`,
                        fontSize: `${heart.size}px`,
                        animationDuration: heart.animationDuration,
                        opacity: heart.opacity
                    }}
                >❤️</div>
            ))}
        </div>
    );
};

export default PageLoadHearts;
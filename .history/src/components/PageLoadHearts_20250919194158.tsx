import React, { useState, useEffect } from 'react';
import './PageLoadHearts.css';

interface Heart {
    id: number;
    left: number;
    animationDuration: string;
    size: number;
    color: string;
}

const PageLoadHearts: React.FC = () => {
    const [hearts, setHearts] = useState<Heart[]>([]);

    useEffect(() => {
        const createHeart = () => {
            const colors = ['#ff7676', '#ff4c4c', '#ff2c2c', '#ff0000', '#e60000'];
            const heart: Heart = {
                id: Math.random(),
                left: Math.random() * 100,
                animationDuration: `${Math.random() * 3 + 2}s`,
                size: Math.random() * 20 + 15,
                color: colors[Math.floor(Math.random() * colors.length)]
            };
            setHearts(prev => [...prev, heart]);
        };

        // Crea cuori a intervalli regolari
        const interval = setInterval(createHeart, 300);

        // Pulizia dopo 5 secondi
        const timeout = setTimeout(() => {
            clearInterval(interval);
        }, 5000);

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
                        animationDuration: heart.animationDuration,
                        fontSize: `${heart.size}px`,
                        color: heart.color
                    }}
                >❤️</div>
            ))}
        </div>
    );
};

export default PageLoadHearts;
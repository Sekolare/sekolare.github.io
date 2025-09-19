import React, { useState, useEffect } from 'react';
import './PageLoadHearts.css';

const PageLoadHearts = () => {
    const [hearts, setHearts] = useState([]);

    useEffect(() => {
        const createHeart = () => {
            const heart = {
                id: Math.random(),
                left: Math.random() * 100,
                animationDuration: (Math.random() * 3 + 2) + 's'
            };
            setHearts(prev => [...prev, heart]);
        };

        // Crea cuori a intervalli regolari
        const interval = setInterval(createHeart, 300);

        // Pulizia dopo 3 secondi
        const timeout = setTimeout(() => {
            clearInterval(interval);
            setHearts([]);
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
                        animationDuration: heart.animationDuration
                    }}
                >❤️</div>
            ))}
        </div>
    );
};

export default PageLoadHearts;
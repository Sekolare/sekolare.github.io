import { useEffect, useState } from 'react';
import styled from '@emotion/styled';

interface Heart {
    id: number;
    x: number;
    y: number;
    size: number;
}

const HeartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 9999;
  overflow: hidden;
  background: rgba(0,0,0,0.1); // Temporaneo per debug
`;

const HeartEmoji = styled.div<{ size: number; x: number; y: number }>`
  position: absolute;
  font-size: ${props => props.size}px;
  left: ${props => props.x}%;
  top: ${props => props.y}%;
  animation: heartExplode 2s ease-out forwards;
  
  @keyframes heartExplode {
    0% {
      transform: scale(0) translate(0, 0);
      opacity: 1;
    }
    50% {
      opacity: 1;
    }
    100% {
      transform: scale(2) translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px);
      opacity: 0;
    }
  }
`;

export const PageLoadHearts = () => {
    const [hearts, setHearts] = useState<Heart[]>([]);

    useEffect(() => {
        const generateHearts = () => {
            const numberOfHearts = 50; // Aumentato il numero di cuori
            return Array.from({ length: numberOfHearts }, (_, index) => ({
                id: index,
                x: Math.random() * 100,
                y: Math.random() * 100,
                size: Math.random() * 20 + 10,
            }));
        };

        setHearts(generateHearts());

        const timer = setTimeout(() => {
            setHearts([]);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <HeartContainer>
            {hearts.map((heart) => (
                <HeartEmoji
                    key={heart.id}
                    size={heart.size}
                    x={heart.x}
                    y={heart.y}
                >
                    ❤️
                </HeartEmoji>
            ))}
        </HeartContainer>
    );
};
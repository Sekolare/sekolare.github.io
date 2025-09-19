import { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

interface Heart {
    id: number;
    x: number;
    y: number;
    size: number;
    rotation: number;
}

// Define keyframes outside of the styled component
const heartExplode = keyframes`
  0% {
    transform: scale(0) rotate(0deg);
    opacity: 1;
  }
  25% {
    opacity: 1;
  }
  100% {
    transform: scale(2) rotate(360deg);
    opacity: 0;
  }
`;

const HeartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 9999;
`;

const HeartEmoji = styled.div<{ size: number; rotation: number }>`
  position: absolute;
  font-size: ${props => props.size}px;
  transform-origin: center;
  animation: ${heartExplode} 2s ease-out forwards;
  will-change: transform, opacity;
`;

export const PageLoadHearts = () => {
    const [hearts, setHearts] = useState<Heart[]>([]);

    useEffect(() => {
        const generateHearts = () => {
            const numberOfHearts = 30;
            return Array.from({ length: numberOfHearts }, (_, index) => ({
                id: index,
                x: Math.random() * 100,
                y: Math.random() * 100,
                size: Math.random() * 20 + 10,
                rotation: Math.random() * 360
            }));
        };

        // Generate hearts immediately when the component mounts
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
                    style={{
                        left: `${heart.x}%`,
                        top: `${heart.y}%`,
                    }}
                    size={heart.size}
                    rotation={heart.rotation}
                >
                    ❤️
                </HeartEmoji>
            ))}
        </HeartContainer>
    );
};
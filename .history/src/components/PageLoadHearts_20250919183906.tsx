import { useEffect, useState } from 'react';
import styled from '@emotion/styled';

interface Heart {
  id: number;
  x: number;
  y: number;
  size: number;
  rotation: number;
}

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
  animation: heartExplode 2s ease-out forwards;

  @keyframes heartExplode {
    0% {
      transform: scale(0) rotate(0deg);
      opacity: 1;
    }
    25% {
      opacity: 1;
    }
    100% {
      transform: scale(2) rotate(${props => props.rotation}deg);
      opacity: 0;
    }
  }
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

    // Genera cuori immediatamente quando il componente viene montato
    setHearts(generateHearts());

    const timer = setTimeout(() => {
      setHearts([]);
    }, 2000);

    return () => clearTimeout(timer);
  }, []); // L'effetto viene eseguito solo al mount del componente

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
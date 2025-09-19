import { motion, useAnimation } from 'framer-motion';
import { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { FaHeart } from 'react-icons/fa';

const ExplosionContainer = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
  z-index: 9999;
`;

const Heart = styled(motion(FaHeart))`
  position: absolute;
  color: var(--primary-color);
  filter: drop-shadow(0 0 5px rgba(255, 107, 107, 0.3));
`;

interface HeartBurstProps {
    isActive: boolean;
    onComplete: () => void;
    originX: number;
    originY: number;
}

export const HeartBurst = ({ isActive, onComplete, originX, originY }: HeartBurstProps) => {
    const controls = useAnimation();
    const [hearts, setHearts] = useState<{ id: number; delay: number; scale: number }[]>([]);

    useEffect(() => {
        if (isActive) {
            // Crea un numero crescente di cuori nel tempo
            const totalDuration = 5000; // 5 secondi
            const intervals = 20; // numero di ondate di cuori
            const heartsPerInterval = 15; // cuori per ondata
            let currentHearts: typeof hearts = [];

            for (let i = 0; i < intervals; i++) {
                const baseDelay = (i / intervals) * totalDuration;
                // Aumenta esponenzialmente il numero di cuori per ogni intervallo
                const currentHeartsCount = Math.floor(heartsPerInterval * Math.pow(1.2, i));

                for (let j = 0; j < currentHeartsCount; j++) {
                    currentHearts.push({
                        id: currentHearts.length,
                        delay: baseDelay + Math.random() * 200, // Aggiungi un po' di casualità
                        scale: 0.5 + Math.random() * 1.5 // Dimensione casuale
                    });
                }
            }

            setHearts(currentHearts);
            controls.start('animate').then(onComplete);
        }
    }, [isActive, controls, onComplete]);

    if (!isActive) return null;

    return (
        <ExplosionContainer>
            {hearts.map((heart) => {
                const angle = Math.random() * Math.PI * 2;
                const distance = 50 + Math.random() * 400;
                const x = Math.cos(angle) * distance;
                const y = Math.sin(angle) * distance;

                return (
                    <Heart
                        key={heart.id}
                        initial={{
                            x: originX,
                            y: originY,
                            scale: 0,
                            opacity: 0.8
                        }}
                        animate={{
                            x: originX + x,
                            y: originY + y,
                            scale: [0, heart.scale, 0],
                            opacity: [0.8, 0.9, 0],
                            rotateZ: Math.random() * 360
                        }}
                        transition={{
                            duration: 2 + Math.random(),
                            delay: heart.delay / 1000,
                            ease: [0.4, 0, 0.2, 1],
                        }}
                        style={{
                            fontSize: `${20 + Math.random() * 20}px`,
                        }}
                    />
                );
            })}
        </ExplosionContainer>
    );
};
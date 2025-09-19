import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { FaHeart } from 'react-icons/fa';

const ExplosionContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  overflow: visible;
  z-index: 9999;
`;

const Heart = styled(motion.div)`
  position: absolute;
  color: var(--primary-color);
  display: flex;
  align-items: center;
  justify-content: center;
  will-change: transform;
  
  svg {
    filter: drop-shadow(0 0 8px rgba(255, 107, 107, 0.9));
  }
`;

interface HeartBurstProps {
    isActive: boolean;
    onComplete: () => void;
    originX: number;
    originY: number;
}

export const HeartBurst = ({ isActive, onComplete, originX, originY }: HeartBurstProps) => {
    const [hearts, setHearts] = useState<Array<{
        id: number;
        angle: number;
        distance: number;
        size: number;
        duration: number;
    }>>([]);

    useEffect(() => {
        if (isActive) {
            const newHearts = [];
            const baseCount = 15; // Base number of hearts
            const burstCount = Math.floor(baseCount + (Math.random() * 10)); // Vary total count slightly

            for (let i = 0; i < burstCount; i++) {
                newHearts.push({
                    id: i,
                    angle: (Math.random() * Math.PI * 2), // Random angle
                    distance: 80 + Math.random() * 120, // Variable distance for more spread
                    size: 20 + Math.random() * 15, // Slightly larger hearts
                    duration: 0.6 + Math.random() * 0.4, // Faster animation
                });
            }

            setHearts(newHearts);

            // Reset dopo che l'animazione è completata
            const timer = setTimeout(() => {
                setHearts([]);
                onComplete();
            }, 1200); // Reduce cleanup delay to match shorter animation duration

            return () => clearTimeout(timer);
        }
    }, [isActive, onComplete]);

    return (
        <ExplosionContainer>
            {hearts.map((heart) => {
                const x = Math.cos(heart.angle) * heart.distance;
                const y = Math.sin(heart.angle) * heart.distance;

                return (
                    <Heart
                        key={heart.id}
                        initial={{
                            x: originX,
                            y: originY,
                            scale: 0,
                            opacity: 1
                        }}
                        animate={{
                            x: originX + x,
                            y: originY + y,
                            scale: [0, 1, 0],
                            opacity: [1, 1, 0]
                        }}
                        transition={{
                            duration: heart.duration,
                            ease: [0.4, 0, 0.2, 1]
                        }}
                        style={{
                            fontSize: `${heart.size}px`
                        }}
                    >
                        <FaHeart />
                    </Heart>
                );
            })}
        </ExplosionContainer>
    );
};
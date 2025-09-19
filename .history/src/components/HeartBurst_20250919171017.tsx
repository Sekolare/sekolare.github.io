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
  
  svg {
    filter: drop-shadow(0 0 5px rgba(255, 107, 107, 0.8));
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
            const baseCount = 30; // Numero base di cuori
            const burstCount = Math.floor(baseCount * (1 + Math.random())); // Varia leggermente il numero totale
            
            for (let i = 0; i < burstCount; i++) {
                newHearts.push({
                    id: i,
                    angle: (Math.random() * Math.PI * 2), // Angolo casuale completo
                    distance: 50 + Math.random() * 150, // Distanza variabile
                    size: 15 + Math.random() * 25, // Dimensione variabile
                    duration: 0.8 + Math.random() * 1.2, // Durata variabile
                });
            }
            
            setHearts(newHearts);
            
            // Reset dopo che l'animazione è completata
            const timer = setTimeout(() => {
                setHearts([]);
                onComplete();
            }, 2000);
            
            return () => clearTimeout(timer);
        }
    }, [isActive, onComplete]);

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
                            duration: 1.5 + Math.random(),
                            delay: heart.delay / 1000,
                            ease: "easeOut",
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
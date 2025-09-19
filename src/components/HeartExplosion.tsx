import { motion } from 'framer-motion';
import styled from '@emotion/styled';
import { FaHeart, FaStar } from 'react-icons/fa';

const ParticleContainer = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  overflow: visible;
`;

const Particle = styled(motion.div)`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
`;

interface HeartExplosionProps {
    isHovered: boolean;
}

export const HeartExplosion = ({ isHovered }: HeartExplosionProps) => {
    const generateParticles = (count: number, ParticleIcon: typeof FaHeart | typeof FaStar) => {
        return Array.from({ length: count }).map((_, i) => {
            const angle = (i * 360) / count;
            const radius = Math.random() * 30 + 20;
            const x = Math.cos((angle * Math.PI) / 180) * radius;
            const y = Math.sin((angle * Math.PI) / 180) * radius;

            return (
                <Particle
                    key={i}
                    initial={{
                        x: "50%",
                        y: "50%",
                        scale: 0,
                        opacity: 0
                    }}
                    animate={isHovered ? {
                        x: `calc(50% + ${x}px)`,
                        y: `calc(50% + ${y}px)`,
                        scale: [0, 1, 0],
                        opacity: [0, 0.8, 0]
                    } : {
                        x: "50%",
                        y: "50%",
                        scale: 0,
                        opacity: 0
                    }}
                    transition={{
                        duration: 0.6,
                        ease: "easeOut",
                        times: [0, 0.2, 1]
                    }}
                >
                    <ParticleIcon size={ParticleIcon === FaHeart ? 16 : 8} color={ParticleIcon === FaHeart ? "#FFB6B9" : "#FFD700"} />
                </Particle>
            );
        });
    };

    return (
        <ParticleContainer>
            <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={isHovered ? {
                    scale: [0, 1.5, 0],
                    opacity: [0, 0.8, 0]
                } : {
                    scale: 0,
                    opacity: 0
                }}
                transition={{
                    duration: 0.5,
                    ease: "easeOut"
                }}
                style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)"
                }}
            >
                <FaHeart size={24} color="#FF6B6B" />
            </motion.div>
            {generateParticles(8, FaHeart)}
            {generateParticles(12, FaStar)}
        </ParticleContainer>
    );
};
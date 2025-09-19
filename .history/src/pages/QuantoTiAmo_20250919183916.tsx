import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { FaHeart } from 'react-icons/fa';
import { PageLoadHearts } from '../components/PageLoadHearts';

const PageContainer = styled.div`
  text-align: center;
  padding: 2rem;
`;

const Title = styled(motion.h1)`
  color: var(--primary-color);
  font-size: 3rem;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  svg {
    animation: heartbeat 1.5s infinite;
  }
`;

const LoveSection = styled(motion.section)`
  margin: 2rem 0;
  padding: 2rem;
  background-color: white;
  border-radius: 20px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  
  h2 {
    color: var(--primary-color);
    margin-bottom: 1rem;
    font-size: 1.8rem;
  }

  p {
    font-size: 1.2rem;
    line-height: 1.8;
    margin-bottom: 1rem;
  }
`;

const HeartGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: 1rem;
  margin: 2rem 0;

  svg {
    font-size: 2rem;
    color: var(--primary-color);
    animation: heartbeat 1.5s infinite;
    animation-delay: calc(var(--i) * 0.2s);
  }
`;

export const QuantoTiAmo = () => {
  return (
    <PageContainer>
      <HeartExplosion />

      <Title
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Quanto ti amo <FaHeart />

        <LoveSection
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h2>Un Amore Infinito</h2>
          <p>
            Il mio amore per te è come l'universo: infinito e in continua espansione.
            Ogni giorno che passa, scopro nuovi modi di amarti ancora di più.
          </p>
        </LoveSection>

        <LoveSection
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h2>Profondo Come l'Oceano</h2>
          <p>
            Come l'oceano nasconde infinite meraviglie nelle sue profondità,
            così il mio amore per te ha infinite sfaccettature e cresce sempre più profondo.
          </p>
        </LoveSection>

        <LoveSection
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <h2>Eterno Come le Stelle</h2>
          <p>
            Come le stelle brillano eternamente nel cielo notturno,
            così il mio amore per te brillerà per sempre, illuminando la nostra vita.
          </p>
        </LoveSection>

        <HeartGrid>
          {[...Array(12)].map((_, i) => (
            <FaHeart key={i} style={{ '--i': i } as React.CSSProperties} />
          ))}
        </HeartGrid>
    </PageContainer>
  );
};
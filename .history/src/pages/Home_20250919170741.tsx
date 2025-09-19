import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { useState } from 'react';
import primoIncontro from '../assets/primoIn.jpg';
import momentiSpeciali from '../assets/momSp.jpg';
import futuroInsieme from '../assets/futuro.png';
import { HeartBurst } from '../components/HeartBurst';

const HomeContainer = styled.div`
  .photo-section {
    display: flex;
    align-items: center;
    margin: 4rem 0;
    gap: 3rem;

    @media (max-width: 768px) {
      flex-direction: column;
      text-align: center;
      margin: 2rem 0;
      gap: 1.5rem;
    }

    &:nth-of-type(even) {
      flex-direction: row-reverse;

      @media (max-width: 768px) {
        flex-direction: column;
      }
    }
  }
`;

const PhotoFrame = styled(motion.div)`
  cursor: pointer;
  flex: 1;
  max-width: 500px;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  position: relative;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.05);
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    max-width: 300px;
    margin: 0 auto;
  }
`;

const TextContent = styled(motion.div)`
  flex: 1;
  padding: 2rem;
  
  h2 {
    color: var(--primary-color);
    margin-bottom: 1rem;
    font-size: 2rem;
  }

  p {
    font-size: 1.2rem;
    line-height: 1.8;
    color: var(--text-color);
  }
`;

interface PhotoFrameProps {
  url: string;
  alt: string;
}

const EnhancedPhotoFrame: React.FC<PhotoFrameProps> = ({ url, alt }) => {
  const [isExploding, setIsExploding] = useState(false);
  const [clickPosition, setClickPosition] = useState({ x: 0, y: 0 });

  const handleInteraction = (event: React.MouseEvent | React.TouchEvent) => {
    event.preventDefault();
    const rect = (event.currentTarget as HTMLElement).getBoundingClientRect();
    const x = ('touches' in event)
      ? event.touches[0].clientX - rect.left
      : (event as React.MouseEvent).clientX - rect.left;
    const y = ('touches' in event)
      ? event.touches[0].clientY - rect.top
      : (event as React.MouseEvent).clientY - rect.top;

    setClickPosition({ x, y });
    setIsExploding(true);
  };

  return (
    <PhotoFrame
      onMouseDown={handleInteraction}
      onTouchStart={handleInteraction}
      onClick={(e) => e.preventDefault()}
      onContextMenu={(e) => e.preventDefault()}
    >
      <img 
        src={url} 
        alt={alt}
        draggable={false}
        onDragStart={(e) => e.preventDefault()}
      />
      <HeartBurst
        isActive={isExploding}
        onComplete={() => setIsExploding(false)}
        originX={clickPosition.x}
        originY={clickPosition.y}
      />
    </PhotoFrame>
  );
};

export const Home = () => {
  const photos = [
    {
      url: primoIncontro,
      title: 'Il Nostro Primo Incontro',
      text: 'Dal momento in cui i nostri occhi si sono incrociati, ho capito che saresti stata la luce della mia vita. Il tuo sorriso ha illuminato il mio mondo in un modo che non avrei mai immaginato possibile.',
    },
    {
      url: momentiSpeciali,
      title: 'I Nostri Momenti Speciali',
      text: 'Ogni istante trascorso insieme è un tesoro prezioso. Il tuo amore rende ogni giorno più luminoso, ogni risata più dolce, ogni momento più significativo.',
    },
    {
      url: futuroInsieme,
      title: 'Il Nostro Futuro Insieme',
      text: 'Guardando nei tuoi occhi, vedo il nostro futuro splendere luminoso. Sei il mio oggi, il mio domani e il mio per sempre.',
    },
  ];

  return (
    <HomeContainer className="container">
      {photos.map((photo, index) => (
        <motion.section
          key={index}
          className="photo-section"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.3 }}
        >
          <EnhancedPhotoFrame
            url={photo.url}
            alt={photo.title}
          />
          <TextContent>
            <h2>{photo.title}</h2>
            <p>{photo.text}</p>
          </TextContent>
        </motion.section>
      ))}
    </HomeContainer>
  );
};
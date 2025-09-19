import styled from '@emotion/styled';
import { motion } from 'framer-motion';

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
  flex: 1;
  max-width: 500px;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  
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

export const Home = () => {
    // Nota: Sostituisci questi URL con le tue foto reali
    const photos = [
        {
            url: 'URL_DELLA_TUA_PRIMA_FOTO',
            title: 'Il Nostro Primo Incontro',
            text: 'Dal momento in cui i nostri occhi si sono incrociati, ho capito che saresti stata la luce della mia vita. Il tuo sorriso ha illuminato il mio mondo in un modo che non avrei mai immaginato possibile.',
        },
        {
            url: 'URL_DELLA_TUA_SECONDA_FOTO',
            title: 'I Nostri Momenti Speciali',
            text: 'Ogni istante trascorso insieme è un tesoro prezioso. Il tuo amore rende ogni giorno più luminoso, ogni risata più dolce, ogni momento più significativo.',
        },
        {
            url: 'URL_DELLA_TUA_TERZA_FOTO',
            title: 'Il Nostro Futuro Insieme',
            text: 'Guardando nei tuoi occhi, vedo il nostro futuro splendere luminoso. Sei il mio oggi, il mio domani e il mio per sempre. Con te, ogni sogno diventa possibile.',
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
                    <PhotoFrame
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                    >
                        <img src={photo.url} alt={photo.title} />
                    </PhotoFrame>
                    <TextContent>
                        <h2>{photo.title}</h2>
                        <p>{photo.text}</p>
                    </TextContent>
                </motion.section>
            ))}
        </HomeContainer>
    );
};
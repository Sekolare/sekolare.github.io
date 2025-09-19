import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { FaHeart, FaInfinity, FaGem } from 'react-icons/fa';
import PageLoadHearts from '../components/PageLoadHearts';

const PageContainer = styled.div`
  text-align: center;
  padding: 2rem;
`;

const Title = styled(motion.h1)`
  color: var(--primary-color);<
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

const MeaningCard = styled(motion.div)`
  background: white;
  padding: 3rem;
  border-radius: 20px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  margin: 2rem 0;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 5px;
    background: linear-gradient(to right, var(--primary-color), var(--secondary-color));
  }
  
  h2 {
    color: var(--primary-color);
    font-size: 2rem;
    margin-bottom: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
  }

  p {
    font-size: 1.2rem;
    line-height: 1.8;
    margin-bottom: 1.5rem;
  }
`;

const IconRow = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin: 2rem 0;
  
  svg {
    font-size: 2.5rem;
    color: var(--primary-color);
    animation: heartbeat 1.5s infinite;
  }
`;

export const CosaSignifichi = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1
        }
    };

    return (
        <PageContainer>
            <Title
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                Cosa Significhi Per Me <FaHeart />
            </Title>
            <PageLoadHearts />
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <MeaningCard variants={itemVariants}>
                    <h2>
                        <FaHeart /> Il Mio Tutto
                    </h2>
                    <p>
                        Sei il primo pensiero al mattino e l'ultimo prima di dormire.
                        Sei il sorriso che illumina le mie giornate e la forza che mi spinge a dare il meglio.
                        Sei la ragione per cui il mio cuore batte più forte.
                    </p>
                    <IconRow>
                        <FaHeart />
                        <FaHeart />
                        <FaHeart />
                    </IconRow>
                </MeaningCard>

                <MeaningCard variants={itemVariants}>
                    <h2>
                        <FaInfinity /> La Mia Eternità
                    </h2>
                    <p>
                        Sei il mio presente e il mio futuro.
                        Ogni momento con te è un dono prezioso che custodisco nel cuore.
                        Sei la promessa di un amore che durerà per sempre.
                    </p>
                    <IconRow>
                        <FaInfinity />
                        <FaHeart />
                        <FaInfinity />
                    </IconRow>
                </MeaningCard>

                <MeaningCard variants={itemVariants}>
                    <h2>
                        <FaGem /> Il Mio Tesoro
                    </h2>
                    <p>
                        Sei il gioiello più prezioso della mia vita.
                        La tua anima brilla di una luce unica che mi incanta ogni giorno.
                        Sei il regalo più bello che potesse capitarmi.
                    </p>
                    <IconRow>
                        <FaGem />
                        <FaHeart />
                        <FaGem />
                    </IconRow>
                </MeaningCard>
            </motion.div>
        </PageContainer>
    );
};
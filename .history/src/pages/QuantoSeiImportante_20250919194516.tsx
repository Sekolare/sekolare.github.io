import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { FaHeart, FaStar, FaSun } from 'react-icons/fa';


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
    color: var(--primary-color);
  }
`;

const ImportanceCard = styled(motion.div)`
  background: white;
  padding: 2rem;
  border-radius: 20px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  margin: 2rem 0;
  
  h2 {
    color: var(--primary-color);
    font-size: 1.8rem;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
  }

  p {
    font-size: 1.2rem;
    line-height: 1.8;
    margin-bottom: 1rem;
  }

  svg {
    animation: heartbeat 1.5s infinite;
  }
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin: 1rem 0;
  
  svg {
    font-size: 2rem;
    color: var(--primary-color);
  }
`;

export const QuantoSeiImportante = () => {
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
        <PageContainer className="container">
            <Title
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                Quanto Sei Importante <FaStar />
            </Title>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <ImportanceCard variants={itemVariants}>
                    <h2>
                        <FaSun />
                        La Mia Luce
                    </h2>
                    <p>
                        Sei come il sole che illumina le mie giornate.
                        La tua presenza rende tutto più luminoso e pieno di significato.
                        Sei la fonte di gioia che mi dà energia ogni giorno.
                    </p>
                    <IconContainer>
                        <FaSun />
                        <FaSun />
                        <FaSun />
                    </IconContainer>
                </ImportanceCard>

                <ImportanceCard variants={itemVariants}>
                    <h2>
                        <FaHeart />
                        Il Mio Mondo
                    </h2>
                    <p>
                        Sei il centro del mio universo.
                        Ogni decisione, ogni sogno, ogni progetto ruota attorno a te.
                        La tua felicità è la mia priorità più grande.
                    </p>
                    <IconContainer>
                        <FaHeart />
                        <FaHeart />
                        <FaHeart />
                    </IconContainer>
                </ImportanceCard>

                <ImportanceCard variants={itemVariants}>
                    <h2>
                        <FaStar />
                        Il Mio Destino
                    </h2>
                    <p>
                        Sei la persona che il destino ha scelto per me.
                        Ogni momento con te conferma che siamo fatti l'uno per l'altra.
                        Non potrei immaginare la mia vita senza di te.
                    </p>
                    <IconContainer>
                        <FaStar />
                        <FaStar />
                        <FaStar />
                    </IconContainer>
                </ImportanceCard>
            </motion.div>
        </PageContainer>
    );
};
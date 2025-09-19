import styled from '@emotion/styled';
import { FaHeart } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background-color: var(--primary-color);
  color: white;
  padding: 2rem 0;
  margin-top: auto;
  width: 100%;
  position: relative;
  left: 0;
  right: 0;
`;

const FooterContent = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const HeartContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  margin-top: 1rem;

  svg {
    animation: heartbeat 1.5s infinite;
  }
`;

export const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <p>Creato con tanto amore per te</p>
        <HeartContainer>
          <FaHeart />
          <FaHeart />
          <FaHeart />
        </HeartContainer>
        <p>© {new Date().getFullYear()} - Ti amerò per sempre</p>
      </FooterContent>
    </FooterContainer>
  );
};
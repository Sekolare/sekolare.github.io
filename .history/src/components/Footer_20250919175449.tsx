import styled from '@emotion/styled';
import { FaHeart } from 'react-icons/fa';

const FooterContainer = styled.footer`
  grid-column: full-start / full-end;
  background-color: var(--primary-color);
  color: white;
  padding: 2rem 0;
  margin-top: auto;
  display: grid;
  grid-template-columns: inherit;
`;

const FooterContent = styled.div`
  grid-column: main-start / main-end;
  width: var(--page-width);
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
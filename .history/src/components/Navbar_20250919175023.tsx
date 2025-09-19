import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from '@emotion/styled';
import { FaHeart } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { HeartExplosion } from './HeartExplosion';

const Nav = styled(motion.nav)`
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  padding: 1rem 0;
  box-shadow: 0 4px 15px rgba(255, 107, 107, 0.2);
  position: sticky;
  top: 0;
  z-index: 1000;
  backdrop-filter: blur(10px);
  width: 100%;
  left: 0;
  right: 0;
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0 1rem;
  }
`;

const Logo = styled(motion(Link))`
  color: white;
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 100%;
    height: 2px;
    background: white;
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.3s ease;
  }

  &:hover::after {
    transform: scaleX(1);
    transform-origin: left;
  }

  svg {
    animation: heartbeat 1.5s infinite;
    filter: drop-shadow(0 0 5px rgba(255, 255, 255, 0.5));
  }
`;

const NavLinks = styled.div<{ isOpen: boolean }>`
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    display: ${props => props.isOpen ? 'flex' : 'none'};
    flex-direction: column;
    width: 100%;
    text-align: center;
    padding: 1rem 0;
    gap: 1rem;
  }
`;



const NavLink = styled(motion(Link))`
  color: white;
  text-decoration: none;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  position: relative;
  overflow: visible;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }

  &.active {
    background: rgba(255, 255, 255, 0.2);
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.1);
  }
`;

const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
    position: absolute;
    top: 1rem;
    right: 1rem;
  }
`;

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navVariants = {
    initial: { y: -100 },
    animate: {
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <Nav
      initial="initial"
      animate="animate"
      variants={navVariants}
    >
      <NavContainer>
        <Logo
          to="/"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaHeart /> Per Te Amore
        </Logo>
        <MenuButton onClick={() => setIsOpen(!isOpen)}>
          ☰
        </MenuButton>
        <NavLinks isOpen={isOpen}>
          {[
            { to: "/quanto-ti-amo", text: "Quanto Ti Amo" },
            { to: "/quanto-sei-importante", text: "Quanto Sei Importante" },
            { to: "/cosa-significhi", text: "Cosa Significhi Per Me" }
          ].map((link) => {
            const [isHovered, setIsHovered] = useState(false);
            return (
              <NavLink
                key={link.to}
                to={link.to}
                className={location.pathname === link.to ? "active" : ""}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                whileHover={{
                  scale: 1.05,
                  transition: {
                    type: "spring" as const,
                    stiffness: 300,
                    damping: 10
                  }
                }}
                whileTap={{ scale: 0.95 }}
              >
                {link.text}
                <HeartExplosion isHovered={isHovered} />
              </NavLink>
            );
          })}
        </NavLinks>
      </NavContainer>
    </Nav>
  );
};
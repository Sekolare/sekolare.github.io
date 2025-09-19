import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import { FaHeart } from 'react-icons/fa';

const Nav = styled.nav`
  background-color: var(--primary-color);
  padding: 1rem 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0 1rem;
  }
`;

const Logo = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  svg {
    animation: heartbeat 1.5s infinite;
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

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;

  &:hover {
    color: var(--accent-color);
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

    return (
        <Nav>
            <NavContainer>
                <Logo to="/">
                    <FaHeart /> Per Te Amore
                </Logo>
                <MenuButton onClick={() => setIsOpen(!isOpen)}>
                    ☰
                </MenuButton>
                <NavLinks isOpen={isOpen}>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/quanto-ti-amo">Quanto Ti Amo</NavLink>
                    <NavLink to="/quanto-sei-importante">Quanto Sei Importante</NavLink>
                    <NavLink to="/cosa-significhi">Cosa Significhi Per Me</NavLink>
                </NavLinks>
            </NavContainer>
        </Nav>
    );
};
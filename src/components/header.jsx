import { useLocation } from '@reach/router';
import React, { useEffect, useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container
} from 'reactstrap';
import styled from 'styled-components';

import MenuLink from './Navlink'


import LogoImg from '../assets/img/fmc_logo.fw.png';
const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <HeaderContainer color="dark" dark expand="md">
            <SContainer>
                <NavbarBrand href="/">
                    <Logo src={LogoImg} alt="" />
                </NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar className="justify-content-end">
                    <Nav navbar>
                        <MenuItem className="active">
                            <MenuLink to="/">Home</MenuLink>
                        </MenuItem>
                        <MenuItem>
                            <MenuLink to="sobre">Sobre</MenuLink>
                        </MenuItem>
                        <MenuItem>
                            <MenuLink to="equipamentos">Equipamentos</MenuLink>
                        </MenuItem>
                        <MenuItem>
                            <MenuLink to="contato">Contato</MenuLink>
                        </MenuItem>
                    </Nav>
                </Collapse>
            </SContainer>
        </HeaderContainer>

    );
}

export default Header;



const HeaderContainer = styled(Navbar)`

    /* padding-bottom: 300px; */
    padding-top: 20px;
    padding-bottom: 20px;
   &.container-fluid {
    justify-content: start !important;
   }
`;
const Logo = styled.img`
    max-width: 200px;
`;
const SContainer = styled(Container)`
    display:flex;
    @media (max-width: 768px) {
       display: contents;
    }
`;


const MenuItem = styled(NavItem)`
    margin: 0 5px;
    
    border-radius: 5px;
    a{
         text-decoration: none;
         border-radius: 5px;
        background-color: var(--primary-color);
        padding: 10px;
        color: #666;
        font-weight: bold;
        &.active{
            color: #000;
            background-color: var(--secondary-color);
        }
    }
    @media (max-width: 768px) {
        background-color: var(--primary-color) !important;
        margin-top: 10px;
        display: flex;
        a{
            background-color: transparent !important;
            width: 100%;
            
            &.active{
                background-color: var(--secondary-color) !important;
            }
        }
    }

`;

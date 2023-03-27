import React from 'react'
import { Container } from 'reactstrap';
import styled from 'styled-components';
import { GiRotaryPhone } from 'react-icons/gi';



const Footer = () => {

    return (
        <FooterContainer>
            <Container className='d-flex justify-content-between'>
                <CopyRigth>
                    FMC MAQUINAS © {new Date().getFullYear()}. Todos os direitos reservados.
                    <br />
                    <GiRotaryPhone size={20} /> (21) 2734-4111
                </CopyRigth>
                <Production>
                    Desenvolvido: <a href="http://liniker.com.br" target="_blank">Liniker Silva</a>
                </Production>
            </Container>
        </FooterContainer>
    )
}


export default Footer;


const FooterContainer = styled.footer`
background-color: var(--bg-default);
padding: 20px 0;

`

const CopyRigth = styled.div`
color: #fff;
font-weight: bold;
`
const Production = styled.div`
color: #fff;
a{
    text-decoration: none;
    font-weight: bold;
}
`
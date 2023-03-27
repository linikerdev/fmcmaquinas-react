import React from 'react'
import { Container } from 'reactstrap';
import styled from 'styled-components';
import SobreImg from '../assets/img/sobre.png'
const Sobre = () => {

    return (
        <Container>
            <SobreContainer>
                <img src={SobreImg} alt="Sobre" />
                <Title>Um pouco mais sobre nós</Title>
                <p> FMC locação de máquinas é uma empresa que presta serviços de terraplenagem, atendendo os seguintes serviços: barragens, estradas, nivelamento de terreno, drenagem, serviço de locação para construção civil, loteamentos, aeroporto, duplicação de rodovias com um a variedade de máquinas de qualidade, e eficiência na manutenção que só a FMC pode oferecer.</p>
                <p> Destaca-se por trabalhar em obras de pequeno e grande porte. Administrada e dirigida com competência, tem a finalidade de atender as necessidade dos clientes e trazer satisfação aos mesmos.</p>
                <Versi>
                    " Até aqui nos ajudou o Senhor"
                </Versi>

            </SobreContainer>
        </Container>
    )
}


export default Sobre;



const SobreContainer = styled.div`
    margin-top: 100px;
    width: 100%;;
    img{
        float: left;
        max-width: 500px;
        border-radius: 5px;
        border: 3px solid #ddd;
        box-shadow: var(--shadow);
        margin: 20px;
    }
    p{
    font-size: 130%;
    line-height: 130%;
    color: #626264;
    margin: 10px 0;
    text-align: justify;
    }

    @media (max-width: 768px) {
        img{
        max-width: 100%;
        margin: 10px 0  50px 0 ;
    }
    }
`

const Title = styled.div`
    font-weight: bold;
    font-size: 22px;
    padding: 10px;
`
const Versi = styled.div`
    font-weight: bold;
    color: var(--secondary-color);
    text-shadow: var(--shadow);;
    `
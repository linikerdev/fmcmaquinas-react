import React, { useEffect } from 'react'
import { CardImg, Col, Container, Row } from 'reactstrap';
import styled from 'styled-components';
import Banner from '../components/banner';
import cliente1 from '../assets/img/clientes/fmc_cliente_01.jpg'
import cliente2 from '../assets/img/clientes/fmc_cliente_02.jpg'
import cliente3 from '../assets/img/clientes/fmc_cliente_03.jpg'
import cliente4 from '../assets/img/clientes/fmc_cliente_04.jpg'
import cliente5 from '../assets/img/clientes/fmc_cliente_05.jpg'
import cliente6 from '../assets/img/clientes/fmc_cliente_06.jpg'
import cliente7 from '../assets/img/clientes/fmc_cliente_07.jpg'
import cliente8 from '../assets/img/clientes/fmc_cliente_08.jpg'


import {
    Card, CardGroup, CardText, CardTitle
    , CardBody
} from 'reactstrap';
const Home = () => {

    const [files, setFiles] = React.useState([
        { path: 'fmc_cliente_01.jpg', name: 'Latina Manutenção' },
        { path: 'fmc_cliente_02.jpg', name: 'Odebrecht' },
        { path: 'fmc_cliente_03.jpg', name: 'Queiroz Galvão' },
        { path: 'fmc_cliente_04.jpg', name: 'Viação Rio Ita' },
        { path: 'fmc_cliente_05.jpg', name: 'Lupus Alimentos' },
        { path: 'fmc_cliente_06.jpg', name: 'ROSA Turismo' },
        { path: 'fmc_cliente_07.jpg', name: 'Fidens' },
        { path: 'fmc_cliente_08.jpg', name: 'Águas de Juturnaiba' },
    ]);


    return (
        <HomeContainer>
            <Banner className="d-none d-sm-block" />
            <Container>
                <Section>
                    <TitlePage>Veja alguns diferenciais da FMC</TitlePage>
                    <CardGroup>
                        <SCard>
                            <SCardBody>
                                <STitle tag="h5">Atendimento diferenciado</STitle>
                                <SText>
                                    Mais que uma equipe somos uma família. O nosso objetivo profissional é fazer do seu projeto um diferencial.
                                    <br />
                                    A nossa meta é alcançar total satisfação em cada serviço confiado à nossa empresa, estamos sempre ao dispor de nossos clientes para atender as suas necessidades e dúvidas.
                                </SText>

                            </SCardBody>
                        </SCard>
                        <SCard>

                            <SCardBody>
                                <STitle tag="h5">Equipamentos de qualidade</STitle>
                                <SText>
                                    Sempre atenta às inovações a FMC coloca à disposição dos clientes as melhores marcas do mercado, para o atendimento de acordo com cada área de atuação
                                    <br />
                                    Nossas máquinas são constantemente revisadas e testadas garantindo assim a completa operação e segurança das mesmas, garantindo excelentes resultados.
                                </SText>

                            </SCardBody>
                        </SCard>
                        <SCard>

                            <SCardBody>
                                <STitle tag="h5">Operadores qualificados</STitle>
                                <SText>
                                    Nossa equipe é formada por profissionais totalmente capacitados e treinados para cada tipo de serviço solicitado.
                                    <br />
                                    Com anos de experiência no mercado nossos colaboradores são totalmente comprometidos a trabalhar com seriedade e desempenho, além de cumprirem as normas da empresa contratante.
                                </SText>
                            </SCardBody>
                        </SCard>
                    </CardGroup>
                </Section>
                <Section>
                    <TitlePage>Conheça alguns clientes da FMC</TitlePage>
                    <Row md={4} xs={2}>
                        {files.map((file, i) => {
                            const nameUrl = `/assets/img/clientes/${file.path}`
                            return (
                                <CardClients key={i}>
                                    <Card key={i}>
                                        <CardImg top src={nameUrl} alt="Card image cap" />
                                        <CardBody>
                                            <CardText style={{ textAlign: 'center', fontWeight: 500 }}>{file.name}</CardText>
                                        </CardBody>
                                    </Card>
                                </CardClients>
                            )
                        })}
                    </Row>
                </Section>
            </Container>
        </HomeContainer>

    )
}


export default Home;


const HomeContainer = styled.div``

const SCard = styled(Card)`
    border:none;
    padding: 0;
    background-color: transparent;
`
const SCardBody = styled(CardBody)`
    background-color: #626264;
    margin-left: 10px;
    margin-right: 10px;
    border-radius: 10px;
    color: #fff;
    padding: 0;
`
const STitle = styled(CardTitle)`
background-color: var(--primary-color);
margin-top: 20px;
text-align:center;
color: #626264;
font-size: 26px;
`
const SText = styled(CardText)`
    padding: 15px;
`
const Section = styled.div`
    margin-top: 50px;

`
const TitlePage = styled.div`
    padding: 10px;
    border-bottom: 2px solid #ccc8;
    font-size: 36px;
    text-align: center;
    font-weight: bold;
    color: var(--dark-color);
    margin-bottom: 20px;
    margin-left: 2.5%;
    width: 95%;
`
const CardClients = styled(Col)`
    margin-bottom: 20px;
    border-radius: 10px;
`
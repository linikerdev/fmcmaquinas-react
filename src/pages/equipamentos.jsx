import React from "react";
import {
  Card,
  CardBody,
  CardGroup,
  CardImg,
  CardText,
  Container,
  Row,
} from "reactstrap";
import styled from "styled-components";
const Equipamentos = () => {
  const [equipamentos] = React.useState([
    { name: "Escavadeira", image: "/assets/img/equipamentos/maq1.jpg" },
    { name: "Trator de Esteira", image: "/assets/img/equipamentos/maq2.jpg" },
    { name: "Motoniveladora", image: "/assets/img/equipamentos/maq3.jpg" },
    { name: "Retroescavadeira", image: "/assets/img/equipamentos/maq4.jpg" },
    { name: "Rolo compactador", image: "/assets/img/equipamentos/maq5.jpg" },
    { name: "Caminhão prancha", image: "/assets/img/equipamentos/maq6.jpg" },
  ]);

  return (
    <EquipamentosContainer>
      <Container>
        <Row md={3} xs={2}>
          {equipamentos.map((item, i) => (
            <CardGroup key={i}>
              <CardEquip key={i}>
                <CardImg top src={item.image} alt="Card image cap" />
                <CardBody>
                  <CardText style={{ textAlign: "center", fontWeight: 500 }}>
                    {item.name}
                  </CardText>
                </CardBody>
              </CardEquip>
            </CardGroup>
          ))}
        </Row>

        <Notion>
          Caso precise de algum equipamento específico, entre em contato
          conosco.
        </Notion>
      </Container>
    </EquipamentosContainer>
  );
};

export default Equipamentos;

const EquipamentosContainer = styled.div``;
const Notion = styled.div`
  font-size: 24px;
  margin-top: 20px;
  font-weight: bold;
  color: #000;
  text-shadow: 2px 1px 2px var(--primary-color); ;
`;

const CardEquip = styled(Card)`
  background-color: var(--primary-color);
  margin-top: 20px !important;
`;

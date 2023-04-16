import React from "react";
import styled from "styled-components";
import {
  FaBuilding,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import {
  Container,
  Col,
  Button,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
} from "reactstrap";
const Contato = () => {
  return (
    <>
      <Maps>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d920.0632566919609!2d-42.687591105270485!3d-22.71883205023598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x99db16169f1579%3A0x459e9846ccc8c69b!2zRi5NLkMgTG9jYcOnw6NvIERlIE3DoXF1aW5hcw!5e0!3m2!1spt-BR!2sbr!4v1679891644593!5m2!1spt-BR!2sbr"
          width="100%"
          height="450"
          zoom="2"
          loading="lazy"
        ></iframe>
      </Maps>
      <Container>
        <Contact>
          <SForm>
            <Title> Fale conosco</Title>
            <Row>
              <Col md={12}>
                <FormGroup>
                  <Label for="nome">Nome:</Label>
                  <Input
                    type="text"
                    name="text"
                    id="Nome"
                    placeholder="Informe seu nome"
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="email">Email:</Label>
                  <Input
                    type="email"
                    name="email"
                    id="exampleEmail"
                    placeholder="Informe seu e-mail"
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="celular">Celular</Label>
                  <Input
                    type="text"
                    name="text"
                    id="celular"
                    placeholder="Informe seu telefone"
                  />
                </FormGroup>
              </Col>
              <Col md={12}>
                <FormGroup>
                  <Label for="nome">Assunto:</Label>
                  <Input
                    type="text"
                    name="text"
                    id="Nome"
                    placeholder="Informe o assunto"
                  />
                  <Col md={12}>
                    <FormGroup>
                      <Label for="mensagem">Mensagem</Label>
                      <Input
                        type="textarea"
                        name="text"
                        id="Nome"
                        placeholder="Informe seu nome"
                      />
                    </FormGroup>
                  </Col>
                </FormGroup>
              </Col>
            </Row>

            <Button> Enviar</Button>
          </SForm>
          <Info>
            <Title> Informações sobre a FMC</Title>
            <ItemInfo>
              <FaBuilding />
              <span>Rio Bonito - RJ</span>
            </ItemInfo>
            <ItemInfo>
              <FaPhoneAlt />
              <span>(21) 2734-4111</span>
            </ItemInfo>
            <ItemInfo>
              <FaEnvelope />
              <span> contato@fmcmaquinas.com.br</span>
            </ItemInfo>
            <ItemInfo>
              <FaMapMarkerAlt />
              <span>Rua Romario de Azevedo Muniz, Nº 43 - Mangueirinha</span>
            </ItemInfo>
            <hr />
            <Title> Representantes:</Title>
            <h4>Fernando Medina</h4>
            <ItemInfo>
              <FaPhoneAlt />
              <span>(21) 99703 9431</span>
            </ItemInfo>
            <ItemInfo>
              <FaPhoneAlt />
              <span>(21) 99241 8146</span>
            </ItemInfo>
            <ItemInfo>
              <FaPhoneAlt />
              <span>(21) 99352 2062</span>
            </ItemInfo>
          </Info>
        </Contact>
      </Container>
    </>
  );
};





export default Contato;

const Maps = styled.div`
  border-bottom: 2px solid var(--primary-color);
`;

const Contact = styled(Row)`
  margin-top: 70px;
  display: flex;
  margin-bottom: 100px;
`;
const Info = styled.div`
  flex: 1;
`;
const SForm = styled(Form)`
  flex: 1;
  padding: 0 20px;
  margin-right: 20px;

  .row {
    background-color: #eee;
    margin-bottom: 10px;
    padding: 10px;
    border-radius: 10px;
  }

  label {
    font-size: 16;
    font-weight: bold;
    color: #444;
    padding: 0;
    margin: 0;
  }
  input,
  textarea {
    border: 1px solid #ddd;
    margin-bottom: 10px;
  }
`;
const Title = styled.div`
  display: block;
  width: 100%;
  padding: 0;
  margin-bottom: 20px;
  font-size: 24px;
  line-height: 40px;
  color: #333333;
  border: 0;
  border-bottom: 1px solid #e5e5e5;
`;

const ItemInfo = styled.div`
  background-color: var(--primary-color);
  border-radius: 5px;
  padding: 7px 5px;
  margin-bottom: 10px;
  font-size: 18px;
  color: #666;

  svg {
    margin-right: 10px;
    color: #444;
  }
`;

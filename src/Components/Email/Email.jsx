import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Card, CardBody, CardTitle, InputGroup } from "react-bootstrap";
import { RxAvatar } from "react-icons/rx";
import InputGroupText from "react-bootstrap/esm/InputGroupText";

function Email() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    if (!form.current) {
      console.error("Erro: O formulário não foi encontrado.");
      return;
    }

    emailjs
      .sendForm("service_u416hl9", "template_a50i58f", form.current, {
        publicKey: "G6tPW6ry0oFpFyLam",
      })
      .then(
        () => {
          console.log("SUCESSO!");
          alert("E-mail enviado com sucesso!");
        },
        (error) => {
          console.error("Erro ao enviar e-mail:", error);
          alert("Ocorreu um problema ao enviar seu e-mail. Tente novamente.");
        }
      );
  };

  return (
    <Card className="m-5">
      <CardBody>
        <CardTitle className="text-center fs-2 align-items-center d-flex justify-content-center">
          Envie um e-mail
        </CardTitle>
        <Form ref={form} onSubmit={sendEmail}>
          <Row className="mb-3">
            <Form.Label>Nome</Form.Label>
            <InputGroup>
              <InputGroupText id="basic-addon1">
                <RxAvatar />
              </InputGroupText>
              <Form.Group as={Col} controlId="formGridName">
                <Form.Control type="text" name="user_name" placeholder="Digite seu nome" />
              </Form.Group>
            </InputGroup>

            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" name="user_email" placeholder="Digite seu email" />
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" controlId="formGridMessage">
            <Form.Label>Mensagem</Form.Label>
            <Form.Control placeholder="Digite sua mensagem" type="text" name="message" />
          </Form.Group>

          <div className="d-flex align-items-center justify-content-center">
            <button type="submit" className="btn btn-outline-info btn-lg">
              Enviar
            </button>
          </div>
        </Form>
      </CardBody>
    </Card>
  );
}

export default Email;
import axios from "axios";
import React, { useState } from "react";
import { Button, Card, Form } from "react-bootstrap";

const Ddd = () => {
    const [form, setForm] = useState({
        ddd: "",
        estado: "",
        cidades: []
    });

    const handleChangeForm = (event) => {
        setForm({ ...form, [event.target.name]: event.target.value });
    };

    const consultarDDD = () => {
        const dddNum = form.ddd.replace(/\D/g, "");

        if (dddNum.length === 2) {
            axios.get(`https://brasilapi.com.br/api/ddd/v1/${dddNum}`).then((res) => {
                const { state, cities } = res.data;
                setForm({ ...form, estado: state, cidades: cities });

                alert("DDD encontrado com sucesso");
            }).catch(() => {
                alert("DDD não encontrado");
            });
        } else {
            alert("DDD inválido");
        }
    };

    const submit = (event) => {
        event.preventDefault();
        alert("Dados Gravados com sucesso");
    };

    return (
        <>
        <div className="d-flex justify-content-center align-items-center">
            <Card className="mt-4" style={{ width: 500,}}  >
                <Card.Body>
                    <Card.Title>Consulta serviço de DDD</Card.Title>
                    <Form onSubmit={submit}>
                        <Form.Group className="meuPadraoFormGroup">
                            <Form.Label>DDD</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Informe o DDD"
                                name="ddd"
                                value={form.ddd}
                                onChange={handleChangeForm}
                            />
                            <Button variant="primary" onClick={consultarDDD}>
                                Consultar
                            </Button>
                        </Form.Group>

                        <Form.Group className="meuPadraoFormGroup mt-3">
                            <Form.Text className="text-muted">
                                Estado: {form.estado} 
                            </Form.Text>
                        </Form.Group>
                        <Form.Label>Cidades: </Form.Label>
                        <Form.Group className="meuPadraoFormGroup">

                            <ul style={{ paddingLeft: "1rem" }}>
                                {form.cidades.map((cidade, index) => (
                                    <li key={index}>{cidade}</li>
                                ))}
                            </ul>
                        </Form.Group>

                        <Button
                            variant="success"
                            size="lg"
                            className="w-100"
                            type="submit"
                        >
                            Gravar
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
            </div>
        </>
    );
}

export default Ddd;

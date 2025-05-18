import React, { useState } from "react";
import { Card, Form, Button } from "react-bootstrap";

const Cambio = () => {
  const [inputValue, setInputValue] = useState("");
  const [inputDate, setInputDate] = useState("");
  const [result, setResult] = useState("");
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    const searchCurrency = inputValue.trim().toUpperCase();
    const searchDate = inputDate.trim();

    try {
      const response = await fetch(
        `https://brasilapi.com.br/api/cambio/v1/cotacao/${searchCurrency}/${searchDate}`
      );

      if (!response.ok) {
        throw new Error(`Erro ${response.status}: ${response.statusText}`);
      }

      const data = await response.json();
      const cotacoesFormatadas = data.cotacoes.map(
        (cotacao) => `
Tipo: ${cotacao.tipo_boletim}
Compra: ${cotacao.cotacao_compra}
Venda: ${cotacao.cotacao_venda}
Hora da Cotação: ${cotacao.data_hora_cotacao.split(" ")[1]}`
      ).join("\n\n");

      setResult(`Cotação de ${data.moeda} em ${data.data}:\n${cotacoesFormatadas}`);
      setError(null); // Limpa erro anterior, se houver
    } catch (error) {
      setResult(""); // Limpa resultado anterior, se houver
      setError(`Erro ao buscar cotação: ${error.message}`);
    }
  };

  return (
        <>
        <div className="d-flex justify-content-center align-items-center">
      <Card className="mt-5" style={{ width: 400 }}>
        <Card.Body>
          <Card.Title>Busca de Câmbio</Card.Title>
          <Form>
            <Form.Group>
              <Form.Label>Digite o código da moeda:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Exemplo: USD"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Digite a data (YYYY-MM-DD):</Form.Label>
              <Form.Control
                type="text"
                placeholder="Exemplo: 2025-04-16"
                value={inputDate}
                onChange={(e) => setInputDate(e.target.value)}
              />
            </Form.Group>
            <Button className="mt-3 btn btn-lg" onClick={handleSearch}>
              Buscar Cotação
            </Button>
          </Form>
          {error && <p style={{ color: "red" }} className="mt-3">{error}</p>}
          {result && <pre className="mt-3">{result}</pre>}
        </Card.Body>
      </Card>
    </div>
    </>
  );
};

export default Cambio;

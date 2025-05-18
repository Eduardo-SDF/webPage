import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="not-found-container d-flex flex-column justify-content-center align-items-center min-vh-100">
      <h1>404 - Página não encontrada</h1>
      <p>Oops! A página que você está procurando não existe.</p>
      <Link to="/" className="back-home" href="/">
        Voltar para a página inicial
      </Link>
    </div>
  );
}

export default NotFound;
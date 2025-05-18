import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Login from './Components/Login/Login';
import Email from './Components/Email/Email';
import Ddd from './Components/Ddd/Ddd';
import Cambio from './Components/Cambio/Cambio';
import NotFound from './NotFound';
import reactLogo from './assets/react.svg';

function App() {
  return (
    <Router>
      <div style={{ backgroundColor: '#cacaca', minHeight: '100vh' }}>
        {/* Navbar */}
        <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#f1ebeb' }}>
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <img src={reactLogo} alt="React Logo" width="30" height="30" className="d-inline-block align-text-top" />
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <a className="nav-link active" aria-current="page" href="/">Login</a>
                <a className="nav-link" href="/email">Email</a>
                <a className="nav-link" href="/Ddd">Ddd</a>
                <a className="nav-link" href="/Cambio">Cambio</a>
              </div>
            </div>
          </div>
        </nav>

        {/* Rotas do app */}
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Ddd" element={<Ddd />} />
          <Route path="/Cambio" element={<Cambio />} />
          <Route path="/email" element={<Email />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        {/* Rodapé */}
        <footer className="fixed-bottom d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
          <div className="col-md-4 d-flex align-items-center">
            <span className="mb-3 mb-md-0 text-body-secondary">© 2025 Duda&Dudu.</span>
          </div>
          <ul className="nav col-md-4 justify-content-end list-unstyled d-flex"> </ul>
        </footer>
      </div>
    </Router>
  );
}

export default App;

// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from 'react-router-dom';
import './App.css';

function Form() {
  const [formData, setFormData] = useState({
    name: '',
    whatsapp: '',
    message: '',
    pesoAtual: '',
    metaPeso: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/submit-form', formData);
      console.log('Response from API:', response.data);
      alert('Form submitted successfully!');
      navigate('/payment'); // Redirecionar para a página de pagamento
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Error submitting form');
    }
  };

  return (
    <div className="App">
      <h1>Desafio 15</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="whatsapp">WhatsApp:</label>
          <input
            type="text"
            id="whatsapp"
            name="whatsapp"
            value={formData.whatsapp}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="pesoAtual">Peso Atual:</label>
          <input
            type="number"
            id="pesoAtual"
            name="pesoAtual"
            value={formData.pesoAtual}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="metaPeso">Meta de Peso:</label>
          <input
            type="number"
            id="metaPeso"
            name="metaPeso"
            value={formData.metaPeso}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="message">Mensagem:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

function Payment() {
  const navigate = useNavigate();

  const handlePaymentSuccess = () => {
    navigate('/videos'); // Redirecionar para a página com os vídeos do desafio
  };

  return (
    <div className="App">
      <h1>Página de Pagamento</h1>
      {/* Implementar a lógica de pagamento aqui */}
      <button onClick={handlePaymentSuccess}>Simular Pagamento</button>
    </div>
  );
}

function Videos() {
  return (
    <div className="App">
      <h1>Vídeos do Desafio</h1>
      {<iframe width="560" height="315" src="https://www.youtube.com/embed/BRp8y3EF9yM?si=-gqAhwttoYNrsaJg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>}
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/videos" element={<Videos />} />
      </Routes>
    </Router>
  );
}

export default App;

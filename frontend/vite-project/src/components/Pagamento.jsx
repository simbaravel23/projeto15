// src/components/Payment.jsx
import React from 'react';

const Pagamento = () => {
  const handlePaymentRedirect = () => {
    // URL do site de pagamento
    const paymentUrl = "https://www.mercadopago.com.br/checkout/v1/payment/redirect/?source=link&preference-id=32712465-1982f3f2-25d7-4678-a903-ad80c3d66395&router-request-id=26792edd-1163-4b13-aa0d-c7bc30bb260a";
    window.location.href = paymentUrl;
  };

  
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      
      <button 
        onClick={handlePaymentRedirect} 
        style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}
      >
        Pagar Agora
      </button>

      

    </div>
  );
};

export default Pagamento;

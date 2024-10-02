import React, { useState } from 'react';
import Resultado from './Resultado'; 

function Formulario() {
  const [numero, setNumero] = useState('');

  return (
    <div>
      <input 
        type="number" 
        placeholder="Ingresa un número" 
        value={numero} 
        onChange={(e) => setNumero(e.target.value)} 
      />
      <Resultado numero={numero} />
    </div>
  );
}

export default Formulario;
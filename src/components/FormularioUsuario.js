import React, { useState } from 'react';

function FormularioUsuario() {

  const [nombre, setNombre] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Nombre ingresado: ${nombre}`);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Ingresa tu nombre" 
          value={nombre} 
          onChange={(e) => setNombre(e.target.value)} 
        />
        <button type="submit">Mostrar Nombre</button>
      </form>
      {nombre && <p>Nombre ingresado: {nombre}</p>}
    </div>
  );
}

export default FormularioUsuario;

import React from 'react';
import ButtonClick from './components/ButtonClick';
import FormularioUsuario from './components/FormularioUsuario';
import Formulario from './components/Formulario';

function App() {
  return (
    <div>
      <h1>Ejercicio 1: Manejo de eventos</h1>
      <ButtonClick />
      
      <h1>Ejercicio 2: Formulario de usuario</h1>
      <FormularioUsuario />
      
      <h1>Ejercicio 3: Lifting State Up</h1>
      <Formulario />
    </div>
  );
}

export default App;

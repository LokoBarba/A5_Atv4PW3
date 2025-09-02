import { useState } from 'react';
import Form from './Form';

function Evento() {
  const [mostrarForm, setMostrarForm] = useState(false);//criando evento

  function ativarFormulario() {//ativando a chamada do evento
    setMostrarForm(true);
  }

  return (
    <>
      {!mostrarForm ? (//este comando com ! e ? me torna como se fosse um true ou false, ao invés de fazer um if else
        <>
          <p>Clique para disparar um Evento:</p>
          <button onClick={ativarFormulario}>Aqui Bananinha!!</button>
        </>
      ) : (
        <Form />
      )}
    </>
  );
}

export default Evento;

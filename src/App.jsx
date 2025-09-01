import './App.css';
import Evento from './components/Evento';
import Form from './components/Form';

function App() {

  return (
    <div className='App'>
    
      <h1>Tela de Login</h1>
      <Evento numero= "1"/>
      <Form/>
      <Evento numero= "2"/>
      <Form/>
      <Evento numero= "3"/>
      <Form/>

    </div>
  )
}

export default App;

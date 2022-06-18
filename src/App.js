import './App.css';
import freecodecampLogo from './image/logo-freecodecamp.png';
import Boton from './components/Boton';
import Contador from './components/Contador';
import { useState } from 'react';

function App() {

  const [numClicks, setNumClicks] = useState(0);

  const manejarClick = () => {
    setNumClicks(numClicks+1);
  }

  const reiniciarContador = () => {
    setNumClicks(0);
  }

  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor'>
        <img
          className='freecodecamp-logo'
          src= {freecodecampLogo}
          alt='Logo de freecodecamp'
        />
        <Contador
          numClicks= {numClicks}
        />
        <div className='contenedor-contador'>
          <Boton
            texto = 'Click'
            esBotonDeClick={true}
            manejarClick={manejarClick}
          />
          <Boton
            texto = 'Reiniciar'
            esBotonDeClick={false}
            manejarClick={reiniciarContador}
          />
        </div>
      </div>
    </div>
  );
}

export default App;

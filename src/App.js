import React,{useState, useEffect} from 'react';
import styled from '@emotion/styled';
import Frase from './components/Frase';
import logoBB from './images/logoBB.png';

const Boton = styled.button`
  background: #E3BC37;
  font-family: 'Itim', cursive;
  color: black;
  margin: 1.5rem 0rem 0.5rem 1rem;
  padding: 0.5rem;
  font-size: 1.5rem;
  border: 2px solid black;
  border-radius: 0.5rem;
  
  :hover {
    cursor: pointer;
    color: white;
    background: #EFCD32;
  }
  
`;
function App() {

  const [frase, guardarFrase] = useState({});

  const consultarAPI = async () =>{
    const api = await fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes');
    const frase = await api.json();
    guardarFrase(frase[0]);  
  }

  useEffect( () => {
    consultarAPI();
  },[])
  return (
    <div className="container">
      <div className="row">
          <img src={logoBB} className="col-12 col-sm-10 col-md-10 col-lg-6"/>
      </div>
      <div className="container">
      <Frase
        frase = {frase}
      />
      </div>
        <Boton
          onClick={consultarAPI}
        >Obtener Frase</Boton>
    </div>
    
  );
}

export default App;

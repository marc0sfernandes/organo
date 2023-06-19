import { useState } from 'react';
import Banner from './componentes/Banner/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';

function App() {

  const [colaboradores, setColaboradores]= useState([])

  const novoPlayerAdicionado = (colaborador)=>{
    console.log(colaborador)
    setColaboradores([...colaboradores,colaborador])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario aoPlayerCadastrado={colaborador =>novoPlayerAdicionado(colaborador)}/>
      <Time nome="Top"/>
      <Time nome="Mid"/>
      <Time nome="Jungle"/>
      <Time nome="Adc"/>
      <Time nome="Sup"/>
    </div>
  );
}

export default App;

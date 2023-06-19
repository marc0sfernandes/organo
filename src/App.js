import { useState } from 'react';
import Banner from './componentes/Banner/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';

function App() {

  const times = [
    {
    nome:'Top',
    corPrimaria:'#57c278',
    corSecundaria:'#D9f7e9'
  },
  {
    nome:'Mid',
    corPrimaria:'#82cffa',
    corSecundaria:'#e8f8ff'
  },
  {
    nome:'Jungle',
    corPrimaria:'#a6d157',
    corSecundaria:'#f0f8e2'
  },
  {
    nome:'Adc',
    corPrimaria:'#e06b69',
    corSecundaria:'#fde7e8'
  },
  {
    nome:'Suporte',
    corPrimaria:'#db6ebf',
    corSecundaria:'#fae9f5'
  }
  ]

  const [colaboradores, setColaboradores]= useState([])

  const novoPlayerAdicionado = (colaborador)=>{
    console.log(colaborador)
    setColaboradores([...colaboradores,colaborador])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario times={times.map(time => time.nome)}aoPlayerCadastrado={colaborador =>novoPlayerAdicionado(colaborador)}/>
      
      {times.map(time =><Time nome={time.nome} key={time.nome} corPrimaria={time.corPrimaria} corSecundaria={time.corSecundaria}/> )}
      
    </div>
  );
}

export default App;

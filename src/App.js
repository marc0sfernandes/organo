import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Rodape from './componentes/Rodape';
import Time from './componentes/Time';

function App() {

  const [times, setTimes] = useState([
    {
      id: uuidv4(),
      nome: 'Top',
      cor: '#57C278'
    },
    {
      id: uuidv4(),
      nome: 'Mid',
      cor: '#82CFFA'
    },
    {
      id: uuidv4(),
      nome: 'Jungle',
      cor: '#A6D157'
    },
    {
      id: uuidv4(),
      nome: 'Adc',
      cor: '#E06B69'
    },
    {
      id: uuidv4(),
      nome: 'Support',
      cor: '#DB6EBF'
    }

  ])

  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador])
    console.log(colaboradores)
  }

  function deletarColaborador(id){
    setColaboradores(colaboradores.filter(colaborador => colaborador.id !== id ))
  } 

  function mudarCorDoTime(cor, id){
    setTimes(times.map(time =>{
      if(time.id === id){
        time.cor = cor;
      }
      return time
    }))
  }

  function resolverFavorito(id){
    setColaboradores(colaboradores.map(colaborador=> {
      if(colaborador.id === id) colaborador.favorito = !colaborador.favorito
      return colaborador
    }))
  }

  return (
    <div className="App">
      <Banner />
      <Formulario 
      times={times.map(time => time.nome)} aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}/>

      {times.map(time => <Time
        aoFavoritar={resolverFavorito}
        mudarCor={mudarCorDoTime}
        time={time} 
        colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
        aoDeletar={deletarColaborador}
        key={time.nome}
      />)}   
      <Rodape/>
    </div>
  );
}

export default App;

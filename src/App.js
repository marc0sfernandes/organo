import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Rodape from './componentes/Rodape';
import Time from './componentes/Time';

function App() {

  const [times, setTimes] = useState([
    {
      nome: 'Top',
      cor: '#57C278'
    },
    {
      nome: 'Mid',
      cor: '#82CFFA'
    },
    {
      nome: 'Jungle',
      cor: '#A6D157'
    },
    {
      nome: 'Adc',
      cor: '#E06B69'
    },
    {
      nome: 'Support',
      cor: '#DB6EBF'
    }

  ])

  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador])
  }

  function deletarColaborador(){
    console.log('deletando colaborador')
  } 

  function mudarCorDoTime(cor, nome){
    setTimes(times.map(time =>{
      if(time.nome === nome){
        time.cor = cor;
      }
      return time
    }))
  }

  return (
    <div className="App">
      <Banner />
      <Formulario times={times.map(time => time.nome)} aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}/>

      {times.map(time => <Time 
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

import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Rodape from './componentes/Rodape';
import Time from './componentes/Time';

function App() {

  const [times, setTimes] = useState([
    {
      nome: 'Top',
      cor: '#D9F7E9'
    },
    {
      nome: 'Mid',
      cor: '#E8F8FF'
    },
    {
      nome: 'Jungle',
      cor: '#F0F8E2'
    },
    {
      nome: 'Adc',
      cor: '#FDE7E8'
    },
    {
      nome: 'Support',
      cor: '#FAE9F5'
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
      />)}   
      <Rodape/>
    </div>
  );
}

export default App;

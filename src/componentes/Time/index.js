import hexToRgba from 'hex-to-rgba';
import Colaborador from '../Colaborador';
import './Time.css';

const Time = (props) => {
    const css = { backgroundColor: hexToRgba(props.time.cor, '0.4'),backgroundImage: 'url(/imagens/fundo.png)'}

    return (
        (props.colaboradores.length > 0) ? <section className='time' style={css}>
            <input onChange={evento => props.mudarCor(evento.target.value, props.time.id)} value={props.time.cor}type='color' className='input-cor'/>
            <h3 style={{ borderColor: props.time.cor }}>{props.time.nome}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map( (colaborador,indice )=> {
                    return <Colaborador corDeFundo={props.time.cor} key={indice} nome={colaborador.nome} cargo={colaborador.time} imagem={colaborador.imagem} aoDeletar ={props.aoDeletar}/>
                } )}
            </div>
        </section> 
        : ''
    )
}

export default Time
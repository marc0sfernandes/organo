import Botao from '../Botao'
import CampoTexto from '../CampoTexto/CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'

const Formulario = () => {
    const times = [
        'Top',
        'Mid',
        'Jungle',
        'Adc',
        'Suporte'
    ]

    const isRequired = true;

    const aoSalvar= (evento)=>{
        evento.preventDefault()
        console.log('formulario enviado')
    }
    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do Player.</h2>
                <CampoTexto obrigatorio={isRequired} label="Nome" placeholder="Digite o seu nome" />
                <ListaSuspensa obrigatorio={isRequired} label="Função" itens= {times}/>
                <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem" />
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario
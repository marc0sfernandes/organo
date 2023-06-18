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
    return (
        <section className='formulario'>
            <form>
                <h2>Preencha os dados para criar o card do Player.</h2>
                <CampoTexto label="Nome" placeholder="Digite o seu nome" />
                <ListaSuspensa label="Função" itens= {times}/>
                <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem" />
            </form>
        </section>
    )
}

export default Formulario
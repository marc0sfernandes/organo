import { useState } from 'react'
import Botao from '../Botao'
import CampoTexto from '../CampoTexto/CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'

const Formulario = (props) => {
    const times = [
        'Top',
        'Mid',
        'Jungle',
        'Adc',
        'Suporte'
    ]
    const [nome, setNome]= useState('')
    const [imagem, setImagem]= useState('')
    const [time, setTime]= useState('')

    const isRequired = true;

    const aoSalvar= (evento)=>{
        evento.preventDefault()
        props.aoPlayerCadastrado(
            [
            nome,time,imagem
        ])
    }
    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do Player.</h2>
                <CampoTexto obrigatorio={isRequired} label="Nome" placeholder="Digite o seu nome" valor={nome} aoAlterado={valor => setNome(valor)} />
                <ListaSuspensa obrigatorio={isRequired} label="Função" itens= {times} valor={time} aoAlterado={valor => setTime(valor)}/>
                <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem" valor={imagem} aoAlterado={valor=>setImagem(valor)}/>
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario
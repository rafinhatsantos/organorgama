import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'


const Formulario = () => {

    const times = [
            'Desenvolvimento',
            'Suporte'           
            ]

            const aoSalvar = (evento) => {
                evento.preventDefault ()
            }
    return (       
        <section className="formulario">
                <form onSubmit={aoSalvar}>
                    <h2>Preencha os dados pra criar o card do colaborador</h2>
                    <CampoTexto obrigatorio= {true} label ="Nome"  placeholder = "Digite seu nome"/>
                    <CampoTexto obrigatorio= {true} label ="Cargo" placeholder = "Digite seu cargo"/>
                    <CampoTexto obrigatorio= {true} label ="Imagem"placeholder = "Informe o endereço da imagem"/>
                    <ListaSuspensa label ="Equipe" itens={times}/>
                    <Botao texto= "Criar Card"/>
                </form>
        </section>       
    )
}


export default Formulario 
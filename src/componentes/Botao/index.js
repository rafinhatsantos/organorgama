import './Botao.css'

const Botao = (props) => {
    return (<button className='botao'>
        {props.children}
    </button>)
}
console.log(Botao)
export default Botao
import './ListaSuspensa.css';

const ListaSuspensa = (props) => {
    // Verifica se props.itens existe e é um array
    const itens = props.itens || [];

    return (
        <div className='lista-suspensa'>
            <label>{props.label}</label>
            <select
                onChange={evento => props.aoAlterado(evento.target.value)}
                required={props.required}
                value={props.value}
            >
                {itens.map(item => (
                    <option key={item}>{item}</option>
                ))}
            </select>
        </div>
    );
};

export default ListaSuspensa;
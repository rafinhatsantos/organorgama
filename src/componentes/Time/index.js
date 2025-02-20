import Colaborador from '../Colaborador';
import './Time.css';

const Time = ({ colaboradoreses = [], corFundo, corPrincipal, nome }) => {
    return (
        <section className='Time' style={{ backgroundColor: corFundo }}>
            <h3 style={{ borderColor: corPrincipal }}>{nome}</h3>
            {colaboradoreses.map((colaborador, index) => (
                <Colaborador key={index} />
            ))}
        </section>
    );
};

export default Time;
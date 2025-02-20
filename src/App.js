
import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';
import Rodape from './Rodape';



//Como é um projeto para estudo meu rodape não possui nenhum link
//Imagens de redes sociais meramente ilustrativas

function App() {

  const times =  [
      {
    nome: 'Desenvolvimento',
    corPrimaria: '#e8f8ff', //e8f8ff
    corSecundaria:'#82cffa', //82cffa

      },
      {
        nome: 'Suporte',
        corPrimaria: '#ffeedf', //ffeedf
        corSecundaria:'#ff8a29',    //ff8a29
      }
      
  ]



  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador) => {
    console.log(colaborador)
    setColaboradores([...colaboradores, colaborador])
  } 

  return (
    <div className="App">
      <Banner/>
      <Formulario times={times.map(time => time.nome)} aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}/>

      {times.map 
      (time => <Time 
          key={time.nome} 
                    nome={time.nome}
                    corFundo={time.corPrimaria} 
                    corPrincipal={time.corSecundaria}
                    colaboradores= {colaboradores}
                    
                    
                    
                    
                    />)}

      <Rodape/> 
      
    </div>
  );
}

export default App;

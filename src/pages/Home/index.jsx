import pokebola from '../../assets/pokebola.png';
import './styles.css'
import Tela from '../../components/Tela';

export function Home() {

  return (
    <>
        <Tela>
            <div className="conteudo">
                    <h2>Bem vindo! <br/> Apresento sua Pokédex</h2>
                    <div className="pokebola">
                        <img src={pokebola} alt="pokebola"/>
                    </div>
                    <div className="all"> 
                        <button className="btn-all">Todos os pokémons</button>
                    </div>
            </div>
        </Tela>
    </>
    
    )
}

export default Home;

import './styles.css'
import Loading from '../../components/Loading';
import BtnAllPokemons from '../../components/BtnAllPokemons';

export function Home() {

    return (
        <div className="conteudo">
            <h2>Bem vindo! <br/> Apresento sua Pokédex</h2>
            <Loading/>
            <div className="all"> 
                <BtnAllPokemons/>
            </div>
        </div>
    
    )
}

export default Home;

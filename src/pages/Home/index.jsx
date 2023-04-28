import './styles.css'
import { useNavigate } from "react-router-dom";
import Loading from '../../components/Loading';

export function Home() {

    const navegate = useNavigate();

    function goToPokemons() {
        navegate("/todos-pokemons")
    }

    return (
        <div className="conteudo">
            <h2>Bem vindo! <br/> Apresento sua Pokédex</h2>
            <Loading/>
            <div className="all"> 
                <button className="btn-all" onClick={goToPokemons}>Todos os pokémons</button>
            </div>
        </div>
    
    )
}

export default Home;

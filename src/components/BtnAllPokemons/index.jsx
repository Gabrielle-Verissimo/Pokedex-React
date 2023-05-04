import { useNavigate } from "react-router-dom";
import './styles.css';

function BtnAllPokemons() {
    const navegate = useNavigate();

    function goToPokemons() {
        navegate("/todos-pokemons")
    }

    return (
        <button className="btn-all" onClick={goToPokemons}>Todos os pokémons</button>
    )
}

export default BtnAllPokemons;
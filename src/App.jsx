import retan from './assets/retan.png';
import joystick from './assets/joystick.svg';
import './App.css'
import { useMatch, useNavigate } from 'react-router-dom';
import BtnControl from './components/BtnControl';
import Router from '../Router';

export function App() {

    const isAllPokemons = useMatch("/todos-pokemons");
    const navegate = useNavigate();

    function goToInfo() {
        navegate("/info-pokemon/");
    }


    return (

        <div className="page-landing">
            <div className="top-pokedex">
                <div className="camera">
                    <div className="reflexo"></div>
                </div>
                <div className="mini-botoes">
                    <div className="botao-vermelho"></div>
                    <div className="botao-amarelo"></div>
                    <div className="botao-verde"></div>
                </div>
                <div id="pesquisa">
                    <input type="text" placeholder="Pesquisar o pokémon" name="pesquisa" id="barra-pesquisa"/>
                    <button id="btn-pesquisar" className="btn" onClick={goToInfo}>Pesquisar</button>
                </div>
            </div>
            <div className="interface-pokedex">
                <div className="tela">
                  <Router/>
                </div>
            </div>
            <div className="footer-pokedex">
                <div className="retan">
                    <img src={retan} alt="/retangulo"/>
                </div>
                {isAllPokemons ? <BtnControl/>: ''}
                <div className="joystick">
                    <img src={joystick} alt="joystick"/>
                </div>
            </div>
        </div>

    )
}

export default App;

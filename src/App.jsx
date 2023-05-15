import retan from './assets/retan.png';
import joystick from './assets/joystick.svg';
import './App.css'
import { useMatch, useNavigate } from 'react-router-dom';
import BtnControl from './components/BtnControl';
import Router from '../Router';
import { useState } from 'react';
import BtnAllPokemons from './components/BtnAllPokemons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faSearch } from '@fortawesome/free-solid-svg-icons';
import SideBar from './components/SideBar';

const home = <FontAwesomeIcon icon={faHome} id='icon-home'/>
const search = <FontAwesomeIcon icon={faSearch} />

export function App() {
    const [pokemonName, setPokemonName] = useState([]);
    const [checked, setChecked] = useState(false);
    const isAllPokemons = useMatch("/todos-pokemons");
    const isInfoPokemon = useMatch("/info-pokemon");
    const navegate = useNavigate();

    function open() {
        setChecked(true);
    }

    function close() {
        setChecked(false);
    }

    function goToInfo() {
        navegate("/info-pokemon", {state: {name: pokemonName}});
    }

    return (

        <div className="page-landing">
            <div className="top-pokedex">
                <div>
                    <a href="/">{home}</a>
                </div>
                <div className="camera">
                    <div className="reflexo"></div>
                </div>
                <div className="mini-botoes">
                    <div className="botao-vermelho"></div>
                    <div className="botao-amarelo"></div>
                    <div className="botao-verde"></div>
                </div>
                <div id="pesquisa">
                    <input type="text" placeholder="Pesquisar o pokémon" name="pesquisa" 
                        id="barra-pesquisa" onChange={({target}) => setPokemonName(target.value)}
                    />
                    <button type="submit" id="btn-pesquisar" className="btn" onClick={goToInfo}>{search}</button>
                    {isAllPokemons ? (<div className='btn' onClick={open}>Filtrar</div>) : ''}
                    {checked ? <SideBar close={close}/> : ''}
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
                {isAllPokemons ? <BtnControl/> : ''}
                {isInfoPokemon ? <BtnAllPokemons/> : ''}
                <div className="joystick">
                    <img src={joystick} alt="joystick"/>
                </div>
            </div>
        </div>

    )
}

export default App;

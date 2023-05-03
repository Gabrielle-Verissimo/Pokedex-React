import { useLocation } from "react-router-dom";
import Loading from "../../components/Loading";
import { useFetch } from "../../hooks/useFetch";
import './styles.css';
import balao from "../../assets/balao-fala.png"


function Info() {
    const location = useLocation();
    const [data, isLoading] = useFetch(location.state.name);
    
    return (
        <>
            {
                data ? 
                (isLoading ? <Loading/> : 
                <div id="content-pokemon">
                    <h1>{data.name}</h1>
                    <div id="info">
                        <img src={data.sprites.other.dream_world.front_default} alt="imagem do pokemon" />
                        <ul id="type-ability">
                            {data.abilities.map(item => {
                                return (
                                    <li key={item.ability.name}>{item.ability.name}</li>
                                )
                            })}
                        </ul>
                    </div>

                    <div id="content-balao">
                        <p>
                            O acesso à fantástica habilidade Speed ​​Boost dá ao Combusken um nicho 
                            sólido em PU, permitindo-lhe limpar de forma confiável as equipes adversárias 
                            no final do jogo e, em combinação com Swords Dance, romper Pokémon como Carbink 
                            que servem como checks comuns para outros Fire-types ofensivos como Simisear 
                            e Turtonator.
                        </p>
                    </div>
                </div>) : <h1>Insiria um nome de pokemon na barra de pesquisa acima</h1>
            }

        </>
    )

}

export default Info;
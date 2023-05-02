import { useLocation } from "react-router-dom";
import Loading from "../../components/Loading";
import { useFetch } from "../../hooks/useFetch";
import './styles.css';


function Info() {
    const location = useLocation();
    const [data, isLoading] = useFetch(location.state.name);
    

    if (location.state) {
        console.log(location.state.name);
      }

    return (
        <>
            {
                data ? 
                (isLoading ? <Loading/> : 
                <div id="info-pokemon">
                    <h1>{data.name}</h1>
                    <img src={data.sprites.other.dream_world.front_default} alt="imagem do pokemon" />
                    <ul>
                        {data.abilities.map(item => {
                            return (
                                <li key={item.ability.name}>{item.ability.name}</li>
                            )
                        })}
                    </ul>
                </div>) : <h1>Insiria um nome de pokemon na barra de pesquisa acima</h1>
            }

        </>
    )

}

export default Info;
import { useParams } from "react-router-dom";
import Loading from "../../components/Loading";
import { useFetch } from "../../hooks/useFetch";
import './styles.css';

function Info() {
    const [data, isLoading] = useFetch();
    // const { id } = useParams();

    // console.log(id);

    return (
        <>
            {
                isLoading ? <Loading/> : 
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
                </div> 
            }

        </>
    )

}

export default Info;
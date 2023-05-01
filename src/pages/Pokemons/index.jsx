import './styles.css';
import Card from "../../components/Card";
import { useFetchAll } from '../../hooks/useFetch';
import Loading from '../../components/Loading';

function Pokemons() {
    const [data, isLoading] = useFetchAll();

    return (
        <div className="div-all">
            {isLoading ? <Loading/> : 
                data.map(item => {
                    return (
                        <Card 
                            img={item.sprites.front_default}
                            id={item.id}
                            name={item.name}
                            type={item.types.map(key => key.type.name)}
                        />
                    )
                })

            }
            
        </div>

    )

} 

export default Pokemons;
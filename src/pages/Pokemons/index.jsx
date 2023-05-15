import './styles.css';
import Card from "../../components/Card";
import { useFetchAll, useFilter } from '../../hooks/useFetch';
import Loading from '../../components/Loading';
import { useState } from 'react';
import Filter from '../../components/Filter';
import { useSelector } from 'react-redux';
import { selectIdType } from '../../redux/idTypeSlice';

function Pokemons() {
    const [data, isLoading] = useFetchAll();
    const {id} = useSelector(selectIdType);
    
    return (
        <div className="div-all">
            {id.length !=0 ? <Filter/> :
             (
                isLoading ? <Loading/> : 
                data.map(item => {
                    return (
                        <Card
                            key={item.id}
                            img={item.sprites.front_default}
                            id={item.id}
                            name={item.name}
                            type={item.types.map(key => key.type.name)}
                        />
                    )
                })
             )
            }
        </div>

    )

} 

export default Pokemons;
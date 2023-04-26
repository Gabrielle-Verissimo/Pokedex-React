//import { useState, useEffect } from 'react';
import './styles.css';
import Card from "../../components/Card";
import { useFetch } from '../../hooks/useFetch';
import Tela from '../../components/Tela';

function Pokemons() {
    const [data, isLoading] = useFetch();
    console.log(data, isLoading);
    return (
        <Tela>
            <div className="div-all">
                {data.map(item => {
                    console.log(item)
                    // <Card 
                    //     img={item.sprites.front_default}
                    //     id={item.id}
                    //     name={item.name}
                    //     type={item.types}
                    // />
                })}
                
            </div>
            <button id="back-page" className="btn-pass">Back</button>
            <button id="skip-page" className="btn-pass">Skip</button>
        </Tela>

    )

} 

export default Pokemons;
//import { useState, useEffect } from 'react';
import './styles.css';
import Card from "../../components/Card";
import { useFetch } from '../../hooks/useFetch';
import Tela from '../../components/Tela';
const api = 'https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0';

function Pokemons() {
    const [data, isLoading] = useFetch();
   
    return (
        <Tela>
            {/* {console.log('teste')} */}
            <div className="div-all">
                {data.map(item => {
                    // {console.log(item.types,map(type => )}
                    return (
                        <Card 
                            img={item.sprites.front_default}
                            id={item.id}
                            name={item.name}
                            type={item.types.map(key => key.type.name)}
                        />
                    )
   
                })}
                
            </div>
            <button id="back-page" className="btn-pass">Back</button>
            <button id="skip-page" className="btn-pass">Skip</button>
        </Tela>

    )

} 

export default Pokemons;
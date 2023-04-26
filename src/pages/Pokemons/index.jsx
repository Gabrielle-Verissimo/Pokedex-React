//import { useState, useEffect } from 'react';
import './styles.css';
import Card from "../../components/Card";
import { useFetch } from '../../hooks/useFetch';
import Tela from '../../components/Tela';
import { useEffect, useState } from 'react';
import { objTypes } from '../../config/types';
const api = 'https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0';
function Pokemons() {
    //const [data, isLoading] = useFetch();
    const [data, setData] = useState([]);
    const [types, setTypes] = useState([]);
    const urls = [];
    const arrTypes = [];

    useEffect(() => {
        fetch(api)
        .then(res => res.json())
        .then(json => getUrl(json))
        .catch(e => console.log(e));
    }, [])

    function getUrl(json) {

        json.results.map(item => urls.push(item.url));
        const arr = [];
        for(let x = 0; x < 10; x++) {
            fetch(urls[x])
                .then(response => response.json())
                .then(json => {
                    arr.push(json);
                    json.types.map(item => {
                        for(let key of objTypes) {
                            if(item.type.name == key.type) {
                                arrTypes.push(key.typePtbr)
                            }
                        } 
                    });
                    setData(arr);
                    setTypes(arrTypes);
                })
                .catch(e => console.log(e));
        }
    }

    //data.map(item => console.log(item))
    // for(let i = 0; i < 10; i++) {
    //     console.log(data[i]);
    // }
    return (
        <Tela>
            <div className="div-all">
                {data.map(item => {
                    return (
                        <Card 
                            key={item.id}
                            img={item.sprites.front_default}
                            id={item.id}
                            name={item.name}
                            // type={item.types[0]}
                        >
                        </Card>

                    )
   
                })}
                
            </div>
            <button id="back-page" className="btn-pass">Back</button>
            <button id="skip-page" className="btn-pass">Skip</button>
        </Tela>

    )

} 

export default Pokemons;
import axios from "axios";
import { useState, useEffect } from "react";
const api = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0'
});

const type = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/type/'
})

let init = 0;
let final = 10;
export let setShowMore;

export function useFilter(id) {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const urls = [];
    const promises = [];

    function clear(value) {
        if(!data.find(item => item.id == value.id)) {
            return value;
        }
    }

    useEffect(() => {
        if(id.length != 0) {
            type.get(`${id}`)
            .then(res => {
                Object.values(res.data.pokemon).forEach(value => {
                    urls.push(value.pokemon.url);
                });
                for(let i = 0; i < urls.length; i++) {
                    promises.push(consumeApi(urls[i]));
                }
                Promise.all(promises)
                    .then(info => {
                        const clean = info.filter(clear);
                        setData(pokemons => [...pokemons, ...clean])
                    })
            })
            .catch(e => console.log(e))
            .finally(setIsLoading(false))

        }

    }, [id])

    return [data, isLoading];
}

export function useFetch(name) {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        api.get()
        .then(res => {
            res.data.results.map(item => {
                if(item.name == name.toLowerCase()) {
                    axios.get(item.url)
                        .then(res => setData(res.data))
                        .catch(e => console.log(e))
                        .finally(() => setIsLoading(false))
                }
            })
        })
        .catch(e => console.log(e));

    }, [name]);

    return [data, isLoading];
}


export function useFetchAll() {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [start, setStart] = useState(0);
    const [finesh, setFinesh] = useState(10);
    const promises = [];
    const urls = [];
    

    useEffect(() => {

        api.get()
            .then(response => {
                response.data.results.map((item) => urls.push(item.url)); 
                for(let i = start; i < finesh; i++) {
                    promises.push(consumeApi(urls[i]));
                }
                Promise.all(promises)
                    .then(info => {
                        setData(pokemons => [...pokemons, ...info]);
                    })
            })
            .catch(e => console.log(e))
            .finally(() => setIsLoading(false))
        
    }, [start, finesh]);

    function showMore() {

        const myInterval = setInterval(() => {
            init = final;
            final += 10;
            setStart(init);
            setFinesh(final);

            if(final == 400) {
                clearInterval(myInterval);
            }

        }, 1000);
    }

    setShowMore = showMore;

    return [data, isLoading]; 
}

function consumeApi(url) {
    return fetch(url)
        .then(res => res.json());
}
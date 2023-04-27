import axios from "axios";
import { useState, useEffect } from "react";
const api = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0'
})

export function useFetch() {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const promises = [];
    useEffect(() => {
        api.get()
            .then(response => {
                const urls = response.data.results.map((item) => item.url);  
                for(let i = 0; i < 10; i++) {
                    promises.push(consumeApi(urls[i]));
                }
                Promise.all(promises)
                    .then(info => setData(info))
            })
            .catch(e => console.log(e))
            .finally(() => setIsLoading(false))
    }, []);

    return [data, isLoading]; 
}

function consumeApi(url) {
    return fetch(url)
        .then(res => res.json());
}
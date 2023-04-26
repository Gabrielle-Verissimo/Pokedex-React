import axios from "axios";
import { useState, useEffect } from "react";

const api = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0'
})

export function useFetch() {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        api.get()
            .then(response => {
                const urls = response.data.results.map((item) => item.url);        
                const url = fetch(urls); 
                setData(url); 
            })
            .catch(e => console.log(e))
            .finally(() => setIsLoading(false))
    }, []);

    return [data, isLoading]; 
}

function fetch(urls) {
    let url = [];
    for(let i = 0; i < 10; i++) {
        axios.get(urls[i])
            .then(response => url.push(response.data))
            .catch(e => console.log(e))
    }
    // urls.map(item => {

    // })

    return url;
}
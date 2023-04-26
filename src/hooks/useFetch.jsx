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
                const info = [];
                // for(let i = 0; i < 10; i++) {
                //     axios.get(urls[i])
                //         .then(response => {
                //             info.push(response.data)
                //         })
                //         .catch(e => console.log(e))
                // } 
                setData(info); 
            })
            .catch(e => console.log(e))
            .finally(() => setIsLoading(false))
    }, []);

    return [data, isLoading]; 
}

function fetch(urls) {
    const url = [];
    for(let i = 0; i < 10; i++) {
        url.push(urls[i]);
    } 

    console.log(url);

}
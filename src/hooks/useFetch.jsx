import axios from "axios";
import { useState, useEffect } from "react";
const api = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0'
});

let init = 0;
let final = 10;
export let setSkip;
export let setBack;

export function useFetch() {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [start, setStart] = useState(0);
    const [finesh, setFinesh] = useState(10);
    const promises = [];

    useEffect(() => {
        api.get()
            .then(response => {
                const urls = response.data.results.map((item) => item.url); 
                console.log("chamou");
                for(let i = start; i < finesh; i++) {
                    promises.push(consumeApi(urls[i]));
                }
                Promise.all(promises)
                    .then(info => setData(info))
            })
            .catch(e => console.log(e))
            .finally(() => setIsLoading(false))
        
    }, [start, finesh]);

    function skip() {
        init = final;
        final += 10;
        setStart(init);
        setFinesh(final);
    }

    function back() {
        final = init;
        init -= final;
    }

    setSkip = skip;
    setBack = back;

    return [data, isLoading]; 
}

function consumeApi(url) {
    return fetch(url)
        .then(res => res.json());
}


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

function fetchAll() {
    const [data, setData] = useState([])
    api.get()
        .then(res => setData(res.data.results))
        .catch(e => console.log(e))
    return [data];
}

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

                        {/* <p>
                            O acesso à fantástica habilidade Speed ​​Boost dá ao Combusken um nicho 
                            sólido em PU, permitindo-lhe limpar de forma confiável as equipes adversárias 
                            no final do jogo e, em combinação com Swords Dance, romper Pokémon como Carbink 
                            que servem como checks comuns para outros Fire-types ofensivos como Simisear 
                            e Turtonator. Seus aumentos de Speed ​​também permitem que ele puna equipes 
                            dependentes de revenge killers tradicionais, como Choice Scarf Primeape e 
                            Alolan Sandslash, para lidar com outros Fire-types, como Simisear, por sacrificar 
                            Pokémon para trazer seu revenge killer com segurança. 
                            Combusken pode executar conjuntos físicos e especiais que podem romper as 
                            verificações uns dos outros, como Gurdurr para o primeiro e Lanturn para o último.
                             Uma combinação de STAB quase sem resistência também o torna um limpador de 
                             late-game confiável, desde que seu contra-ataque principal em Jellicent seja 
                             removido. No entanto, Combusken enfrenta uma competição acirrada como um tipo 
                             de fogo ofensivo de Simisear, já que a maior velocidade base e ataque especial 
                             deste último permitem que ele ameace mais imediatamente as equipes adversárias e, 
                             mais importante, seu acesso ao Grass Knot permite que ele rompa de forma 
                             confiável um dos Os contadores mais difíceis de Combusken em Jellicent. 
                             Além disso, Combusken é prejudicado por sua baixa Speed, o que o deixa 
                             ultrapassado por usuários comuns de Choice Scarf, como Primeape e Dodrio, 
                             mesmo após dois aumentos de Speed. Esse fato, juntamente com o bulk ruim de 
                             Combusken, também o força a usar Protect primeiro contra Pokémon mais rápidos 
                             que podem prejudicá-lo ou OHKO, como Alolan Sandslash e Aurorus, potencialmente 
                             oferecendo trocas gratuitas para checks como Lanturn e Eelektross. 
                             Ele também limita a capacidade de Combusken de fazer switch in em ataques 
                             resistidos ou fazer switch in agressivamente dupla, o que o deixa com 
                             oportunidades de setup limitadas em comparação com setup sweepers mais 
                             volumosos, como Gurdurr e Carracosta, que oferecem alguma utilidade 
                             defensiva e o deixam mais vulnerável a ser revenge kill de usuários 
                             prioritários. como Hitmonchan, Lycanroc e Gurdurr.
                        </p> */}
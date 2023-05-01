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
                        setData((pokemons) => [...pokemons, ...info]);
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
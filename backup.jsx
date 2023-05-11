import './styles.css';
import { useState } from 'react';
import { objTypes } from '../../config/types';
import { useNavigate } from 'react-router-dom';

function Filter() {
    const [checked, setChecked] = useState(false);
    const [showTypes, setShowTypes] = useState(false);
    const [showRegion, setShowRegion] = useState(false);
    const [selectedTypes, setSelectedTypes] = useState(false);
    const [type, setType] = useState([]);
    const navegate = useNavigate();

    function filterType(type) {
        setType(type);
        //navegate(`/todos-pokemons/${type}`, {state: {type: type}});
    }

    function open() {
        setChecked(true);
    }

    function close() {
        setChecked(false);
    }

    function chooseTypes() {
        setShowTypes(true);
        setSelectedTypes(true);
        setChecked(true);
    }

    function closeTypes() {
        setShowTypes(false);
        setSelectedTypes(false); 
    }

    function chooseRegion() {
        setShowRegion(true);
    }

    return (

        <>
            {checked ? (
                <div id='filter-open' onClick={close}>
                    <ul className="responsive-menu">
                        <li onMouseEnter={chooseTypes} className={selectedTypes ? 'selected' : ''}>Por tipo</li>
                        <li onMouseEnter={chooseRegion}>Por região</li>
                    </ul>
                </div>
            
            
            ) : 
            (
                <div className='btn' onClick={open}>
                    Filtrar
                </div>)}

            {showTypes ? (
                <div id='menu-types' onMouseOver={() => console.log('entrou')} onMouseOut={() => setShowTypes(false)}>
                    <ul className='responsive-menu'>
                        {objTypes.map(item => {
                            return (
                                <li key={item.type} onClick={() => filterType(item.type) }>{item.typePtbr}</li>
                            )
                        })}
                    </ul>
                </div>
            ) : ''}
        </>


    )
}

export default Filter;

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
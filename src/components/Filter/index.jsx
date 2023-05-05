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
    }

    function chooseRegion() {
        setShowRegion(true);
    }

    return (

        <>
            {checked ? (
                <div id='filter-open' onClick={close}>
                    <ul className="responsive-menu">
                        <li onMouseOver={chooseTypes} className={selectedTypes ? 'selected' : ''}>Por tipo</li>
                        <li onMouseOver={chooseRegion}>Por região</li>
                    </ul>
                </div>
            
            
            ) : 
            (
                <div className='btn' onClick={open}>
                    Filtrar
                </div>)}

            {showTypes ? (
                <div id='menu-types'>
                    <ul className='responsive-menu'>
                        {objTypes.map(type => {
                            return (
                                <li key={type} onClick={() => filterType(type.type) }>{type.typePtbr}</li>
                            )
                        })}
                    </ul>
                </div>
            ) : ''}
        </>


    )
}

export default Filter;
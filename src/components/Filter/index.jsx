import './styles.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SideBar from '../SideBar';

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
            <div className='btn' onClick={open}>
                Filtrar
            </div>
        {checked ? <SideBar close={close}/> : ''}
    
       </>


    )
}

export default Filter;
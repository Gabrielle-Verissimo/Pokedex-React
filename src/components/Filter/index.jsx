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


    function open() {
        setChecked(true);
    }

    function close() {
        setChecked(false);
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
import './styles.css';
import { useState } from 'react';

function Filter() {
    const [checked, setChecked] = useState(false);
    const [showTypes, setShowTypes] = useState(false);
    const [showRegion, setShowRegion] = useState(false);

    function open() {
        setChecked(true);
    }

    function close() {
        setChecked(false);
    }

    function chooseTypes() {
        setShowTypes(true);
    }

    function chooseRegion() {
        setShowRegion(true);
    }

    return (

        <>
            {checked ? (
                <div id='filter-open' onClick={close}>
                    <ul id="responsive-menu">
                        <li>
                            <a href="" onMouseOver={chooseTypes}>Por tipo</a>
                        </li>
                        <li>
                            <a href="" onMouseOver={chooseRegion}>Por região</a>
                        </li>
                    </ul>
                </div>
            
            
            ) : 
            (
                <div className='btn' onClick={open}>
                    Filtrar
                </div>)}
        </>


    )
}

export default Filter;
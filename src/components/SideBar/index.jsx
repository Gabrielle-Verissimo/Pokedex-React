import { objTypes } from '../../config/types';
import './styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { useType } from '../../hooks/useFetch';
import { useNavigate } from 'react-router-dom';

const close = <FontAwesomeIcon icon={faClose} id='icon-close'/>

function SideBar(props) {
    const [idType, setIdType] = useState([])
    const data = useType(idType);
    // const navegate = useNavigate();

    // function sendIdType({target}) {
    //     navegate('/todos-pokemons/', {state: {type: target.id}});
    // }
    //console.log(data);
    function getType({target}) {
        setIdType(target.id)
    }

    return (
        <div id='side-bar'>
            <span onClick={props.close}>{close}</span>
            <div className='option-filter'>
                <h1>POR TIPO:</h1>
                <ul>
                    {objTypes.map(item => {
                        return (
                            <li key={item.id} className='option'>
                                <input type="checkbox" name={item.type} id={item.id} className='checkbox' onClick={getType} />
                                <label htmlFor={item.id}>{item.typePtbr}</label>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

export default SideBar;
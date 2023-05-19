import { objTypes } from '../../config/types';
import './styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setExistId, setIdType } from '../../redux/idTypeSlice';

const close = <FontAwesomeIcon icon={faClose} id='icon-close'/>

function SideBar(props) {
    const dispatch = useDispatch();
    const [id, setId] = useState([]);

    function handleType() {
        dispatch(setIdType(id));
    }

    useEffect(() => {
        handleType();
    }, [id])

    return (
        <div id='side-bar'>
            <span onClick={props.close}>{close}</span>
            <div className='option-filter'>
                <h1>POR TIPO:</h1>
                <ul>
                    {objTypes.map(item => {
                        return (
                            <li key={item.id} className='option'>
                                <input type="checkbox" 
                                    name={item.type} id={item.id} 
                                    className='checkbox' 
                                    onClick={({target}) => setId(target.id)} 
                                />
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
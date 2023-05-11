import { objTypes } from '../../config/types';
import './styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';

const close = <FontAwesomeIcon icon={faClose} id='icon-close'/>

function SideBar(props) {
    return (
        <div id='side-bar'>
            <span onClick={props.close}>{close}</span>
            <div className='option-filter'>
                <h1>Por Tipo:</h1>
                <ul>
                    {objTypes.map(item => {
                        return (
                            <li key={item.id} className='option'>
                                <input type="checkbox" name={item.type} id={item.id} className='checkbox' />
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
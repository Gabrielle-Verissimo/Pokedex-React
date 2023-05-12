import './styles.css';
import { objTypes } from '../../config/types';
import { useNavigate } from 'react-router-dom';
import pokebola from '../../assets/pokebola.png';
function Card(props) {
    
    const navegate = useNavigate();

    function showInfo() {
        navegate("/info-pokemon/", {state: {name: props.name}});
    }

    return (

        <>
            <div className="card" id={props.id} onClick={showInfo}>
                {props.img == null ? <img src={pokebola} alt="" /> :<img src={props.img} alt="" />}
                
                <span>#{props.id}</span>
                {props.name.length > 16 ? <h1 style={{fontSize: '1.05rem'}}>{props.name}</h1>:
                    <h1>{props.name}</h1>
                }
                <div className="div-types">
                    <h2>Tipo:</h2>
                    <ul id="list-types">
                        {props.type.map(type => {
                            return (
                                <li key={type} style={{ backgroundColor: setColor(type) }}>{translate(type)}</li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        
        </>
    )
}

export default Card;

function translate(type) {
    
    let ptBr;
    objTypes.map(item => {
        if(item.type == type) {
            ptBr = item.typePtbr;
        }
    })
    return ptBr;
}

function setColor(type) {
    let color;
    objTypes.map(item => {
        if(item.type == type) {
            color = item.color;
        }
    })
    
    return color;
}
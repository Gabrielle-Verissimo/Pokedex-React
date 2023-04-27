import './styles.css';
import { objTypes } from '../../config/types';

function Card(props) {

    return (

        <>
            <div className="card" id={props.id}>
                <img src={props.img} alt="" />
                <span>#{props.id}</span>
                <h1>{props.name}</h1>
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
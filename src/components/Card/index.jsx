import './styles.css';

function Card(props) {

    return (

        <>
            <div className="card" id={props.id}>
                <img src={props.img} alt="" />
                <span>{props.id}</span>
                <h1>{props.name}</h1>
                <div>
                    <h2>Tipo:</h2>
                    <ul id="list-types">
                        <li>{props.type}</li>
                        <li>{props.type}</li>
                    </ul>
                </div>
            </div>
        
        </>
    )
}

export default Card;
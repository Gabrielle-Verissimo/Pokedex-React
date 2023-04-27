import './styles.css';
let i = 0;
function Card(props) {
    const types = props.type;
    console.log(types);
    return (

        <>
            <div className="card" id={props.id}>
                <img src={props.img} alt="" />
                <span>#{props.id}</span>
                <h1>{props.name}</h1>
                {/* {props.children} */}
                <div>
                    <h2>Tipo:</h2>
                    <ul id="list-types">
                        {props.type.map(type => {
                            {i++}
                            return (
                                // {console.log(i)}
                                <li key={i}>{type}</li>
                            )
                            
                        })}
                    </ul>
                </div>
            </div>
        
        </>
    )
}

export default Card;
import { setShowMore } from "../../hooks/useFetch";

function BtnControl() {

    return (
        <div>
            <button id="show-more" className="btn" onClick={setShowMore}>Mostrar mais</button>
        </div>
    );
}

export default BtnControl;
       

import { setSkip, setBack } from "../../hooks/useFetch";

function BtnControl() {
    return (
        <div>
            <button id="back-page" className="btn-pass" onClick={setBack}>Voltar</button>
            <button id="skip-page" className="btn-pass" onClick={setSkip}>Passar</button>
        </div>
    );
}

export default BtnControl;
       

import { setShowMore } from "../../hooks/useFetch";




function BtnControl() {
    const btn = document.querySelector('#show-more');
    
    // if(btn) {
    //     console.log('entrou')
    //     btn.addEventListener('click', ({target}) => {
    //         console.log(target)
    //     })
    // }

    return (
        <div>
            <button id="show-more" className="btn" onClick={setShowMore}>Mostrar mais</button>
        </div>
    );
}



export default BtnControl;
       

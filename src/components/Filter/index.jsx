import './styles.css';
import SideBar from '../SideBar';
import Loading from '../Loading';
import { useFilter } from '../../hooks/useFetch';
import { useSelector } from 'react-redux';
import { selectIdType } from '../../redux/idTypeSlice';
import Card from '../Card';

function Filter() {
    const {id} = useSelector(selectIdType);
    const [data, isLoading] = useFilter(id);
    //console.log('filter', id, existId);
    return (
        <>
            {isLoading ? <Loading/> : 
                data.map(item => {
                    return (
                        <Card
                            key={item.id}
                            img={item.sprites.front_default}
                            id={item.id}
                            name={item.name}
                            type={item.types.map(key => key.type.name)}
                        />
                    )
                })

            }
            
        </>

    )
    return (

        <>
            <div className='btn' onClick={open}>
                Filtrar
            </div>
        {checked ? <SideBar close={close}/> : ''}
    
       </>


    )
}

export default Filter;
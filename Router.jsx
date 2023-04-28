import { Routes, Route} from "react-router-dom";
import Home from './src/pages/Home';
import Pokemons from './src/pages/Pokemons';

function Router() {
  return (
    <>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/todos-pokemons" element={<Pokemons/>}/>
        </Routes>
    </>      

  )
}

export default Router;
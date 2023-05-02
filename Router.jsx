import { Routes, Route} from "react-router-dom";
import Home from './src/pages/Home';
import Pokemons from './src/pages/Pokemons';
import Info from './src/pages/Info';
import NotFound from './src/pages/NotFound';

function Router() {
  return (
    <>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/todos-pokemons" element={<Pokemons/>}/>
          <Route path="/info-pokemon" element={<Info/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
    </>      

  )
}

export default Router;
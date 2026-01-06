import PokemonList from "./components/PokemonList";
import Pagination from "./components/Pagination";
import Searchbar from "./components/Searchbar";

function App(){
  return (
    <div className="container">
      <h1>Brenda Paulina Sánchez Cano</h1>
      <Searchbar/>
      <PokemonList/>
      <Pagination/>
    </div>
  );
};

export default App

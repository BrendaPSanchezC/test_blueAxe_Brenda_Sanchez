import { useDispatch, useSelector } from "react-redux";
import { setOffset } from "../store/pokemonSlice";

const Pagination = () => {
    const dispatch = useDispatch();
    const {offset} = useSelector((state)=> state.pokemon);

    return (
        <div className="pagination">
            <button 
            onClick={() => dispatch(setOffset(Math.max(offset -6, 0)))}>
                Anterior
            </button>
            <button onClick={() => dispatch(setOffset(offset + 6))}>
                Siguiente
            </button>
        </div>
    );
};

export default Pagination;
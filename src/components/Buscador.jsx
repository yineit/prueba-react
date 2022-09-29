import { useBuscador } from "../hooks/useBuscador";
import Swal from "sweetalert2";
{/*Crea un input llamado búsqueda que filtre por alguno de los resultados de la API. Por
ejemplo nombre, precio o cualquier otro tipo de criterio coherente con el resultado de
la API (2 Punto)
*/}
const Buscador = ({ setNombre }) => {
    const [inputs, handleChange, reset] = useBuscador({
        nombre: "",
    });
    const { nombre } = inputs;

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!nombre.trim()) {
            return Swal.fire({
                title: "Error!",
                text: "Debes colocar un nombre para hacer la busqueda",
                icon: "error",
            });
        }

        setNombre(nombre.trim().toLowerCase());

        reset();
    };
    return (
        <div>
        <h5 class="text-info">Buscador de Personajes de la serie</h5>
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={nombre}
                onChange={handleChange}
                className="form-control rounded-pill mb-2"
                name="nombre"
                placeholder="Ingresa el nombre del personaje"
            />
            <button className="btn btn-info rounded-pill text-white" type="submit">
                Buscar
            </button>
            
        </form>
        </div>
    );
};

export default Buscador;
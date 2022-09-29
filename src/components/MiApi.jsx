import Personaje from "./Personajes";
import Spinner from "./Spinner";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";
{/*Dentro de MiApi.jsx crea el código para consumir la API y que muestre los resultados
(3 Punto) */}
const PintarPersonajes = ({ nombre }) => {
    const [personajes, setPersonajes] = useState([]);
    const [spinner, setSpinner] = useState(false);

    useEffect(() => {
        obtenerCharacter(nombre);
    }, [nombre]);

    const obtenerCharacter = async (nombre) => {
        setSpinner(true);
        try {
            const res = await fetch(
                `https://rickandmortyapi.com/api/character/?name=${nombre}&status=alive`
            );

            if (!res.ok) {
                console.log(res);
                return Swal.fire({
                    title: "Error!",
                    text: `El personaje no fue encontrado ${nombre}`,
                    icon: "error",
                });
            }

            const data = await res.json();
            console.log([...data.results]);
            setPersonajes([...data.results]);
        } catch (error) {
            console.log(error);
            return Swal.fire({
                title: "Error!",
                text: `Error de servidor`,
                icon: "error",
            });
        } finally {
            setSpinner(false);
        }
    };

    if (spinner) {
        return <Spinner />;
    }

    return (

        <div className="row mt-2">
            {personajes.map((item) => (
                <Personaje key={item.id} character={item} />
            ))}
        </div>
        
    );
};

export default PintarPersonajes;

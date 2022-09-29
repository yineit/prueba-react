const Personaje = ({ character = "" }) => {
    const { name, image, species, status, gender } = character;

    return (
        <div className="col-md-4 mb-2">
            <div className="card">
                <img
                    src={image}
                    alt={`imagen-${name}`}
                    className="card-img-top"
                />
                <div className="card-body">
                    <h6 class="text-info" ><strong>{name}</strong></h6>
                    <p>Genero: {gender}</p>
                    <p>Estatus: {status}</p>
                    <p>Especie: {species}</p>
                    
                </div>
            </div>
        </div>
    );
};

export default Personaje;
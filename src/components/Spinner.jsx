{/*En el caso que se tarde para cargar los personajes) */}
const Loading = () => {
    return (
        <div className="d-flex justify-content-center">
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Cargando Personajes</span>
            </div>
        </div>
    );
};

export default Loading;
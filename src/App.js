import { useState } from "react";
import Buscador from "./components/Buscador";
import MiApi from "./components/MiApi";
import Footer from "./components/Footer";
import image from "./assets/img/rickandmorty.png";

const App = () => {
  const [nombre, setNombre] = useState("");
  return (
    
    <div>
    {/* Dentro de App.js crea un landing page (1 Punto) */}
    {/*Agrega un diseño coherente a tu aplicación (1 Punto)*/}
    
      <div class="container">
        <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
        <div class="col-md-3 text-end">
        Prueba - React I
            
          </div>
          <a href="/" class="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">

          </a>
          
          <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
            <li><a href="#" class="nav-link px-2 link-secondary" onClick={() => setNombre("")}>Inicio</a></li>
            <li><a href="https://es.wikipedia.org/wiki/Rick_y_Morty" Target="_blank" class="nav-link px-2 link-dark">Serie</a></li>
            <li><a href="https://www.hbomax.com/cl/es/series/urn:hbo:series:GXkRjxwjR68PDwwEAABKJ?utm_id=sa%7c71700000084770330%7c58700007212146179%7cp64688863623&gclid=CjwKCAjw4c-ZBhAEEiwAZ105Rbkm9vnflhAd-ctLr4bn-JY_yDlVB1KeXhv-K33tBBL0qD-VHRU4shoCoUcQAvD_BwE&gclsrc=aw.ds&countryRedirect=1" Target="_blank" class="nav-link px-2 link-dark">Ver Temporadas</a></li>
            
          </ul>

          
        </header>
      </div>
      <div className="container">

        <section class="py-3 text-center container">
          <div class="row py-lg-5">
            <div class="col-lg-6 col-md-8 mx-auto">
            <img src={image} width="200px"/>
              <h1 class="fw-light">Aplicación Rick and Morty</h1>
              <p class="lead text-muted "><Buscador setNombre={setNombre} /></p>
              <p>
                Rick y Morty es una serie de televisión estadounidense de animación para adultos creada por Justin Roiland y Dan Harmon en 2013.
            </p>
            </div>
          </div>
        </section>
        {/* Crea un componente llamado MiApi.jsx e impórtalo dentro de App.jsx (1 Punto) */}
        
        <MiApi nombre={nombre} />
        
        <Footer />
      </div>
    </div>
  );
};

export default App;
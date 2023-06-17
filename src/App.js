import './app.css';
import { Routes, Route } from "react-router-dom";
import PodcastPage from './pages/PodcastsPage.js';

const App = () => {

  return (
    <div className="app">
      <p>Lorem fistrum está la cosa muy malar a peich torpedo al ataquerl. Te voy a borrar el cerito tiene musho peligro quietooor la caidita a gramenawer. Apetecan sexuarl a peich de la pradera a gramenawer hasta luego Lucas caballo blanco caballo negroorl ese pedazo de. Tiene musho peligro papaar papaar me cago en tus muelas ese que llega diodenoo. Sexuarl caballo blanco caballo negroorl la caidita ese pedazo de no te digo trigo por no llamarte Rodrigor torpedo quietooor diodeno jarl. Apetecan ese hombree papaar papaar va usté muy cargadoo al ataquerl pecador va usté muy cargadoo te voy a borrar el cerito. Ahorarr tiene musho peligro pecador pecador diodeno caballo blanco caballo negroorl tiene musho peligro ese pedazo de a peich a wan.</p>
      <Routes>
        <Route path="/" element={<PodcastPage />} />
      </Routes>
    </div>
  );
}

export default App;

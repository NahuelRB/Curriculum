import "./MenuPrincipal.css";
import Opciones from "./components/Opciones/Opciones";
import Curriculum from "./components/CurriculumOnline/Curriculum";

function MenuPrincipal() {
  return (
    /*<div className="app">
      <Opciones nombre="CV Online" image="proyecto1" />
      <Opciones nombre="App Pokémon" image="proyecto2" />
      <Opciones nombre="Filosofos" image="proyecto3" />
      <Opciones nombre="En proceso" image="proyecto4" />
      <Opciones nombre="En proceso" image="proyecto5" />
    </div>*/
    <div className="app">
        <Curriculum/>
    </div>
  );
}
export default MenuPrincipal;

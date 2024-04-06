import { useState } from "react";
import "./App.css";
// import HookUseState from './components/HookUseState'; --> Por padrão ja importa o index.jsx
import HookUseEffect from "./components/HookUseEffect/index.jsx";
import HookUseState from "./components/HookUseState/index.jsx";

function App() {
 const [showUseEffectSection, setShowUseEffectSection] = useState(true);

 return (
  <>
   <h1>Revisão da semana 11</h1>
   <p>
    Recurso principal do React: <strong>REATIVIDADE</strong>
   </p>
   <hr />

   {showUseEffectSection && <HookUseEffect />}

   <button onClick={() => setShowUseEffectSection((s) => !s)}>
    {showUseEffectSection ? "Desmontar" : "Montar"} componente useEffect
   </button>
   <HookUseState />
  </>
 );
}

export default App;

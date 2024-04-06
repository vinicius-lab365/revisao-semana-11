import "./index.css";
import { useState } from "react";

export default function HookUseEffect() {
 const [count, setCount] = useState(0);
 const [countIncorreto, setCountIncorreto] = useState(0);

 return (
  <>
   <h1>Hook useState: Atualizando um estado com base no valor anterior</h1>
   <p>
    Imagine uma situação onde o estado seja alterado em um curto periodo de
    tempo, ele ainda não terminou de atualizar o estado da primeira solicitação
    e logicamente vai ter problemas para atualizar o estado da nova solicitação.
   </p>

   {/* setCount(count + 1) */}

   <h4>Contador incorreto</h4>
   <button
    onClick={() => {
     setCountIncorreto(countIncorreto + 1); // somar 1
     setCountIncorreto(countIncorreto + 1); // somar 1 de novo
    }}>
    O valor do contador é: {countIncorreto}
   </button>

   <h4>Contador correto</h4>
   <button
    onClick={() => {
     setCount((c) => c + 1);
     setCount((c) => c + 1);
    }}>
    O valor do contador é: {count}
   </button>
  </>
 );
}

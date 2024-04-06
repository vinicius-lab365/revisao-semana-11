import "./index.css";
import useFetch from "../../hooks/useFetch";
import { useEffect, useState } from "react";

export default function HookUseEffect() {
 const [observar, setObservar] = useState(0);
 // Os arquivos da pasta public são os únicos observados com endereços
 const [trails] = useFetch("/example.json");

 // Não deve ficar aqui pois se trata de um recurso do browser. (Todas as execuções dever ficar dentro de um useEffect)
 // document.title = "Efeitos colaterais";

 // A ser executado em todas as renderizações --> Não é muito utilizado (gasto excessivo de recursos)
 // didUpdate - Atualizações no estado do componente (observando todas)
 useEffect(() => {
  console.log(
   "useEfect: Nova renderização por conta da falta do segundo parâmetro"
  );
 });

 // A ser executado na primeira renderização --> Geralmente usado para consumo de API
 // didMount - Montagem do componente
 useEffect(() => {
  console.log(
   "useEfect: Primeira renderização porque usa somente o array vazio como segundo parâmetro"
  );

  document.title = "Efeitos colaterais";

  const interval = setInterval(
   () => console.log("Timer sendo executado"),
   1000
  );

  // O hook useEffect está preparado para lidar com a desmontagem/morte do componente em uma função retornada nele
  return () => {
   console.log("O componente foi desmontado");
   clearInterval(interval);
  };
 }, []);

 // A ser executado na primeira renderização e sempre que o valor do estado observar mudar --> Em ocasiões específicas, validações de formulários...
 // didUpdate - Atualizações no estado do componente (observando uma específica)
 useEffect(() => {
  console.log(
   "useEfect: O valor do estado observar mudou (usa um array com a dependência do estado), agora é: ",
   observar
  );
 }, [observar]);

 return (
  <>
   <h1>Hook useEffect</h1>
   <h3>Parâmetros</h3>
   <ul>
    <li>
     <b>Callback:</b> função a ser executada de acordo com os argumentos do
     segundo parametro
    </li>
    <li>
     <b>Dependências:</b>
     <ul>
      <li>
       <b>Se eu não passar:</b> ele vai executar a callback em todas as
       renderizações do componente
      </li>
      <li>
       se eu passar um array vazio [], ele vai executar a callback assim que o
       componente for renderizado pela primeira vez
      </li>
      <li>
       se eu passar um array com argumentos [estadoX, estadoY], ele vai executar
       quando o componente renderizar e sempre que o valor de algum item da
       lista de argumentos mudar
      </li>
     </ul>
    </li>
   </ul>

   <button onClick={() => setObservar((o) => o + 1)}>
    Alterar valor do estado para causar uma renderização
   </button>

   <hr />

   <h1>Efeitos Colaterias</h1>
   <p>
    Sempre que vamos executar algo fora do escopo React, uma nova chamada HTTP,
    a criação de um timer ou intervalo, a manipulaçao do DOM.
   </p>
   <p>
    <b>Devem estar dentro de um useEffect</b>
   </p>
   <p>
    <b>Ciclo de vida do componente</b>
   </p>
   <p>
    O componente nasce
    <b>(didMount - representado pelo useEffect com array vazio)</b>, o
    componente é atualizado{" "}
    <b>
     (didUpdate - representado pela falta do segundo parâmetro no useEffect ou
     pelo segundo parâmetro possuir valores no array)
    </b>{" "}
    o componente morre
    <b>(willUmount - pela função retornada no useEfect)</b>
   </p>
   <p>
    Precisamos tratar a dewsmontagem do componenete quando usamos
    funcionalidades assíncronas que precisam ser canceladas, ou com
    timer/intervalos por exemplo.
   </p>

   <hr />

   <h2>Trilhas Carregadas</h2>

   {/*Existe trilha? Entao faz um map e exiba */}

   {trails &&
    trails.map((trail) => (
     <div key={trail.name}>
      {trail.name}
      <p>{trail.distance}</p>
     </div>
    ))}
  </>
 );
}

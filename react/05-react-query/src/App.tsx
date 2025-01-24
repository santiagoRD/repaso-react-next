import './App.css';
import { useRandom } from './hooks/useRandom';

function App() {
  const { randomQuery } = useRandom();
  return (
    <>
      {randomQuery.isFetching ? <h1>Cargando...</h1> : <h1>Número: {randomQuery.data}</h1>}
      {/* <RandomNumber /> */}
      <div>{JSON.stringify(randomQuery.error)}</div>
      <div>...</div>
      <button disabled={randomQuery.isFetching} onClick={() => randomQuery.refetch()}>
        Nuevo número
      </button>
    </>
  );
}

export default App;

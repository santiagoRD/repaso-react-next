import { useEffect, useState } from 'react';
import './App.css';

//https://www.random.org/integers/?num=1&min=1&max=500&col=1&base=10&format=plain&rnd=new
function App() {
  const [number, setNumber] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(true);
  const [refreshToken, setRefreshToken] = useState(0);

  useEffect(() => {
    setIsLoading(true);
    fetch('https://www.random.org/integers/?num=1&min=1&max=500&col=1&base=10&format=plain&rnd=new')
      .then(response => response.text())
      .then(data => {
        setNumber(Number(data));
        setIsLoading(false);
      });
  }, [refreshToken]);

  return (
    <>
      {isLoading ? <h1>Cargando...</h1> : <h1>Número: {number}</h1>}
      <div>...</div>
      <button disabled={isLoading} onClick={() => setRefreshToken(refreshToken + 1)}>
        Nuevo número
      </button>
    </>
  );
}

export default App;

import React from 'react';
import './App.css';
import { useFact } from './hooks/useFact';
import { useCat } from './hooks/useCat';

const App = () => {
  const { fact, updateFact } = useFact();
  const { imageUrl } = useCat({ fact });
  console.log(imageUrl);

  return (
    <main>
      <button onClick={updateFact}>Obtener nuevo hecho</button>
      <p>
        El hecho es: <strong>{fact}</strong>
      </p>
      <img alt="cat image from fact" src={imageUrl} />
    </main>
  );
};

export default App;

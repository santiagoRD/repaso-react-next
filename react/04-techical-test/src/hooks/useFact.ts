import { useState, useEffect } from 'react';
import { getFact } from '../services/fact';

export const useFact = () => {
  const [fact, setFact] = useState('');

  const updateFact = () => {
    getFact().then(newFact => setFact(newFact));
  };

  useEffect(updateFact, []);

  return {
    fact,
    updateFact
  };
};

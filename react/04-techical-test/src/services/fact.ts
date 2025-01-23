const FACT_URL = 'https://catfact.ninja/fact';
export const getFact = async () => {
  const res = await fetch(FACT_URL);
  const { fact } = await res.json();
  return fact;
};

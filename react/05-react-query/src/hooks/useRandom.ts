import { useQuery } from '@tanstack/react-query';

const getCryptoNumber = async (): Promise<number> => {
  // throw 'No se pudo obtener el núnmero';
  const resp = await fetch(
    'https://www.random.org/integers/?num=1&min=1&max=500&col=1&base=10&format=plain&rnd=new'
  ).then(response => response.json());
  return Number(resp);
};

export const useRandom = () => {
  const randomQuery = useQuery({
    queryKey: ['randomNumber'],
    queryFn: getCryptoNumber
    // retry:1,
    // retryDelay: 1000
  });

  return {
    randomQuery
  };
};

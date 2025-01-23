import { useEffect, useState } from 'react';
type Props = {
  fact: string;
};

const CAT_PREFIX_IMAGE_URL = 'https://cataas.com';
export const useCat = ({ fact }: Props) => {
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    if (!fact) return;
    const firstWords = fact.split(' ', 3).join(' ');

    fetch(`https://cataas.com/cat/says/${firstWords}?size=50&color=red&json=true`)
      .then(res => res.json())
      .then(response => {
        const { _id } = response;
        const url = `${CAT_PREFIX_IMAGE_URL}/cat/${_id}/says/${firstWords}`;
        setImageUrl(url);
      });
  }, [fact]);

  return { imageUrl };
};

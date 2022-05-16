import { useState, useEffect } from 'react';

const localCache = {};

export default useBreedList = (animal) => {
  const [breedList, setBreedList] = useState([]);
  const [status, setStatus] = useState('unloaded');

  useEffect(() => {
    const requestBreedList = async () => {
      setBreedList([]);
      setStatus('loading');

      const res = await fetch(
        `http://pets-v2.dev-apis.com/breeds?animal=${animal}`
      );
      const json = await res.json();
      localCache[animal] = json.breeds || [];
      // console.log('localCache', localCache);
      setBreedList(localCache[animal]);
      setStatus('loaded');
    };

    if (!animal) {
      setBreedList([]);
    } else if (localCache[animal]) {
      setBreedList(localCache[animal]);
    } else {
      requestBreedList();
    }
  }, [animal]);
  // console.log('breedList', breedList);

  return [breedList, status];
};

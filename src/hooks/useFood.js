import { useEffect, useState } from 'react';
import { getData } from '../utils/fetch';

const useFood = () => {
  const [foods, setFoods] = useState(null);
  useEffect(() => {
    (async () => {
      const { data, data: { meals } } = await getData();

      if (data.status !== 200) {
        setFoods(foods => foods);
      }

      setFoods(meals);
    })();
  }, []);

  return foods;
};

export default useFood;

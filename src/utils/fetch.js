// import axios from 'axios';
import endpoints from '../constants/api';

export const getData =  async () => {
  try {
    // const { data } = await axios.get(endpoints.FOOD);
    const response = await fetch(endpoints.FOOD, {
      method: 'GET',
    });
    const data = response.json();

    return data;
  } catch (error) {
    const data = {
      status: 400,
      error: error.message,
      data: null,
    };

    return data;
  }
};

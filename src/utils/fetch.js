import axios from 'axios';
import endpoints from '../constants/api';

export const getData =  async () => {
  try {
    const { data } = await axios({
      url: endpoints.FOOD,
      method: 'GET',
    });

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

import {Apis} from '../Apis';
import {TUser} from './types';

const token =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNDNkYjBmMmUwZjk0OTQwYzg1OTFlOWQ5NDMyNWIwOSIsIm5iZiI6MTc0MTc0OTIxMy44NDMwMDAyLCJzdWIiOiI2N2QwZmJkZDY2ODkyYmFkNjI4MTRkMTQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.m8GiDHysJNqY9mj0fnjyAAfZxKNwONugTJc7gHG9n7s';

const commonCall = async <T>(api: string, option: ResponseInit): Promise<T> => {
  const response = await fetch(api, option);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  console.log(response);
  return response.json();
};

const fetchApi = {
  login: () => {
    const option: RequestInit = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${token}`,
      },
    };
    const response = commonCall<TUser>(Apis.login, option);
    return response;
  },
};

export {fetchApi};

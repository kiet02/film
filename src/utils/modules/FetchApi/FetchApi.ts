import { AccountService } from '../Account';
import {Apis} from '../Apis';
import {TBook, TUser} from './types';


const commonCall = async <T>(api: string, option: RequestInit={}): Promise<T> => {
  const account = AccountService.get()
  
  try {
    // if(!account?.token) {
    //   throw new Error('Account not found')
    // }
    
    let headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${account?.token}`,
    };
  
    const response = await fetch(api, {
      headers: headers,
      ...option

    });
   

    return response.json();
  } catch (error:any) {
    if (error.message === 'Network request failed') {
      throw new Error('Network request failed');
    }
    throw error;
  }

 
};

const fetchApi = {
  login: (email:string,password:string) => {
    const option: RequestInit = {
      method: 'POST',
      body: JSON.stringify({email,password})
    }
    const response = commonCall<TUser>(Apis.login, option);
    return response;
  },
  register: (name:string,email:string,password:string) => {
    const option: RequestInit = {
      method: 'POST',
      body: JSON.stringify({name,email,password})
    }
    const response = commonCall<TUser>(Apis.register, option);
    return response;
  },
  explore:  () => {
    const option: RequestInit = {
      method: 'GET',
    }
    const response = commonCall<TBook>(Apis.getExplore, option);
    return response;
  },
  Categories:  (name:string) => {
    const option: RequestInit = {
      method: 'GET',
    }
    const response = commonCall<TBook>(Apis.getCategoris(name), option);
    return response;
  },
};

const ApiKeys = {
  login: 'login',
  register: 'register',
  explore: 'explore',
};
export {fetchApi,ApiKeys};

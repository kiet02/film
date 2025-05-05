import { MMKVLoader, useMMKVStorage } from 'react-native-mmkv-storage';
import { TProfileResponse } from '../FetchApi';

const tag = 'account';
const mmkv_id = `mmkv-${tag}`;
const mmkv_key = `key-${tag}`;

const MMKVwithID = new MMKVLoader().withInstanceID(mmkv_id).initialize();

type Account = TProfileResponse & { email?: string; token?: string };

export const AccountService = {
  get: () => MMKVwithID.getMap<Account | undefined>(mmkv_key),
  add: (value: Partial<Account>) =>
    MMKVwithID.setMap(mmkv_key, { ...AccountService.get(), ...value }),
  remove: () => MMKVwithID.removeItem(mmkv_key),
};

export const useAccount = () => {
  const [value, setvalue] = useMMKVStorage(mmkv_key, MMKVwithID);
  return { accounr: value, setAccount: setvalue };
};

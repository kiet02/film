import {CompositeScreenProps} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type RootStackParamList = {
  Home: undefined;
  MainApp: {id: number};
  MainHome: {id: number};
};

export type AllScreenStackParamList = {
  Intro: undefined;
  Home: undefined;
  MainApp: {id: number};
  MainHome: {id: number};
  Login: undefined;
};
export type RootStackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;

export type MainScreenParamList<T extends keyof AllScreenStackParamList> =
  CompositeScreenProps<
    NativeStackScreenProps<AllScreenStackParamList, T>,
    RootStackScreenProps<keyof RootStackParamList>
  >;

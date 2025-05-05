import { useEffect } from 'react';
import { useBottomSheet } from '../../../BottomSheetProvider';
import { Keyboard } from 'react-native';

export const useKeyboardExpandSheet = (
  enable: boolean,
  hide: number,
  show: number
) => {
  const { expandSheet, normalSheet } = useBottomSheet();

  useEffect(() => {
    if (!enable) return;

    const keyboardHideListener = Keyboard.addListener('keyboardDidHide', () => {
      normalSheet(hide);
    });
    const keyboardShowListener = Keyboard.addListener('keyboardDidShow', () => {
      expandSheet(show);
    });

    return () => {
      keyboardHideListener.remove();
      keyboardShowListener.remove();
    };
  }, [enable]);
};

import React, {
  createContext,
  useContext,
  useRef,
  useMemo,
  useState,
  useCallback,
} from 'react';
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetView,
} from '@gorhom/bottom-sheet';
import { Keyboard } from 'react-native';

type BottomSheetContextType = {
  openSheet: (content: React.ReactNode, snapIndex?: number) => void;
  closeSheet: () => void;
  expandSheet: (index: number) => void;
  normalSheet: (index: number) => void;
};

const BottomSheetContext = createContext<BottomSheetContextType | undefined>(
  undefined
);

export const useBottomSheet = () => {
  const context = useContext(BottomSheetContext);
  if (!context) {
    throw new Error('useBottomSheet must be used within a BottomSheetProvider');
  }
  return context;
};

export const BottomSheetProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ['35%', '57%', '60%', '85%'], []);
  const [sheetContent, setSheetContent] = useState<React.ReactNode>(null);

  const openSheet = (content: React.ReactNode, snapIndex: number = 0) => {
    setSheetContent(content);
    bottomSheetRef.current?.snapToIndex(snapIndex);
  };

  const closeSheet = useCallback(() => {
    Keyboard.dismiss();
    setTimeout(() => {
      bottomSheetRef.current?.close();
    }, 100);
  }, []);

  const expandSheet = (index: number) => {
    bottomSheetRef.current?.snapToIndex(index);
  };

  const normalSheet = (index: number) => {
    bottomSheetRef.current?.snapToIndex(index);
  };

  return (
    <BottomSheetContext.Provider
      value={{
        openSheet,
        closeSheet,
        expandSheet,
        normalSheet,
      }}
    >
      {children}
      <BottomSheet
        ref={bottomSheetRef}
        index={-1}
        onClose={Keyboard.dismiss}
        snapPoints={snapPoints}
        backdropComponent={props => (
          <BottomSheetBackdrop
            {...props}
            disappearsOnIndex={-1}
            appearsOnIndex={0}
            onPress={closeSheet}
          />
        )}
        keyboardBehavior="fillParent"
        enableDynamicSizing={false}
      >
        <BottomSheetView
          style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
        >
          {sheetContent}
        </BottomSheetView>
      </BottomSheet>
    </BottomSheetContext.Provider>
  );
};

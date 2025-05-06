import React, { createContext, useContext, useState, ReactNode } from 'react';
import CustomLoader from './item/CustomLoader';

interface LoaderContextProps {
  loading: boolean;
  showLoader: () => void;
  hideLoader: () => void;
}

const LoaderContext = createContext<LoaderContextProps | undefined>(undefined);

interface LoaderProviderProps {
  children: ReactNode;
}

export const LoaderProvider: React.FC<LoaderProviderProps> = ({ children }) => {
  const [loading, setLoading] = useState(false);

  const showLoader = () => setLoading(true);
  const hideLoader = () => setLoading(false);

  return (
    <LoaderContext.Provider value={{ loading, showLoader, hideLoader }}>
      {children}
      {loading && <CustomLoader />}
    </LoaderContext.Provider>
  );
};

export const useLoader = (): LoaderContextProps => {
  const context = useContext(LoaderContext);
  if (!context) {
    throw new Error('useLoader must be used within a LoaderProvider');
  }
  return context;
};

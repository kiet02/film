import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import React from 'react';
import {AppNavigation} from './src/navigation/AppNavigation';
import {NavigationContainer} from '@react-navigation/native';

const queryClient = new QueryClient();

const AppProvider = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <AppNavigation />
      </NavigationContainer>
    </QueryClientProvider>
  );
};

export default AppProvider;

import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import React from 'react';
import {AppNavigation} from './src/navigation/AppNavigation';
import {NavigationContainer} from '@react-navigation/native';
import {FormProvider, useForm} from 'react-hook-form';

const queryClient = new QueryClient();

const AppProvider = () => {
  const methods = useForm();
  return (
    <QueryClientProvider client={queryClient}>
      <FormProvider {...methods}>
        <NavigationContainer>
          <AppNavigation />
        </NavigationContainer>
      </FormProvider>
    </QueryClientProvider>
  );
};

export default AppProvider;

import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {FormProvider, useForm} from 'react-hook-form';
import {AppAllNavigation} from './src/navigation/AppAllNavigation';

const queryClient = new QueryClient();

const AppProvider = () => {
  const methods = useForm();
  return (
    <QueryClientProvider client={queryClient}>
      <FormProvider {...methods}>
        <NavigationContainer>
          <AppAllNavigation />
        </NavigationContainer>
      </FormProvider>
    </QueryClientProvider>
  );
};

export default AppProvider;

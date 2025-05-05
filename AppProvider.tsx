import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { FormProvider, useForm } from 'react-hook-form';
import { AppAllNavigation } from './src/navigation/AppAllNavigation';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { BottomSheetProvider } from './src/BottomSheetProvider';

const queryClient = new QueryClient();

const AppProvider = () => {
  const methods = useForm();
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <QueryClientProvider client={queryClient}>
        <FormProvider {...methods}>
          <NavigationContainer>
            <AppAllNavigation />
          </NavigationContainer>
        </FormProvider>
      </QueryClientProvider>
    </GestureHandlerRootView>
  );
};

export default AppProvider;

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { FormProvider, useForm } from 'react-hook-form';
import { AppAllNavigation } from './src/navigation/AppAllNavigation';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { BottomSheetProvider } from './src/BottomSheetProvider';
import { LoaderProvider } from './src/element/AppLoad/LoaderContext';
import {
  SafeAreaProvider,
  SafeAreaView,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import { StatusBar, View } from 'react-native';

const queryClient = new QueryClient();

const AppProvider = () => {
  const methods = useForm();
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <QueryClientProvider client={queryClient}>
          <StatusBar
            translucent
            backgroundColor="transparent"
            barStyle="dark-content"
          />
          <LoaderProvider>
            <FormProvider {...methods}>
              <NavigationContainer>
                <AppAllNavigation />
              </NavigationContainer>
            </FormProvider>
          </LoaderProvider>
        </QueryClientProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
};

export default AppProvider;

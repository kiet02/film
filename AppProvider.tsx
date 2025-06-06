import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
import { FormProvider, useForm } from 'react-hook-form';
// import { AppAllNavigation } from './src/navigation/AppAllNavigation';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { LoaderProvider } from './src/element/AppLoad/LoaderContext';
// import { ColorSchemeProvider } from './src/ThemeProvider';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ColorSchemeProvider } from './src/_Test/ThemeTest';
import { ColorSchemeButton } from './src/_Test/Test';

const queryClient = new QueryClient();

const AppProvider = () => {
  const methods = useForm();
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <QueryClientProvider client={queryClient}>
          <LoaderProvider>
            <FormProvider {...methods}>
              <ColorSchemeProvider>
                {/* <NavigationContainer>
                  <AppAllNavigation />
                </NavigationContainer> */}
                <ColorSchemeButton />
              </ColorSchemeProvider>
            </FormProvider>
          </LoaderProvider>
        </QueryClientProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
};

export default AppProvider;

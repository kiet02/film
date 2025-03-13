import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import React from 'react';

import {App} from './src/App';

const queryClient = new QueryClient();

const AppProvider = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  );
};

export default AppProvider;

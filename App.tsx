import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import Navigation from './src/Navigation';
import { theme } from './src/Theme';
import { AuthProvider } from './src/hooks/AuthProvider';

// Create a react-query client
const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <PaperProvider theme={theme}>
          <Navigation />
        </PaperProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
};

export default App;

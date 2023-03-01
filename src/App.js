import { QueryClient, QueryClientProvider } from 'react-query';
import { Container } from '@mui/material';
import { Photos } from './pages/Photos';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Container>
        <Photos />
      </Container>
    </QueryClientProvider>
  );
}

export default App;

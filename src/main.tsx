import { render } from 'react-dom';
import { App } from './routes/App';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

render(
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>,
  document.getElementById('root')
);

import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { Router } from "./Router";

const App = () => {
  const client = new QueryClient();

  return (
    <QueryClientProvider client={client}>
      <Router />
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
};

export default App;

import { useEffect, useState } from "react";
import api from "./api";

type Product = {
  id: number;
  title: string;
  description: string;
  image: string;
  price: number;
  category: {
    id: number;
    name: string;
  };
};

type Response = {
  content: Product[];
  total: number;
  perPage: number;
  currentPage: number;
  lastPage: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
};

function App() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetcher = async () => {
      const { data } = await api.get<Response>("/api/products?page=1&take=5");
      setProducts(data.content);
    };

    fetcher();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Caching and optimistic ui with React Query</h1>
        <ul>
          {products &&
            products?.map((product) => (
              <li key={product.id}>{product.title}</li>
            ))}
        </ul>
      </header>
    </div>
  );
}

export default App;

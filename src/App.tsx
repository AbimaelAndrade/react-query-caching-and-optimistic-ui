import { useEffect, useState } from "react";
import api from "./api";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetcher = async () => {
      const { data } = await api.get("/api/products?page=1&take=5");
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

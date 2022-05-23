import { useEffect, useState } from "react";
import api from "./api";
import { Conditional, Page } from "./components";

function App() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetcher = async () => {
      const { data } = await api.get<Response<Product[]>>(
        "/api/products?page=1&take=5"
      );
      setProducts(data.content);
    };

    fetcher();
  }, []);

  return (
    <Page>
      <Conditional renderIf={!!products}>
        <ul>
          {products?.map((product) => (
            <li key={product.id}>{product.name}</li>
          ))}
        </ul>
      </Conditional>
    </Page>
  );
}

export default App;

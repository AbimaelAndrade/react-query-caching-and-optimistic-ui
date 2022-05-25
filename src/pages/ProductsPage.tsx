import { FormEvent, useEffect, useState } from "react";
import api from "../api";
import { Either, Page, FormProduct, Table } from "../components";
import { Loading } from "../images";

export function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isSaving, setIsSaving] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchProducts = async () => {
    setIsLoading(true);
    const { data } = await api.get<Product[]>(`/products`);

    setProducts(data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const onSaveProduct = async (event: FormEvent<HTMLFormElement>) => {
    try {
      event.preventDefault();
      setIsSaving(true);
      const formData = new FormData(event.currentTarget);

      const name = formData.get("name");
      const description = formData.get("description");
      const price = formData.get("price");
      const category = formData.get("category");

      const isValid = name && description && price && category;

      if (isValid) {
        await api.post("/products", { name, description, price, category });
      }
    } catch (error) {
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <Page>
      <div className="container mx-auto px-4 sm:px-8">
        <div className="py-8">
          <div className="flex items-center justify-between pb-6">
            <div>
              <h2 className="text-gray-800 font-semibold text-2xl">
                Listagem de Produtos
              </h2>
              <Either renderIf={isSaving} orRender={null}>
                <div className="inline-flex items-center text-sm py-2 leading-6 text-teal-500 transition ease-in-out duration-150 cursor-not-allowed">
                  <Loading />
                  <span className="ml-2">Salvando produto...</span>
                </div>
              </Either>
            </div>
          </div>
          <FormProduct onSubmit={onSaveProduct} />
        </div>
        <Table data={products} isLoading={isLoading} />
      </div>
    </Page>
  );
}

export default ProductsPage;

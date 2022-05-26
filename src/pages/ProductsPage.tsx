import { FormEvent } from "react";
import { useQuery, useMutation, useQueryClient } from "react-query";
import api from "../api";
import { Either, Page, FormProduct, Table } from "../components";
import { Loading } from "../images";

const fetchProducts = async () => {
  const { data } = await api.get<Product[]>(`/products`);

  return data;
};

const saveProduct = async (product: Product) => {
  const { data } = await api.post<Product>(`/products`, product);

  return data;
};

export function ProductsPage() {
  const queryClient = useQueryClient();
  const productKey = "products";

  const { data: products, isLoading } = useQuery(productKey, fetchProducts);

  const { mutate, isLoading: isSaving } = useMutation(saveProduct, {
    onMutate: async (updatedProduct) => {
      // cancel the current queries
      await queryClient.cancelQueries(productKey);

      // get current (previous) state
      const previousState = queryClient.getQueryData(productKey);

      // update the current cache
      queryClient.setQueryData<Product[]>(productKey, (oldState) => {
        return [...(oldState ?? []), updatedProduct];
      });

      return { previousState };
    },
    onError: async (err, variables, context) => {
      const { previousState } = context as { previousState: Product[] };

      queryClient.setQueryData(productKey, previousState);
    },
    onSettled: () => {
      queryClient.invalidateQueries(productKey);
    },
  });

  const onSaveProduct = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const name = formData.get("name");
    const description = formData.get("description");
    const price = formData.get("price");
    const category = formData.get("category");

    const isValid = name && description && price && category;

    if (isValid) {
      const newProduct = {
        name,
        description,
        price: +price,
        category,
      } as Product;
      mutate(newProduct);
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
        <Table data={products ?? []} isLoading={isLoading} />
      </div>
    </Page>
  );
}

export default ProductsPage;

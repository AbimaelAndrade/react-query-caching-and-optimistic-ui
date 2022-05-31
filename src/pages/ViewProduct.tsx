import { useMemo } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import api from "../api";
import { Page } from "../components";

const fetchProduct = async (id: string) => {
  const { data } = await api.get(`/products/${id}`);

  return data;
};

export const ViewProduct = () => {
  const { id } = useParams<{ id: string }>();

  const { data: product, isLoading } = useQuery(["products", id], () =>
    fetchProduct(id)
  );

  const price = useMemo(
    () =>
      new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(product?.price ?? 0),
    [product]
  );

  if (isLoading || !product) {
    return (
      <Page>
        <div className="w-full max-w-6xl rounded bg-white shadow-xl p-4 lg:p-8 mx-auto text-gray-800 relative md:text-left">
          <p className="font-bold"> Carregando produto ...</p>
        </div>
      </Page>
    );
  }

  return (
    <Page>
      <div className="w-full max-w-6xl rounded bg-white shadow-xl p-4 lg:p-8 mx-auto text-gray-800 relative md:text-left">
        <div className="w-full p-4">
          <div className="mb-10">
            <p className="font-bold">Nome:</p>
            <h1 className="font-bold uppercase text-2xl mb-5">
              {product?.name}
            </h1>
            <p className="font-bold">Descrição:</p>
            <p className="text-md">{product?.description}</p>
          </div>
          <div className="align-bottom mb-5">
            <span className="font-bold text-4xl leading-none align-baseline">
              {price}
            </span>
          </div>
          <div className="flex w-full border-t-2 border-gray-100 p-2 justify-end">
            <button className="bg-yellow-300 opacity-75 hover:opacity-100 text-yellow-900 hover:text-gray-900 rounded-full px-10 py-2 font-semibold">
              <i className="mdi mdi-cart -ml-2 mr-2"></i> Compre agora
            </button>
          </div>
        </div>
      </div>
    </Page>
  );
};

import { useEffect, useState } from "react";
import api from "../../api";
import { Either, Table } from "../../components"
import { Loading } from "../../images";

const ProductsAdmin = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [pagination, setPagination] = useState<Pagination>({} as Pagination);
  const [isSaving, setIsSaving] = useState<boolean>(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetcher = async () => {
      const { data } = await api.get<Response<Product[]>>(
        `/api/products?page=${page}&take=5`
      );

      const {
        content,
        total,
        perPage,
        currentPage,
        lastPage,
        hasNextPage,
        hasPreviousPage,
      } = data;

      setProducts(content);
      setPagination({
        total,
        perPage,
        currentPage,
        lastPage,
        hasNextPage,
        hasPreviousPage,
      });
    };

    fetcher();
  }, []);

  return (

    <div className="container mx-auto px-4 sm:px-8">
      <div className="py-8">
        <div className="flex items-center justify-between pb-6">
          <div>
            <h2 className="text-gray-600 font-semibold">Produtos</h2>
            <Either renderIf={isSaving} orRender={null}>
              <div className="inline-flex items-center text-sm py-2 leading-6 text-teal-500 transition ease-in-out duration-150 cursor-not-allowed">
                <Loading />
                <span className="ml-2">Salvando produto...</span>
              </div>
            </Either>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex bg-gray-200 items-center px-2 py-1 rounded-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                />
              </svg>
              <input
                className="bg-gray-200 outline-none ml-1 block border-none"
                type="text"
                name=""
                id=""
                placeholder="search..."
              />
            </div>
            <div className="lg:ml-20 ml-10 space-x-4">
              <button className="bg-teal-600 hover:bg-teal-800 px-4 py-2 rounded-md text-white font-semibold tracking-wide cursor-pointer">
                Novo Produto
              </button>
            </div>
          </div>
        </div>
      </div>
      <Table data={products} pagination={pagination} />
    </div>
  )
}

export default ProductsAdmin
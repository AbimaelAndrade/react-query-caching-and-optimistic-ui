import { FormEvent } from "react";

type FormProps = {
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
};

export const FormProduct = ({ onSubmit }: FormProps) => {
  return (
    <div className="p-2 rounded-md shadow-lg bg-white">
      <div className="p-4">
        <form onSubmit={onSubmit}>
          <div className="grid grid-cols-3 gap-4">
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="name"
              >
                Nome
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                name="name"
                placeholder="Nome do produto"
              />
            </div>
            <div className="mb-6 col-span-2">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="description"
              >
                Descrição
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="description"
                type="text"
                name="description"
                placeholder="Descrição do produto"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="price"
              >
                Preço
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="price"
                type="text"
                name="price"
                placeholder="Valor do produto"
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="category"
              >
                Categoria
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="category"
                type="text"
                name="category"
                placeholder="Categoria do produto"
              />
            </div>
            s
          </div>
          <div className="flex items-center justify-end">
            <button className="bg-teal-600 hover:bg-teal-800 px-4 py-2 rounded-md text-white font-semibold tracking-wide cursor-pointer">
              Novo Produto
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

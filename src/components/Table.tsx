import { HTMLAttributes } from "react";
import { Icon, Loading } from "../images";
import { Controls } from "./Controls";
import { Either } from "./Either";
import { Tag } from "./Tag";
import { Typography } from "./Typography";

type TableProps = {
  data: Product[];
  pagination: Pagination;
};

const Column = ({
  className,
  children,
  ...rest
}: HTMLAttributes<HTMLTableCellElement>) => (
  <td
    className={`px-5 py-5 border-b border-gray-200 bg-white text-sm ${className}`}
    {...rest}
  >
    {children}
  </td>
);

const ColumnHeader = ({
  className,
  children,
  ...rest
}: HTMLAttributes<HTMLTableCellElement>) => (
  <th
    className={`px-5 py-3 w-4 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider ${className}`}
    {...rest}
  >
    {children}
  </th>
);

const LoadingProducts = () => (
  <div className="min-w-max p-10 flex items-center justify-center justify-items-center">
    <Loading className="w-16" />
    <Typography.Heading variant="h2" className="text-xl">
      Carregando produtos
    </Typography.Heading>
  </div>
);

export const Table = ({ data, pagination }: TableProps) => {
  return (
    <Either renderIf={!!data.length} orRender={<LoadingProducts />}>
      <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
        <div className="inline-block min-w-full shadow-lg rounded-md overflow-hidden">
          <table className="min-w-full leading-normal">
            <thead>
              <tr>
                <ColumnHeader>#</ColumnHeader>
                <ColumnHeader>Produto</ColumnHeader>
                <ColumnHeader>Preço</ColumnHeader>
                <ColumnHeader>Categoria</ColumnHeader>
                <ColumnHeader>Ações</ColumnHeader>
              </tr>
            </thead>
            <tbody>
              {data?.map((product) => (
                <tr key={product?.id || new Date().getTime()}>
                  <Column>
                    <Either renderIf={!!product?.id} orRender={<Loading />}>
                      {product?.id}
                    </Either>
                  </Column>
                  <Column>
                    <div className="flex items-center h-fit">
                      <div
                        className="w-24 h-16 bg-cover bg-center rounded-sm"
                        style={{
                          backgroundImage: `url(${product?.image})`,
                        }}
                      ></div>
                      <div className="ml-3">
                        <p className="text-gray-900 whitespace-no-wrap">
                          {product?.name}
                        </p>
                        <p className="text-gray-400 text-xs">
                          {product.description}
                        </p>
                      </div>
                    </div>
                  </Column>
                  <Column>
                    <Typography.Paragraph>{product.price}</Typography.Paragraph>
                  </Column>
                  <Column>
                    <Tag>{product?.category?.name}</Tag>
                  </Column>
                  <Column className="text-left">
                    <Controls.Group>
                      <Controls.View onClick={() => {}} />
                      <Controls.Edit onClick={() => {}} />
                      <Controls.Remove onClick={() => {}} />
                    </Controls.Group>
                  </Column>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between">
            <span className="text-xs xs:text-sm text-gray-700">
              Showing {pagination.currentPage} to {pagination.lastPage} of
              {pagination.total} Entries
            </span>
            <div className="inline-flex mt-2 xs:mt-0">
              <button
                disabled={!pagination.hasPreviousPage}
                className="text-sm bg-gray-300 hover:bg-teal-600 hover:text-white text-gray-800 font-semibold py-2 px-4 rounded-l flex items-center"
              >
                <Icon.Previous />
                Prev
              </button>
              <button
                disabled={!pagination.hasNextPage}
                className="text-sm bg-gray-300 hover:bg-teal-600 hover:text-white text-gray-800 font-semibold py-2 px-4 rounded-r flex items-center"
              >
                Next
                <Icon.Next />
              </button>
            </div>
          </div>
        </div>
      </div>
    </Either>
  );
};

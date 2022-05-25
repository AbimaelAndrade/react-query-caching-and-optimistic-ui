import { HTMLAttributes } from "react";
import { Loading } from "../images";
import { Controls } from "./Controls";
import { Either } from "./Either";
import { Tag } from "./Tag";
import { Typography } from "./Typography";

type TableProps = {
  data: Product[];
  isLoading: boolean;
};

export const Table = ({ data, isLoading }: TableProps) => {
  return (
    <Either renderIf={!isLoading} orRender={<LoadingProducts />}>
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
                      <div>
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
                    <Tag>{product.category}</Tag>
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
        </div>
      </div>
    </Either>
  );
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

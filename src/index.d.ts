interface Category {
  id: number;
  name: string;
}

interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  price: number;
  category: Category;
}

interface Pagination {
  total: number;
  perPage: number;
  currentPage: number;
  lastPage: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
}

interface Response<T> extends Pagination {
  content: T;
}

interface ComponentProps {
  children?: React.ReactNode;
}

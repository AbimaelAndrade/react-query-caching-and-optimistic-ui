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

interface Response<T> {
  content: T;
  total: number;
  perPage: number;
  currentPage: number;
  lastPage: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
}

interface ComponentProps {
  children?: React.ReactNode;
}

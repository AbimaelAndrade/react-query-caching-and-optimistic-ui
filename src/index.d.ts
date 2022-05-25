interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
}

interface ComponentProps {
  children?: React.ReactNode;
}

import { Link } from 'react-router-dom';

export const Menu = ({ className }: Partial<Element>) => (
  <ul className={`menu ${className ?? ""}`}>
    <li>
      <Link to="fetch">
        Tradicional
      </Link>
    </li>
    <li>
      <Link to="react-query">
        Com React Query
      </Link>
    </li>
    <li>
      <Link to="/">
        Loja
      </Link>
    </li>
  </ul>
);

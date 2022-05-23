export const Menu = ({ className }: Partial<Element>) => (
  <ul className={`menu ${className ?? ""}`}>
    <li>
      <a>Tradicional</a>
    </li>
    <li>
      <a>Com React Query</a>
    </li>
    <li>
      <a>Loja</a>
    </li>
  </ul>
);

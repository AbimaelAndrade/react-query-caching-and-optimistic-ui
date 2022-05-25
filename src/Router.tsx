import { BrowserRouter, Switch, Route } from "react-router-dom";
import ProductsPage from "./pages/ProductsPage";

export const Router = () => {
  const baseURL = "/react-query-caching-and-optimistic-ui";

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={[`${baseURL}/`, `${baseURL}/products`]}>
          <ProductsPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

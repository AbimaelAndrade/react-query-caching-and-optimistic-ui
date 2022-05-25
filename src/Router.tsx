import { BrowserRouter, Switch, Route } from "react-router-dom";
import ProductsPage from "./pages/ProductsPage";
import { ViewProduct } from "./pages/ViewProduct";

export const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={["/", "/products"]}>
          <ProductsPage />
        </Route>
        <Route path="/products/:id">
          <ViewProduct />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

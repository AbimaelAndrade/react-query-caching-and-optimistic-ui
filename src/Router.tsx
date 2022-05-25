import { BrowserRouter, Switch, Route } from "react-router-dom";
import ProductsPage from "./pages/ProductsPage";

export const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={["/", "/products"]}>
          <ProductsPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

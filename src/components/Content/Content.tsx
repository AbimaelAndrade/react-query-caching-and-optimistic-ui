import { Route, Switch } from "react-router-dom";
import ProductsAdmin from "../../pages/ProductsAdmin/ProductsAdmin";
import { Store } from "../../pages/Store/Store";
import { Template } from "../Template/Template";


const Content = () => {
  return (
    <Template>
      <Switch>
        <Route exact path="/react-query">
          <ProductsAdmin />
        </Route>
        <Route exact path="/fetch">
          <ProductsAdmin />
        </Route>
        <Route exact path="/">
          <Store />
        </Route>
      </Switch>
    </Template>
  );
};

export default Content;

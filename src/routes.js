import { Switch, Route, BrowserRouter, Redirect } from "react-router-dom";
import { NotFound, Invoices, Invoice } from "./pages";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/invoice/:invoiceId" exact component={Invoice} />
        <Route path="/invoices" exact component={Invoices} />
        <Redirect exact from="/" to="/invoices" />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;

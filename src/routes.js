import { Switch, Route, BrowserRouter } from "react-router-dom";
import { NotFound, Invoices } from "./pages";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch> 
        <Route path="/" exact component={Invoices} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;

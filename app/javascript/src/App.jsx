import React, { useEffect, useState } from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { setAuthHeaders, registerIntercepts } from "./apis/axios";
import Products from "./components/Products";
import Cart from "./components/Cart";
import Order from "./components/Orders";
import ShowOrder from "./components/Orders/ShowOrder";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setAuthHeaders(setLoading);
    registerIntercepts();
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <Router>
      <ToastContainer />
      <Switch>
        <Route exact path="/" component={Products} />
        <Route exact path="/about" render={() => <div>About</div>} />
        <Route exact path="/items" component={Products} />
        <Route exact path="/carts/:cart_id/show" component={Cart} />
        <Route exact path="/placeorder" component={Order} />
        <Route exact path="/orders/:order_id/show" component={ShowOrder} />
      </Switch>
    </Router>
  );
};

export default App;

import React, { Suspense, lazy } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Cart from './pages/Cart';

const Home = lazy(() => import("./pages/Home"));
const Shop = lazy(() => import("./pages/Shop"));
// const Home = lazy(() => import("./pages/Home"));
// const Home = lazy(() => import("./pages/Home"));
// const Home = lazy(() => import("./pages/Home"));
// const LogIn = lazy(() => import("./pages/Login"));
const NoMatch = lazy(() => import("./pages/NoMatch"));

const App = () => {
  return (
    <Router>

      <Suspense
        fallback={
          <div className="flone-preloader-wrapper">
            <div className="flone-preloader">
              <span>loading...</span>
              <span>....</span>
            </div>
          </div>
        }
      >
        <Switch>

          <Route path="/shop">
            <Shop />
          </Route>
          <Route path="/cart/your_cart">
            <Cart />
          </Route>
          <Route path="/blog">

          </Route>
          {/* <Route path="/login">
            <LogIn />
          </Route> */}
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>

        </Switch>
      </Suspense>
    </Router>
  )
}

export default App

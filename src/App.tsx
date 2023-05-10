import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import "./scss/app.scss";
import Home from "./pages/Home";
import MainLayout from "./MainLayout";
import Loading from "./components/Loading";
import Info from "./pages/Info";

const Cart = React.lazy(() => import(/* webpackChunkName: "Cart"*/"./pages/Cart"));
const FullGuitars = React.lazy(() => import(/* webpackChunkName: "FullGuitars"*/"./pages/FullGuitars"));
const NotFound = React.lazy(() => import(/* webpackChunkName: "NotFound"*/"./pages/NotFound"));

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="" element={<Home />}></Route>
        <Route
          path="cart"
          element={
            <Suspense fallback={<Loading/>}>
              <Cart />
            </Suspense>
          }
        ></Route>
        <Route
          path="guitar/:id"
          element={
            <Suspense fallback={<Loading/>}>
              <FullGuitars />
            </Suspense>
          }
        ></Route>
        <Route
          path="info"
          element={
            <Suspense fallback={<Loading/>}>
              <Info/>
            </Suspense>
          }
        ></Route>
        <Route
          path="*"
          element={
            <Suspense fallback={<Loading/>}>
              <NotFound />
            </Suspense>
          }
        ></Route>
      </Route>
    </Routes>
  );
}

export default App;

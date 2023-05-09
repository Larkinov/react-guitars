import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import "./scss/app.scss";
import Home from "./pages/Home";
import MainLayout from "./MainLayout";

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
            <Suspense fallback={<div>Идет загрузка...</div>}>
              <Cart />
            </Suspense>
          }
        ></Route>
        <Route
          path="guitar/:id"
          element={
            <Suspense fallback={<div>Идет загрузка...</div>}>
              <FullGuitars />
            </Suspense>
          }
        ></Route>
        <Route
          path="*"
          element={
            <Suspense fallback={<div>Идет загрузка...</div>}>
              <NotFound />
            </Suspense>
          }
        ></Route>
      </Route>
    </Routes>
  );
}

export default App;

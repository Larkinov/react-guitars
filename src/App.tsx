import { Route, Routes } from "react-router-dom";
import "./scss/app.scss";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Cart from "./pages/Cart";
import FullGuitars from "./pages/FullGuitars";
import MainLayout from "./MainLayout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout/>}>
        <Route path="" element={<Home />}></Route>
        <Route path="cart" element={<Cart />}></Route>
        <Route path="guitar/:id" element={<FullGuitars />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Route>
    </Routes>
  );
}

export default App;

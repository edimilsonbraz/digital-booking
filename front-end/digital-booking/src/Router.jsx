import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Product } from "./pages/Product";
import { Register } from "./pages/Register/";
import { Reserva } from "./pages/Reserva";
import { ReservaSucedida } from "./pages/ReservaSucedida";
import { Category } from "./pages/Category";
import { ProdutoCadastrado } from "./pages/ProdutoCadastrado";
import { Search } from "./components/Search";


export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/produto/:id" element={<Product />} />
      <Route path="/produto/:id/reserva" element={<Reserva />} />
      <Route path="/produtos-por-categoria/:categoria" element={<Category />} />
      <Route path="/sucesso" element={<ReservaSucedida/>} />
      <Route path="/produtoCadastrado" element={<ProdutoCadastrado/>} />
    </Routes>
  )
}
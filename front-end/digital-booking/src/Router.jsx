import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Product } from "./pages/Product";
import { Register } from "./pages/Register/";
import { Reserva } from "./pages/Reserva";
import { ReservaSucedida } from "./pages/ReservaSucedida";
import { ProdutoCadastrado } from "./pages/ProdutoCadastrado";


export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/produto/:id" element={<Product />} />
      <Route path="/produto/:id/reserva" element={<Reserva />} />
      <Route path="/sucesso" element={<ReservaSucedida/>} />
      <Route path="/produtoCadastrado" element={<ProdutoCadastrado/>} />
    </Routes>
  )
}
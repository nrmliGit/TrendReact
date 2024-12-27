import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./pages/layouts/Layout";
import Favorites from "./components/layout/Favorites";
import CartField from "./components/layout/CartField";
import Main from "./components/layout/Main";
import Login from "./pages/LoginPage";
import Dashboard from "./pages/layouts/Dashboard";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="favorites" element={<Favorites />} />
          <Route path="cartField" element={<CartField />} />
        </Route>
        <Route path="loginPage" element={<Login />} />
        <Route path="dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

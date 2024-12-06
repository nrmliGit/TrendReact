import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./pages/layouts/Layout";
import Favorites from "./components/layout/Favorites";
import CartField from "./components/layout/CartField";
import ActionPages from "./pages/ActionPages";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* <Route path="/" element={<ActionPages/>}/> */}
          <Route path="favorites" element={<Favorites />} />
          <Route path="cartField" element={<CartField />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import ShopPage from "./pages/ShopPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import AboutPage from "./pages/AboutPage";
import { useDarkMode } from "./store/useDarkMode";

const App = () => {
  useDarkMode();

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<ShopPage />} />
        <Route path=":id" element={<ProductDetailPage />} />
        <Route path="about" element={<AboutPage />} />
      </Route>
    </Routes>
  );
};

export default App;

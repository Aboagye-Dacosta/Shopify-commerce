import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Shop from "./pages/Shop";
import ProductDetail from "./pages/ProductDetail";
import Category from "./pages/Category";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/shop" element={<Shop />}></Route>
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/products/category/:title" element={<Category />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

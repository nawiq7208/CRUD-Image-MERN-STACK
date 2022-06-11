import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductList from "./components/ProductList";
import AddProduct from "./components/AddProduct";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<ProductList/>}/>
      <Route path="/add" element={<AddProductList/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;

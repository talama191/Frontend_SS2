import ProductList from "./ProductPage/ProductList/ProductList";
import ProductPage from "./ProductPage/ProductPage";
import ProductDetailPage from "./ProductDetailPage/ProductDetailPage";
import Login from '../login/login'
import { Route, Routes } from "react-router-dom";
function Main() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<HomePage />}></Route>
                <Route path="/shop" element={<ProductPage />}></Route>
                <Route path="/cart" element={<ShoppingCart></ShoppingCart>}></Route>
            </Routes>
        </div>
    );
}
export default Main;
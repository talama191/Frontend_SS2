import ProductList from "./ProductPage/ProductList/ProductList";
import ProductPage from "./ProductPage/ProductPage";
import HomePage from "./HomePage/HomePage";
import Carousel from "./HomePage/Carousel/Carousel";
import ShoppingCart from "./ShoppingCart/ShoppingCart";
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
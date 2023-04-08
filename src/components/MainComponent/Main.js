import ProductList from "./ProductPage/ProductList/ProductList";
import ProductPage from "./ProductPage/ProductPage";
import { Route, Routes } from "react-router-dom";
import HomePage from "./HomePage/HomePage"
import Login from "../login/login";
import ShoppingCart from "./ShoppingCart/ShoppingCart"
import Signup from "../signup/signup";
import ProductDetailPage from "./ProductDetailPage/ProductDetailPage";
function Main() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<HomePage />}></Route>
                <Route path="/shop" element={<ProductPage />}></Route>
                <Route path="/cart" element={<ShoppingCart></ShoppingCart>}></Route>
                <Route path="/login" element={<Login></Login>}></Route>
                <Route path="/signup" element={<Signup></Signup>}></Route>
                <Route path="/product/:id" Component={ProductDetailPage} element={<ProductDetailPage></ProductDetailPage>}></Route>

            </Routes>
        </div>
    );
}
export default Main;
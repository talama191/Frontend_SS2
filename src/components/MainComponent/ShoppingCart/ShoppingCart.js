import ProductList from "../ProductPage/ProductList/ProductList";
import CartItem from "./CartItem";
import { useEffect, useState } from "react";
import useStore from "../../../context/cartStore";
import useCart from "../../../custom/useCart";
import { GetProductsByCartID, GetCurrentCartLine as GetCurrentCart, GetCartLinesByCartID, ClearCart, MakeOrder } from "../../../services/CartServices";

function ShoppingCart() {

    var cart_id = 0;
    const [cart, setCart] = useState({});
    const [cartLines, setCartLines] = useState([]);
    const removeFromCart = useStore(state => state.removeFromCart);
    const [totalPrice, setTotalPrice] = useState(0);
    // const clearCart = useStore(state => state.clearCart);
    const [updateValue, setUpdate] = useState(0);
    useEffect(() => {
        getCartForUser();
    }, [updateValue]);
    async function getCartForUser() {
        console.log("update");
        var response = await GetCurrentCart();
        cart_id = response.data.cart_id;
        setCart(response.data);
        if (response.data !== undefined) {
            const cart_lines_data = await GetCartLinesByCartID(response.data.cart_id).then((data) => {
                setCartLines(data.data);
                handlePriceChange(data.data);
            })
        }
    }

    function updateCartFunction() {
        setUpdate(updateValue + 1);
    }
    function handlePriceChange(cart_lines_data) {
        var total = 0;
        for (var i = 0; i < cart_lines_data.length; i++) {
            total += cart_lines_data[i].quantity * cart_lines_data[i].product.price;
        }
        setTotalPrice(total);
    }
    async function getCartLineByProductID(id) {
        for (var i = 0; i < cartLines.length; i++) {
            if (cartLines.id === id) {
                return cartLines[i];
            }
        }
    }
    async function clearCart() {
        const response = await ClearCart(cart.cart_id);
        updateCartFunction();
    }
    async function makeOrder() {
        const response = await MakeOrder(cart.cart_id);
        updateCartFunction();
    }
    return (
        <div>
            <section class="bg-light my-5">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-9">
                            <div class="card border shadow-0">
                                <div class="m-4">
                                    <h4 class="card-title mb-4">Your shopping cart</h4>
                                    {cartLines.map(cartLine => (
                                        <CartItem
                                            key={cartLine.product_id}
                                            {...cartLine}
                                            onPriceChange={handlePriceChange}
                                            onUpdateCart={updateCartFunction}
                                        />
                                    ))}
                                </div>

                                <div class="border-top pt-4 mx-4 mb-4">
                                    <p>
                                        <i class="fas fa-truck text-muted fa-lg"></i> Free Delivery
                                        within 1-2 weeks
                                    </p>
                                    <p class="text-muted">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                                        do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                        Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                        laboris nisi ut aliquip
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3">

                            <div class="card shadow-0 border">
                                <div class="card-body">
                                    <div class="d-flex justify-content-between">
                                        <p class="mb-2">Total price:</p>
                                        <p class="mb-2">${totalPrice.toFixed(2)}</p>
                                    </div>

                                    <div class="d-flex justify-content-between">
                                        <p class="mb-2">TAX:</p>
                                        <p class="mb-2" style={{ color: `red` }}>$0</p>
                                    </div>
                                    <hr />
                                    <div class="d-flex justify-content-between">
                                        <p class="mb-2">Final price:</p>
                                        <p class="mb-2 fw-bold">${(Number(totalPrice.toFixed(2))).toFixed(2)}</p>
                                    </div>

                                    <div class="mt-3">
                                        {cartLines.length !== 0 ? (
                                            <div>
                                                <a onClick={makeOrder} class="btn btn-success w-100 shadow-0 mb-2">
                                                    Make Order
                                                </a>
                                                <a onClick={clearCart} class="btn btn-danger w-100 shadow-0 mb-2">
                                                    Clear Cart
                                                </a>
                                            </div >) : (<div></div>)
                                        }

                                        <a href="#" class="btn btn-light w-100 border mt-2">
                                            Back to shop
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div class="container my-5">
                    <header class="mb-4">
                        <h3>Recommended items</h3>
                    </header>

                </div>
            </section>
        </div>)
}
export default ShoppingCart;


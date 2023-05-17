import ProductList from "../ProductPage/ProductList/ProductList";
import CartItem from "./CartItem";
import { useEffect, useState } from "react";
import useStore from "../../../context/cartStore";
import useCart from "../../../custom/useCart";
import { GetCartLinesByCartID, GetCurrentCartLine as GetCurrentCart } from "../../../services/CartServices";
import { GetProductByID } from "../../../services/Services";
function ShoppingCart() {

    // const [products, setProducts] = useState([]);
    // const [cartLines, setCartLines] = useState([]);
    var products_temp = [];
    var cartLines_temp = [];
    const [products, setProducts] = useState([]);
    const [cartLines, setCartLines] = useState([]);
    const removeFromCart = useStore(state => state.removeFromCart);
    const clearCart = useStore(state => state.clearCart);
    const [updateValue, setUpdate] = useState(0);
    useEffect(() => {
        getCartForUser();

    }, []);
    useEffect(() => {
        setProducts(products_temp);
        setCartLines(cartLines_temp);
        console.log(products);
        console.log(products_temp);
    }, [updateValue]);
    async function getCartForUser() {
        var response = await GetCurrentCart();
        if (response.data !== undefined) {
            await getCartLinesForUser(response.data.cart_id)
        }
    }
    async function getCartLinesForUser(cart_id) {
        const cart_lines_response = await GetCartLinesByCartID(cart_id);
        cartLines_temp = cart_lines_response.data;

        products_temp.splice(0, products_temp.length);
        for (var i = 0; i < cartLines_temp.length; i++) {
            var productResponse = await GetProductByID(cartLines_temp[i].product_id);
            products_temp.push(productResponse.response.data);
        }
        setUpdate(updateValue + 1);
        console.log(products_temp);
    }

    function clearCartFunction() {
        clearCart();
    }
    function handleQuantityChange(productId, newQuantity) {
        // setProducts(products => {
        //     return products.map(product => {
        //         if (product.id === productId) {
        //             return { ...product, quantity: newQuantity };
        //         }
        //         return product;
        //     });
        // });

    }
    const handleCartChange = (productId) => {
        // removeFromCart(productId);
        // setProducts((products) => {
        //     return products.filter((product) => product.id !== productId);
        // });
    };
    function handlePriceChange(productId, newPrice) {
        // setProducts(products => {
        //     return products.map(product => {
        //         if (product.id === productId) {
        //             return { ...product, totalPrice: newPrice };
        //         }
        //         return product;
        //     });
        // });
    }
    const totalPrices = products_temp.reduce((total, product) => {
        // return total + product.totalPrice;
        return 0;
    }, 0);
    function getCartLineByProductID(id) {
        for (var i = 0; i < cartLines.length; i++) {
            if (cartLines.id === id) {
                return cartLines[i];
            }
        }
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
                                    {products.map(product => (
                                        <CartItem
                                            key={product.id}
                                            {...product}
                                            onQuantityChange={handleQuantityChange}
                                            onPriceChange={handlePriceChange}
                                            onRemove={handleCartChange}
                                            cartLine={getCartLineByProductID(product.id)}
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
                                        <p class="mb-2">${totalPrices.toFixed(2)}</p>
                                    </div>

                                    <div class="d-flex justify-content-between">
                                        <p class="mb-2">TAX:</p>
                                        <p class="mb-2" style={{ color: `red` }}>${(Number(totalPrices.toFixed(2)) * 10 / 100)}</p>
                                    </div>
                                    <hr />
                                    <div class="d-flex justify-content-between">
                                        <p class="mb-2">Final price:</p>
                                        <p class="mb-2 fw-bold">${(Number(totalPrices.toFixed(2)) + (Number(totalPrices.toFixed(2)) * 10 / 100)).toFixed(2)}</p>
                                    </div>

                                    <div class="mt-3">
                                        <a href="#" class="btn btn-success w-100 shadow-0 mb-2">
                                            Make Order
                                        </a>
                                        <a href="" onClick={clearCartFunction} class="btn btn-danger w-100 shadow-0 mb-2">
                                            Clear Cart
                                        </a>
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


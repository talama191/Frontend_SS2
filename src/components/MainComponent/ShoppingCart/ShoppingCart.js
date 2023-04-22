import ProductList from "../ProductPage/ProductList/ProductList";
import CartItem from "./CartItem";
import { useState } from "react";
import useStore from "../../../context/cartStore";
import useCart from "../../../custom/useCart";
function ShoppingCart() {

    const [products, setProducts] = useState(useStore((state) => state.products));



    // const [products, setProducts] = useState([
    //     {
    //         id: 1, imgSrc: "assets/images/items/10.webp",
    //         name: "T-shirts with multiple colors, for men and lady", type: ["yellow", "XL"], quantity: 4, price: '19.99', totalPrice: 0
    //     },
    //     {
    //         id: 2, imgSrc: "assets/images/items/10.webp",
    //         name: "T-shirts with multiple colors, for men and lady", type: ["yellow", "XL"], quantity: 1, price: '6.99', totalPrice: 0
    //     },
    //     {
    //         id: 3, imgSrc: "assets/images/items/10.webp",
    //         name: "T-shirts with multiple colors, for men and lady", type: ["yellow", "XL"], quantity: 3, price: '16.29', totalPrice: 0
    //     },
    // ]);
    const removeFromCart = useStore(state => state.removeFromCart);

    function handleQuantityChange(productId, newQuantity) {
        console.log('asda');

        setProducts(products => {
            return products.map(product => {
                if (product.id === productId) {
                    return { ...product, quantity: newQuantity };
                }
                return product;
            });
        });

    }
    const handleCartChange = (productId) => {
        removeFromCart(productId);
        setProducts((products) => {
            return products.filter((product) => product.id !== productId);
        });
    };
    function handlePriceChange(productId, newPrice) {
        setProducts(products => {
            return products.map(product => {
                if (product.id === productId) {
                    return { ...product, totalPrice: newPrice };
                }
                return product;
            });
        });
    }
    const totalPrices = products.reduce((total, product) => {
        return total + product.totalPrice;
    }, 0);
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
                                        <p class="mb-2" style={{ color: `red` }}>$14.00</p>
                                    </div>
                                    <hr />
                                    <div class="d-flex justify-content-between">
                                        <p class="mb-2">Final price:</p>
                                        <p class="mb-2 fw-bold">${(Number(totalPrices.toFixed(2)) + 14).toFixed(2)}</p>
                                    </div>

                                    <div class="mt-3">
                                        <a href="#" class="btn btn-success w-100 shadow-0 mb-2">
                                            Make Purchase
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


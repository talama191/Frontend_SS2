import React from "react";
import { useEffect, useState } from "react";
function CartItem(props) {
    const [selectedQuantity, setSelectedQuantity] = useState(props.quantity);
    const [totalPrice, setTotalPrice] = useState((selectedQuantity * Number(props.price)).toFixed(2));
    const type = props.type.join(", ");
    function handleQuantityChange(event) {
        const quantity = event.target.value;
        setSelectedQuantity(quantity);
    }

    useEffect(() => {
        const pricePerItem = Number(props.price);
        const totalPrice = (selectedQuantity * pricePerItem).toFixed(2);
        setTotalPrice(totalPrice);
        props.onPriceChange(props.id, Number(totalPrice));
    }, [selectedQuantity, props.price]);

    return (
        <div class="row gy-3 mb-4">
            <div class="col-lg-5">
                <div class="me-lg-5">
                    <div class="d-flex">
                        <img
                            src={props.imgSrc}
                            class="border rounded me-3"
                            style={{ width: `96px`, height: `96px` }}
                        />
                        <div class="">
                            <a href="#" class="nav-link"
                            >{props.name}</a
                            >
                            <p class="text-muted">{type}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div
                class="col-lg-2 col-sm-6 col-6 d-flex flex-row flex-lg-column flex-xl-row text-nowrap"
            >
                <div class="">
                    <select style={{ width: `100px` }} class="form-select me-4" value={selectedQuantity} onChange={handleQuantityChange}>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                    </select>
                </div>
                <div class="">
                    <text class="h6">${totalPrice}</text> <br />
                    <small class="text-muted text-nowrap">
                        {props.price} / per item
                    </small>
                </div>
            </div>
            <div
                class="col-lg col-sm-6 d-flex justify-content-sm-center justify-content-md-start justify-content-lg-center justify-content-xl-end mb-2"
            >
                <div class="float-md-end">
                    <a
                        href="#!"
                        class="btn btn-light border px-2 icon-hover-primary"
                    ><i class="fas fa-heart fa-lg px-1 text-secondary"></i
                    ></a>
                    <a
                        href="#"
                        class="btn btn-light border text-danger icon-hover-danger"
                    >
                        Remove</a
                    >
                </div>
            </div>
        </div>
    );

}
export default CartItem;
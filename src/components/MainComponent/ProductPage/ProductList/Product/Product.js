import { Link } from "react-router-dom";
import useStore from "../../../../../context/cartStore";

function Product(props) {
    const addToCart = useStore((state) => state.addToCart)

    const handleAddToCart = () => {
        const product = {
            id: props.id,
            name: props.name,
            price: props.price,
            imgSrc: props.img1,
            quantity: 1,
            type: ["yellow", "XL"],
        }
        addToCart(product)
    }

    return (
        <div class="col-lg-4 col-md-6 col-sm-6" key={props.id}>
            <figure class="card card-product-grid">
                <div class="img-wrap">
                    <img style={{ width: `100%` }} src={props.img1} />
                </div>
                <figcaption class="info-wrap border-top">
                    <div class="price-wrap">
                        <strong class="price">${props.price}</strong>
                    </div>
                    <Link to={`/product/${props.id}`} class="title mb-2">
                        {props.name}
                    </Link>

                    <button onClick={handleAddToCart} class="btn btn-primary">
                        Add to cart
                    </button>
                    <a href="#" class="btn btn-light btn-icon">
                        {' '}
                        <i class="fa fa-heart"></i>{' '}
                    </a>
                </figcaption>
            </figure>
        </div>
    )
}

export default Product
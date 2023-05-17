import { useEffect, useState } from "react";
import ProductList from "../ProductPage/ProductList/ProductList";
import Slider from '../Slider/Slider'
import { useParams } from "react-router";
import { GetProductByID } from "../../../services/Services";

function ProductDetailPage() {
    const { id } = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        getProduct(id);
    }, []);
    async function getProduct(id) {
        try {
            var result = await GetProductByID(id);
            setProduct(result.response.data);
        } catch (error) {
            console.log(error);
        }
    }
    
    if (!product) {
        return <div>Loading...</div>;
    }
    return (
        <div className="home-section">
            <section class="bg-primary py-5">
                <div class="container">
                    <h2 class="text-white">Men's wear</h2>
                    <ol class="breadcrumb ondark mb-0">
                        <li class="breadcrumb-item"><a href="#">Home</a></li>
                        <li class="breadcrumb-item"><a href="#">Category</a></li>
                        <li class="breadcrumb-item active" aria-current="page">Sport</li>
                    </ol>
                </div>
            </section>
            <div class="container-mid">
            </div>
            <section class="padding-y">
                <div class="container">

                    <div class="row">
                        <aside class="col-lg-6">
                            <article class="gallery-wrap">
                                <div class="img-big-wrap img-thumbnail">
                                    <Slider key={product.id}
                                        {...product} />
                                </div>
                            </article>
                        </aside>
                        <main class="col-lg-6">
                            <article class="ps-lg-3">
                                <h4 class="title text-dark">{product.name}</h4>
                                <div class="rating-wrap my-3">
                                    <ul class="rating-stars">
                                        <li style={{ width: "80%" }} class="stars-active"> <img src="assets/images/misc/stars-active.svg" alt="" /> </li>
                                        <li> <img src="assets/images/misc/starts-disable.svg" alt="" /> </li>
                                    </ul>
                                    <b class="label-rating text-warning">4.5</b>
                                    <i class="dot"></i>
                                    <span class="label-rating text-muted"> <i class="fa fa-shopping-basket"></i> 154 orders </span>
                                    <i class="dot"></i>
                                    <span class="label-rating text-success">In stock</span>
                                </div>

                                <div class="mb-3">
                                    <var class="price h5">{product.price}</var>
                                    <span class="text-muted">/per box</span>
                                </div>

                                <p>{product.long_description}</p>

                                <dl class="row">
                                    <dt class="col-3">Type:</dt>
                                    <dd class="col-9">Regular</dd>

                                    <dt class="col-3">Color</dt>
                                    <dd class="col-9">Brown</dd>

                                    <dt class="col-3">Material</dt>
                                    <dd class="col-9">Cotton, Jeans </dd>

                                    <dt class="col-3">Brand</dt>
                                    <dd class="col-9">Reebook </dd>
                                </dl>

                                <hr />

                                <div class="row mb-4">
                                    <div class="col-md-4 col-6 mb-3">
                                        <label class="form-label d-block">Quantity</label>
                                        <div class="input-group input-spinner">
                                            <button class="btn btn-icon btn-light" type="button">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#999" viewBox="0 0 24 24">
                                                    <path d="M19 13H5v-2h14v2z"></path>
                                                </svg>
                                            </button>
                                            <input class="form-control text-center" placeholder="" value="1" />
                                            <button class="btn btn-icon btn-light" type="button">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#999" viewBox="0 0 24 24">
                                                    <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path>
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <a href="#" class="btn  btn-primary"> <i class="me-1 fa fa-shopping-basket"></i> Add to cart </a>
                            </article>
                        </main>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default ProductDetailPage;
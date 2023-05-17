import ProductList from "../ProductPage/ProductList/ProductList";
import Carousel from "./Carousel/Carousel";

function HomePage() {
    return (
        <div>
            <Carousel></Carousel>
            <section>
                <div class="container pt-5">
                    <nav class="row gy-4">
                        <div class="col-lg-6 col-md-12">
                            <div class="row">

                                <div class="col-3">
                                    <a
                                        href="#"
                                        class="text-center d-flex flex-column justify-content-center"
                                    >
                                        <button
                                            type="button"
                                            class="btn btn-outline-secondary mx-auto p-3 mb-2"
                                            data-mdb-ripple-color="dark"
                                        >
                                            <i class="fas fa-basketball-ball fa-xl fa-fw"></i>
                                        </button>
                                        <div class="text-dark">Sport Clothes</div>
                                    </a>
                                </div>
                                <div class="col-3">
                                    <a
                                        href="#"
                                        class="text-center d-flex flex-column justify-content-center"
                                    >
                                        <button
                                            type="button"
                                            class="btn btn-outline-secondary mx-auto p-3 mb-2"
                                            data-mdb-ripple-color="dark"
                                        >
                                            <i class="fas fa-ring fa-xl fa-fw"></i>
                                        </button>
                                        <div class="text-dark">Accessories</div>
                                    </a>
                                </div>
                                <div class="col-3">
                                    <a
                                        href="#"
                                        class="text-center d-flex flex-column justify-content-center"
                                    >
                                        <button
                                            type="button"
                                            class="btn btn-outline-secondary mx-auto p-3 mb-2"
                                            data-mdb-ripple-color="dark"
                                        >
                                            <i class="fas fa-clock fa-xl fa-fw"></i>
                                        </button>
                                        <div class="text-dark">Order</div>
                                    </a>
                                </div>
                            </div>
                        </div>

                    </nav>
                </div>
            </section>
        </div>
    )



}
export default HomePage;
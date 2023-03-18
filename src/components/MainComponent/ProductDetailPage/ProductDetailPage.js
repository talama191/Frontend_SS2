import ProductList from "../ProductPage/ProductList/ProductList";

function ProductDetailPage(){
    return(
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
            {/* <div class="container mt-5">
                <div class="row">
                    <div class="col-md-12"> HOME &GT CATEGORY &GT MEN &GT SPORT </div>
                </div>
            </div> */}
            <div class="container-mid">

            </div>
            
            <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active"> <img class="d-block w-100" src="assets/images/detailPg/slide1.jpg" alt="First slide" /> </div>
                            <div class="carousel-item"> <img class="d-block w-100" src="assets/images/detailPg/slide22.jpg" alt="Second slide" /> </div>
                        </div>
                        <a class="carousel-control-prev" src="" href="#carouselExampleControls" role="button" data-slide="prev"> <span class="carousel-control-prev-icon" aria-hidden="true"></span> <span class="sr-only">Previous</span> </a> <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next"> <span class="carousel-control-next-icon" aria-hidden="true"></span> <span class="sr-only">Next</span> </a> </div>
                </div>
                <div class="col-md-6">
                    <div class="row">
                        <h2>Mens Sport Pants</h2>
                    </div>
                    <div class="row">
                        <h1><i class="fa-solid fa-dollar-sign" aria-hidden="true"></i> 9</h1>
                        &nbsp; &nbsp;
                        <h3><del>30</del></h3>
                        &nbsp; &nbsp;
                        <h2 class="text-success">30% off</h2>
                    </div>
                    <div class="row">
                        <h3 class="text-warning"><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i> <i class="fa fa-star-half-o" aria-hidden="true"></i><i class="fa fa-star-o" aria-hidden="true"></i></h3>
                        &nbsp; &nbsp;
                        <h5>100 reviews</h5>
                    </div>
                    <div class="row">
                        <p><i class="far fa-check-square" aria-hidden="true"></i> <strong>Promotions</strong> Free delivery orders starting at $30</p>
                        <p><i class="far fa-check-square" aria-hidden="true"></i> <strong>Promotions</strong> Gratis returns are accepted within 30 days of the purchase. </p>
                    </div>
                    <div class="row mt-4">
                        <h3 class="text-info"><i class="fas fa-map-marker-alt" aria-hidden="true"></i></h3>
                        <p> &nbsp; Delivery by 25 February, Sat | &nbsp; <span class="text-success">FREE</span> </p>
                    </div>
                    <div class="row mt-4">
                        <h4>Size: &nbsp; &nbsp;</h4>
                        <div class="dropdown show"> <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Select sizes </a>
                            <div class="dropdown-menu" aria-labelledby="dropdownMenuLink"> <a class="dropdown-item" href="#">small</a> <a class="dropdown-item" href="#">meduam </a> <a class="dropdown-item" href="#">large</a> </div>
                        </div>
                    </div>
                    <div class="row mt-4">
                        <h4>Colors: &nbsp; &nbsp; </h4>

                        <a class="btn btn-primary text-light">Sky Blue</a> &nbsp; <a class="btn btn-danger text-light"> red</a>&nbsp; <a class="btn btn-info text-light"> blue </a> &nbsp; <a class="btn btn-warning text-light"> yellow</a> &nbsp; <a class="btn btn-success text-light"> green</a>
                    </div>

                    <div class="row mt-4">
                        <h4>Seller: &nbsp; &nbsp;</h4>
                        <p>Antony </p>
                    </div>

                    <div class="row mt-4">
                        <a href="#" class="btn btn-primary btn-lg disabled" role="button" aria-disabled="true" ><i class="fas fa-cart-plus"> Add to cart</i></a>
                    </div>

                    <div class="row mt-4">
                        <button ><i class="far fa-heart"></i> Add to favorite</button>
                    </div>

                </div>
            </div>
        </div>
        <div class="container">
                <div class="row mt-5">
                    <h2>Similar Products</h2>
                </div>

                <div class="row mt-5">

                    <ProductList />
                    
                    <div class="col-md-3">
                        <div class="card">
                            <img class="card-img-top img-fluid" src="assets/images/detailPg/menrv.png" />
                            <div class="card-title">
                                <h4>Product 1</h4>
                            </div>
                            <div class="card-text">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae fugiat et voluptate sunt officia vero molestias.<br /><br />
                                <a class="btn btn-success text-light"> Buy Now</a> &nbsp; <a class="btn btn-danger text-light"><i class="fa fa-cart-plus" aria-hidden="true"></i>  Add To Cart</a> <br /><br />
                            </div>

                        </div>
                    </div>


                    <div class="col-md-3">
                        <div class="card">
                            <img class="card-img-top img-fluid" src="assets/images/detailPg/wm.png" />
                            <div class="card-title">
                                <h4>Product 2</h4>
                            </div>
                            <div class="card-text">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae fugiat et voluptate sunt officia vero molestias.<br /><br />
                                <a class="btn btn-success text-light"> Buy Now</a> &nbsp; <a class="btn btn-danger text-light"><i class="fa fa-cart-plus" aria-hidden="true"></i>  Add To Cart</a> <br /><br />
                            </div>
                        </div>
                    </div>


                    <div class="col-md-3">
                        <div class="card">
                            <img class="card-img-top img-fluid" src="assets/images/detailPg/wm.png" />
                            <div class="card-title">
                                <h4>Product 3</h4>
                            </div>
                            <div class="card-text">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae fugiat et voluptate sunt officia vero molestias.<br /><br />
                                <a class="btn btn-success text-light"> Buy Now</a> &nbsp; <a class="btn btn-danger text-light"><i class="fa fa-cart-plus" aria-hidden="true"></i>  Add To Cart</a> <br /><br />
                            </div>

                        </div>
                    </div>

                    <div class="col-md-3">
                        <div class="card">
                            <img class="card-img-top img-fluid" src="/assets/images/detailPg/menrv.png" />
                            <div class="card-title">
                                <h4>Product 4</h4>
                            </div>
                            <div class="card-text">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae fugiat et voluptate sunt officia vero molestias.<br /><br />
                                <a class="btn btn-success text-light"> Buy Now</a> &nbsp; <a class="btn btn-danger text-light"><i class="fa fa-cart-plus" aria-hidden="true"></i>  Add To Cart</a> <br /><br />
                            </div>
                        </div>
                    </div>
                </div>


            </div>
            <div class="container mt-5 mb-5">
                <div class="row">
                    <h2>Ratings & Reviews</h2>
                </div>

                <div class="row mt-5 mb-5">
                    <div class="media">
                        <img class="mr-3" src="assets/images/detailPg/wm.png" alt="Generic placeholder image" />
                        <div class="media-body">
                            <h5 class="mt-0">Very nice product. <span class="text-warning"><i class="fa fa-star" aria-hidden="true"></i> <i class="fa fa-star" aria-hidden="true"></i> <i class="fa fa-star" aria-hidden="true"></i> <i class="fa fa-star-half-o" aria-hidden="true"></i> <i class="fa fa-star-o" aria-hidden="true"></i> </span></h5>
                            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                        </div>
                    </div>
                </div>

                <div class="row mb-5">
                    <div class="media"> <img class="mr-3" src="assets/images/detailPg/menrv.png" alt="Generic placeholder image" />
                        <div class="media-body">
                            <h5 class="mt-0">Best product best material.<span class="text-warning"><i class="fa fa-star" aria-hidden="true"></i> <i class="fa fa-star" aria-hidden="true"></i> <i class="fa fa-star" aria-hidden="true"></i> <i class="fa fa-star" aria-hidden="true"></i> <i class="fa fa-star" aria-hidden="true"></i> </span></h5>
                            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. </div>
                    </div>
                </div>


                <div class="row mb-5">
                    <div class="media"> <img class="mr-3" src="assets/images/detailPg/wm.png" alt="Generic placeholder image" />
                        <div class="media-body">
                            <h5 class="mt-0"> Bad product.dont take this<span class="text-warning"><i class="fa fa-star" aria-hidden="true"></i> <i class="fa fa-star" aria-hidden="true"></i> <i class="fa fa-star-o" aria-hidden="true"></i> <i class="fa fa-star-o" aria-hidden="true"></i> <i class="fa fa-star-o" aria-hidden="true"></i> </span></h5>
                            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. </div>
                    </div>
                </div>


                <div class="row mb-5">
                    <div class="media"> <img class="mr-3" src="assets/images/detailPg/menrv.png" alt="Generic placeholder image" />
                        <div class="media-body">
                            <h5 class="mt-0">really nice product,value for money.<span class="text-warning"><i class="fa fa-star" aria-hidden="true"></i> <i class="fa fa-star" aria-hidden="true"></i> <i class="fa fa-star" aria-hidden="true"></i> <i class="fa fa-star-half-o" aria-hidden="true"></i> <i class="fa fa-star-o" aria-hidden="true"></i> </span></h5>
                            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. </div>
                    </div>
                </div>

                <div class="row mb-5">
                    <h2> Post Your Own Reviews</h2>
                </div>


                <form>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Reviews</label>
                        <textarea type="text" class="form-control" id="exampleInputtextarea" placeholder="write your own reviews" rows="3"></textarea>
                    </div>
                    <div class="form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                        <label class="form-check-label" for="exampleCheck1">Check me out</label>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>

            </div>
    </div>
    );
}

export default ProductDetailPage;
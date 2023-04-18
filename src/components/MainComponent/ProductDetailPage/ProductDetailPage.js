import { useEffect, useState } from "react";
import ProductList from "../ProductPage/ProductList/ProductList";
import Slider from '../Slider/Slider'
import { useParams } from "react-router";

function ProductDetailPage() {
    const { id } = useParams();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/products')
            .then(response => response.json())
            .then(data => {
                setProducts(data.data);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    const product = products.find((p) => p.id === parseInt(id));
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
            {/* <div class="container mt-5">
                <div class="row">
                    <div class="col-md-12"> HOME &GT CATEGORY &GT MEN &GT SPORT </div>
                </div>
            </div> */}
            <div class="container-mid">

            </div>

            {/* <section class="bg-primary padding-y-sm">
          <div class="container">
          
              <ol class="breadcrumb ondark mb-0">
              <li class="breadcrumb-item"><a href="#">Home</a></li>
              <li class="breadcrumb-item"><a href="#">Library</a></li>
              <li class="breadcrumb-item active" aria-current="page">Data</li>
              </ol>
          
          </div> 
          </section> */}



            <section class="padding-y">
                <div class="container">

                    <div class="row">
                        <aside class="col-lg-6">
                            <article class="gallery-wrap">
                                <div class="img-big-wrap img-thumbnail">
                                    {/* <a data-fslightbox="mygalley" data-type="image" href="assets/images/items/10.webp"> 
                  <img height="560" src="assets/images/items/10.webp"/> 
              </a> */}
                                    <Slider key={product.id}
                                        {...product} />
                                </div>
                                {/* <div class="thumbs-wrap">
              <a data-fslightbox="mygalley" data-type="image" href="assets/images/items/10.webp" class="item-thumb"> 
              <img width="60" height="60" src="assets/images/items/10.webp"/> 
              </a>
              <a data-fslightbox="mygalley" data-type="image" href="assets/images/items/10.webp" class="item-thumb"> 
              <img width="60" height="60" src="assets/images/items/10.webp"/>  
              </a>
              <a data-fslightbox="mygalley" data-type="image" href="assets/images/items/10.webp" class="item-thumb"> 
              <img width="60" height="60" src="assets/images/items/10.webp"/>  
              </a>
              <a data-fslightbox="mygalley" data-type="image" href="assets/images/items/10.webp" class="item-thumb"> 
              <img width="60" height="60" src="assets/images/items/10.webp"/>  
              </a>
              <a data-fslightbox="mygalley" data-type="image" href="assets/images/items/10.webp" class="item-thumb"> 
              <img width="60" height="60" src="assets/images/items/10.webp"/>  
              </a>
              </div>  */}
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

                                <p>Modern look and quality demo item is a streetwear-inspired collection that continues to break away from the conventions of mainstream fashion. Made in Italy, these black and brown clothing low-top shirts for men.</p>

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
                                    <div class="col-md-4 col-6 mb-2">
                                        <label class="form-label">Size</label>
                                        <select class="form-select">
                                            <option>Small</option>
                                            <option>Medium</option>
                                            <option>Large</option>
                                        </select>
                                    </div>
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

                                <a href="#" class="btn  btn-warning"> Buy now </a>
                                <a href="#" class="btn  btn-primary"> <i class="me-1 fa fa-shopping-basket"></i> Add to cart </a>
                                <a href="#" class="btn  btn-light"> <i class="me-1 fa fa-heart"></i> Save </a>

                            </article>
                        </main>
                    </div>

                </div>
            </section>

            <section class="padding-y bg-light border-top">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-8">

                            <div class="card">
                                <header class="card-header">
                                    <ul class="nav nav-tabs card-header-tabs">
                                        <li class="nav-item">
                                            <a href="#" data-bs-target="#tab_specs" data-bs-toggle="tab" class="nav-link active">Specification</a>
                                        </li>
                                        <li class="nav-item">
                                            <a href="#" data-bs-target="#tab_warranty" data-bs-toggle="tab" class="nav-link">Warranty info</a>
                                        </li>
                                        <li class="nav-item">
                                            <a href="#" data-bs-target="#tab_shipping" data-bs-toggle="tab" class="nav-link">Shipping info</a>
                                        </li>
                                        <li class="nav-item">
                                            <a href="#" data-bs-target="#tab_seller" data-bs-toggle="tab" class="nav-link">Seller profile</a>
                                        </li>
                                    </ul>
                                </header>
                                <div class="tab-content">
                                    <article id="tab_specs" class="tab-pane show active card-body">
                                        <p>With supporting text below as a natural lead-in to additional content. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
                                        <ul class="list-check cols-two">
                                            <li>Some great feature name here </li>
                                            <li>Lorem ipsum dolor sit amet, consectetur </li>
                                            <li>Duis aute irure dolor in reprehenderit </li>
                                            <li>Optical heart sensor </li>
                                            <li>Easy fast and ver good </li>
                                            <li>Some great feature name here </li>
                                            <li>Modern style and design</li>
                                        </ul>
                                        <table class="table border table-hover">
                                            <tr>
                                                <th>  Display: </th> <td> 13.3-inch LED-backlit display with IPS </td>
                                            </tr>
                                            <tr>
                                                <th>  Processor capacity: </th> <td> 2.3GHz dual-core Intel Core i5 </td>
                                            </tr>
                                            <tr>
                                                <th>  Camera quality: </th> <td>720p FaceTime HD camera  </td>
                                            </tr>
                                            <tr>
                                                <th>  Memory </th> <td> 8 GB RAM or 16 GB RAM </td>
                                            </tr>
                                            <tr>
                                                <th>  Graphics </th> <td> Intel Iris Plus Graphics 640 </td>
                                            </tr>
                                        </table>
                                    </article>
                                    <article id="tab_warranty" class="tab-pane card-body">
                                        Tab content or sample information now <br />
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                                        proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                    </article>
                                    <article id="tab_shipping" class="tab-pane card-body">
                                        Another tab content  or sample information now <br />
                                        Dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                                        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                    </article>
                                    <article id="tab_seller" class="tab-pane card-body">
                                        Some other tab content  or sample information now <br />
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                        cillum dolore eu fugiat nulla pariatur.  Excepteur sint occaecat cupidatat non
                                        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                    </article>
                                </div>
                            </div>

                        </div>
                        <aside class="col-lg-4">

                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title">Similar items</h5>

                                    <article class="itemside mb-3">
                                        <a href="#" class="aside">
                                            <img src="assets/images/items/8.webp" width="96" height="96" class="img-md img-thumbnail" />
                                        </a>
                                        <div class="info">
                                            <a href="#" class="title mb-1"> Rucksack Backpack Large <br /> Line Mounts </a>
                                            <strong class="price"> $38.90</strong>
                                        </div>
                                    </article>

                                    <article class="itemside mb-3">
                                        <a href="#" class="aside">
                                            <img src="assets/images/items/9.webp" width="96" height="96" class="img-md img-thumbnail" />
                                        </a>
                                        <div class="info">
                                            <a href="#" class="title mb-1"> Summer New Men's Denim <br /> Jeans Shorts  </a>
                                            <strong class="price"> $29.50</strong>
                                        </div>
                                    </article>

                                    <article class="itemside mb-3">
                                        <a href="#" class="aside">
                                            <img src="assets/images/items/10.webp" width="96" height="96" class="img-md img-thumbnail" />
                                        </a>
                                        <div class="info">
                                            <a href="#" class="title mb-1"> T-shirts with multiple colors, for men and lady </a>
                                            <strong class="price"> $120.00</strong>
                                        </div>
                                    </article>

                                    <article class="itemside mb-3">
                                        <a href="#" class="aside">
                                            <img src="assets/images/items/11.webp" width="96" height="96" class="img-md img-thumbnail" />
                                        </a>
                                        <div class="info">
                                            <a href="#" class="title mb-1"> Blazer Suit Dress Jacket for Men, Blue color </a>
                                            <strong class="price"> $339.90</strong>
                                        </div>
                                    </article>

                                </div>
                            </div>

                        </aside>
                    </div>

                    <br /><br />

                </div>
            </section>


            {/* <div class="container">
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
        </div> */}
            {/* <div class="container">
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

            </div> */}
        </div>
    );
}

export default ProductDetailPage;
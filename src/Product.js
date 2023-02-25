function Product(props) {
    return (

        <div class="col-lg-4 col-md-6 col-sm-6">
            <figure class="card card-product-grid">
                <div class="img-wrap">
                    <img src={props.imgSrc} />
                </div>
                <figcaption class="info-wrap border-top">
                    <div class="price-wrap">
                        <strong class="price">${props.price}</strong>
                        <del class="price-old">${props.price - 15}</del>
                    </div>
                    <p class="title mb-2">{props.name}</p>

                    <a href="#" class="btn btn-primary">Add to cart</a>
                    <a href="#" class="btn btn-light btn-icon"> <i class="fa fa-heart"></i> </a>
                </figcaption>
            </figure>
        </div>

    )
}
export default Product;
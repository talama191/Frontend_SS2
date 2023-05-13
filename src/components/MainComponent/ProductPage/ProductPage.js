import ProductList from "./ProductList/ProductList";

// import 'rc-slider/assets/index.css';
import { useState } from "react";
import PriceRange from "../Slider/PriceRange/PriceRange";


function ProductPage() {
    const [sortOption, setSortOption] = useState('default');
    let sortedProducts = [];
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(100);
    const [filterApplied, setFilterApplied] = useState(false);

    const handleFilterClick = () => {
        setFilterApplied(true);

    };
    const handlePriceRangeChange = (minPrice, maxPrice) => {
        setMinPrice(minPrice);
        setMaxPrice(maxPrice);
    };
    const resetFilter = () => {
        setMinPrice(0);
        setMaxPrice(100);
        setFilterApplied(false);
    };
    const handleSortChange = (event) => {
        setSortOption(event.target.value);
    };
    const sortProducts = (products) => {
        switch (sortOption) {
            case 'low-to-high':
                return sortedProducts = products.slice().sort((a, b) => a.price - b.price);
            case 'high-to-low':
                return sortedProducts = products.slice().sort((a, b) => b.price - a.price);
            default:
                return sortedProducts = products;
        }
    };
    return (
        <div className="home-section">


            <section class="bg-primary py-5">
                <div class="container">
                    <h2 class="text-white">Men's wear</h2>
                    <ol class="breadcrumb ondark mb-0">
                        <li class="breadcrumb-item"><a href="#">Home</a></li>
                        <li class="breadcrumb-item"><a href="#">Library</a></li>
                        <li class="breadcrumb-item active" aria-current="page">Data</li>
                    </ol>
                </div>
            </section>



            <section class="padding-y">
                <div class="container">

                    <div class="row">
                        <aside class="col-lg-3">

                            <button class="btn btn-outline-secondary mb-3 w-100  d-lg-none" data-bs-toggle="collapse" data-bs-target="#aside_filter">Show filter</button>


                            <div id="aside_filter" class="collapse card d-lg-block mb-5">

                                <article class="filter-group">
                                    <header class="card-header">
                                        <a href="#" class="title" data-bs-toggle="collapse" data-bs-target="#collapse_aside1">
                                            <i class="icon-control fa fa-chevron-down"></i>Related items
                                        </a>
                                    </header>
                                    <div class="collapse show" id="collapse_aside1">
                                        <div class="card-body">
                                            <ul class="list-menu">
                                                <li><a href="#">Men's clothes </a></li>
                                                <li><a href="#">Women's clothes  </a></li>
                                                <li><a href="#">Acessories </a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </article>

                                <article class="filter-group">
                                    <header class="card-header">
                                        <a href="#" class="title" data-bs-toggle="collapse" data-bs-target="#collapse_aside_brands">
                                            <i class="icon-control fa fa-chevron-down"></i>  Brands
                                        </a>
                                    </header>
                                    <div class="collapse show" id="collapse_aside_brands">
                                        <div class="card-body">
                                            <label class="form-check mb-2">
                                                <input class="form-check-input" type="checkbox" value="" checked />
                                                <span class="form-check-label"> Mercedes </span>
                                                <b class="badge rounded-pill bg-gray-dark float-end">120</b>
                                            </label>

                                            <label class="form-check mb-2">
                                                <input class="form-check-input" type="checkbox" value="" checked />
                                                <span class="form-check-label"> Toyota </span>
                                                <b class="badge rounded-pill bg-gray-dark float-end">15</b>
                                            </label>

                                            <label class="form-check mb-2">
                                                <input class="form-check-input" type="checkbox" value="" checked />
                                                <span class="form-check-label"> Mitsubishi </span>
                                                <b class="badge rounded-pill bg-gray-dark float-end">35</b>
                                            </label>

                                            <label class="form-check mb-2">
                                                <input class="form-check-input" type="checkbox" value="" checked />
                                                <span class="form-check-label"> Nissan </span>
                                                <b class="badge rounded-pill bg-gray-dark float-end">89</b>
                                            </label>

                                            <label class="form-check mb-2">
                                                <input class="form-check-input" type="checkbox" value="" />
                                                <span class="form-check-label"> Honda </span>
                                                <b class="badge rounded-pill bg-gray-dark float-end">30</b>
                                            </label>

                                            <label class="form-check mb-2">
                                                <input class="form-check-input" type="checkbox" value="" />
                                                <span class="form-check-label"> Honda accord </span>
                                                <b class="badge rounded-pill bg-gray-dark float-end">30</b>
                                            </label>
                                        </div>
                                    </div>
                                </article>

                                <article class="filter-group">
                                    <header class="card-header">
                                        <a href="#" class="title" data-bs-toggle="collapse" data-bs-target="#collapse_aside2">
                                            <i class="icon-control fa fa-chevron-down"></i>  Price
                                        </a>
                                    </header>
                                    <div class="collapse show" id="collapse_aside2">
                                        <div>
                                            <PriceRange onPriceRangeChange={handlePriceRangeChange}></PriceRange>
                                            <button className="btn w-100" type="button" onClick={resetFilter}>Reset</button>
                                            <button class="btn w-100" type="button" onClick={handleFilterClick} >Apply</button>
                                        </div>
                                    </div>
                                </article>

                                <article class="filter-group">
                                    <header class="card-header">
                                        <a href="#" class="title" data-bs-toggle="collapse" data-bs-target="#collapse_aside3">
                                            <i class="icon-control fa fa-chevron-down"></i>  Size
                                        </a>
                                    </header>
                                    <div class="collapse show" id="collapse_aside3">
                                        <div class="card-body">
                                            <label class="checkbox-btn">
                                                <input type="checkbox" />
                                                <span class="btn btn-light"> XS </span>
                                            </label>

                                            <label class="checkbox-btn">
                                                <input type="checkbox" />
                                                <span class="btn btn-light"> SM </span>
                                            </label>

                                            <label class="checkbox-btn">
                                                <input type="checkbox" />
                                                <span class="btn btn-light"> LG </span>
                                            </label>

                                            <label class="checkbox-btn">
                                                <input type="checkbox" />
                                                <span class="btn btn-light"> XXL </span>
                                            </label>
                                        </div>
                                    </div>
                                </article>



                            </div>


                        </aside>
                        <main class="col-lg-9">

                            <header class="d-sm-flex align-items-center border-bottom mb-4 pb-3">
                                <strong class="d-block py-2">32 Items found </strong>
                                <div class="ms-auto ">
                                    <select class="form-select d-inline-block w-auto me-1" value={sortOption} onChange={handleSortChange} >
                                        <option value="default">Default</option>
                                        <option value="low-to-high">Ascending</option>
                                        <option value="high-to-low">Descending</option>
                                    </select>
                                    <div class="btn-group">
                                        <a href="#" class="btn btn-light" data-bs-toggle="tooltip" title="List view">
                                            <i class="fa fa-bars"></i>
                                        </a>
                                        <a href="#" class="btn btn-light active" data-bs-toggle="tooltip" title="Grid view">
                                            <i class="fa fa-th"></i>
                                        </a>
                                    </div>
                                </div>
                            </header>


                            <div class="row">
                                <ProductList sortProducts={sortProducts} minPrice={minPrice} maxPrice={maxPrice} filterApplied={filterApplied} />



                            </div>

                            <hr />



                        </main>
                    </div>
                </div>
            </section>


        </div>


    );
}
export default ProductPage;

import { Link, NavLink, useParams } from "react-router-dom";
import { GetProducts, GetTotalPageForSearch, SearchProduct } from "../../../../service/Services";
import Product from "./Product/Product";
import React, { useState, useEffect } from 'react';
import { SearchFilter } from "../../../../models/SearchFilter";

function ProductList({ sortProducts, perPage, pageNum, filterApplied, minPrice, maxPrice }) {
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(pageNum);
    const [productsPerPage, setProductsPerPage] = useState(perPage);
    const [totalPage, setTotalPage] = useState(1);
    var currentProducts;
    var totalPages = 1;
    useEffect(() => {
        
    }, []);
    async function searchProducts() {
        let filter = new SearchFilter("", perPage, pageNum - 1);
        filter.sortType = "asc";
        filter.sortField = "price";
        try {
            const result = await SearchProduct(filter);
            const totalPageResult = await GetTotalPageForSearch(filter);
            setProducts(result.response.data)
            setTotalPage(totalPageResult.response.data);
            setCurrentPage(pageNum);
        } catch (error) {
            console.error(error);
        }
    }
    searchProducts();
    // Filter and sort products
    let filteredProducts = products;
    if (filterApplied) {
        filteredProducts = products.filter(
            (product) => product.price >= minPrice && product.price <= maxPrice
        );
    }

    console.log(pageNum);
    currentProducts = products;
    totalPages = totalPage;


    return (
        <>
            <div className="row">
                {currentProducts.map((product) => (
                    <Product key={product.id} {...product} />
                ))}
            </div>
            <nav>
                <ul className="pagination justify-content-center">
                    {Array.from({ length: totalPages }, (_, i) => (
                        <li key={i} className={`page-item ${i + 1 === parseInt(currentPage) ? 'active' : ''}`}>
                            <NavLink to={`/products/${i + 1}/${perPage}`}>
                                <button className="page-link" >
                                    {i + 1}
                                </button>
                            </NavLink>

                        </li>
                    ))}
                </ul>
            </nav>
        </>
    );
}

export default ProductList;

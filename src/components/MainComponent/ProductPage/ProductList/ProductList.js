
import { Link, NavLink, useParams } from "react-router-dom";
import { GetProducts, GetTotalPageForSearch, SearchProduct } from "../../../../service/Services";
import Product from "./Product/Product";
import React, { useState, useEffect, memo } from 'react';
import { SearchFilter } from "../../../../models/SearchFilter";

function ProductList({ perPage, pageNum, filterApplied, minPrice, maxPrice }) {
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(pageNum);
    const [totalPage, setTotalPage] = useState(1);
    var totalPages = 1;
    useEffect(() => {
        searchProducts(perPage, pageNum);
    }, []);
    async function searchProducts(perPage, pageNum) {
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

    // Filter and sort products
    let filteredProducts = products;
    if (filterApplied) {
        filteredProducts = products.filter(
            (product) => product.price >= minPrice && product.price <= maxPrice
        );
    }

    console.log(pageNum);
    totalPages = totalPage;


    return (
        <>
            <div className="row">
                {products.map((product) => (
                    <Product key={product.id} {...product} />
                ))}
            </div>
            <nav>
                <ul className="pagination justify-content-center">
                    {Array.from({ length: totalPages }, (_, i) => (
                        <li key={i} className={`page-item ${i + 1 === parseInt(currentPage) ? 'active' : ''}`}>
                            <NavLink to={`/products/${i + 1}/${perPage}`}>
                                <button className="page-link" onClick={() => {
                                    // setCurrentPage(i + 1);
                                    searchProducts(perPage, i + 1);
                                }
                                }>
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


export default memo(ProductList);

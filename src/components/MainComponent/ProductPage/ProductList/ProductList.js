
import { Link, NavLink, useParams } from "react-router-dom";
import { GetProducts, GetTotalPageForSearch, SearchProduct } from "../../../../service/Services";
import Product from "./Product/Product";
import React, { useState, useEffect, memo, useContext } from 'react';
import { globalSearchFilter } from "../../../../GlobalVariables";

function ProductList(props) {
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(props.pageNum);
    const [totalPage, setTotalPage] = useState(1);
    const searchFilter = useContext(globalSearchFilter);
    var totalPages = 1;
    useEffect(() => {
        searchProducts(props.perPage, props.pageNum);
        console.log(props);
    }, [props.update]);
    async function searchProducts(perPage, pageNum) {
        searchFilter.perPage  = perPage;
        searchFilter.pageNum = pageNum - 1;
        try {
            const result = await SearchProduct(searchFilter);
            const totalPageResult = await GetTotalPageForSearch(searchFilter);
            setProducts(result.response.data)
            setTotalPage(totalPageResult.response.data);
            setCurrentPage(pageNum);
        } catch (error) {
            console.error(error);
        }
    }
    console.log("rerender product list")

    // Filter and sort products
    // let filteredProducts = products;
    // if (filterApplied) {
    //     filteredProducts = products.filter(
    //         (product) => product.price >= minPrice && product.price <= maxPrice
    //     );
    // }

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
                            <NavLink to={`/products/${i + 1}/${props.perPage}`}>
                                <button className="page-link" onClick={() => {
                                    // setCurrentPage(i + 1);
                                    searchProducts(props.perPage, i + 1);
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

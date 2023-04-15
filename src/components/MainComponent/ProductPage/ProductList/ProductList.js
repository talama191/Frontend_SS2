import Product from "./Product/Product";
import React, { useState, useEffect } from 'react';

function ProductList({ sortProducts, filterApplied, minPrice, maxPrice }) {
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage, setProductsPerPage] = useState(6);

    useEffect(() => {
        async function fetchProducts() {
            try {
                const response = await fetch('http://localhost:8080/products');
                const data = await response.json();
                setProducts(data.data);
            } catch (error) {
                console.error(error);
            }
        }

        fetchProducts();
    }, []);

    // Filter and sort products
    let filteredProducts = products;
    if (filterApplied) {
        filteredProducts = products.filter(
            (product) => product.price >= minPrice && product.price <= maxPrice
        );
    }
    const sortedProducts = sortProducts(filteredProducts);

    // Pagination
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = sortedProducts.slice(indexOfFirstProduct, indexOfLastProduct);
    const totalPages = Math.ceil(sortedProducts.length / productsPerPage);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

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
                        <li key={i} className={`page-item ${i + 1 === currentPage ? 'active' : ''}`}>
                            <button onClick={() => paginate(i + 1)} className="page-link">
                                {i + 1}
                            </button>
                        </li>
                    ))}
                </ul>
            </nav>
        </>
    );
}

export default ProductList;

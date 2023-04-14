import Product from "./Product/Product";
import React, { useState, useEffect } from 'react';
function ProductList({ sortProducts, filterApplied, minPrice, maxPrice }) {
    const [products, setProducts] = useState([]);

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

    let filteredProducts = products;
    if (filterApplied) {
        filteredProducts = products.filter(
            (product) => product.price >= minPrice && product.price <= maxPrice
        );
    }

    const sortedProducts = sortProducts(filteredProducts);

    return (
        <div className="row">
            {sortedProducts.map((product) => (
                <Product key={product.id} {...product} />
            ))}
        </div>
    );
}

export default ProductList;



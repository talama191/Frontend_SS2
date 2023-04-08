import Product from "./Product/Product";
import React, { useState, useEffect } from 'react';
function ProductList({ sortProducts }) {

    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:8080/Products')
            .then(response => response.json())
            .then(data => {
                setProducts(data);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);
    const sortedProducts = sortProducts(products);

    return (
        <div className="row">
            {sortedProducts.map((product) => (
                <Product key={product.id} {...product} />
            ))}
        </div>
    );
}
export default ProductList;
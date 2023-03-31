import Product from "./Product/Product";
import React, { useState, useEffect } from 'react';
function ProductList() {

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
    console.log(products)
    return (
        <div className="row">
            {products.map((product) => (
                <Product key={product.id} {...product} />
            ))}
        </div>
    );
}
export default ProductList;
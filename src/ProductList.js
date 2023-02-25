import Product from "./Product";
function ProductList() {
    const products = [
        {
            id: 1,
            imgSrc: "assets/images/items/10.webp",
            name: "T-shirts with multiple colors, for men and lady",
            price: 99,
            oldPrice: 170,
        },
        {
            id: 2,
            imgSrc: "assets/images/items/11.webp",
            name: "Winter Jacket for Men and Women, All sizes",
            price: 120,
            oldPrice: null,
        },
        {
            id: 3,
            imgSrc: "assets/images/items/12.webp",
            name: "T-shirts with multiple colors, for men and lady",
            price: 120,
            oldPrice: null,
        },
    ];

    return (
        <div className="row">
            {products.map((product) => (
                <Product key={product.id} {...product} />
            ))}
        </div>
    );
}
export default ProductList;
const ProductList = ({ products }) => {
    return (
        <div>
            <ul>
                {products.map((product) =>(
                    <li key={product.id}> { product.title } - { product.price } </li>
                ))}
            </ul>
        </div>
    )
}

export default ProductList
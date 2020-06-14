import React from "react"
import axios from "axios"

import styles from "./Products.module.css"
import ProductPrice from "./ProductPrice"


function ProductList() {
    const [products, setProducts] = React.useState([]);

    React.useEffect(() => {
        axios.get("http://localhost:1234/products")
            .then((res) => {
                setProducts(res.data)
            })
            .catch(err => {
                console.log('API ERROR: ', err)
            })
    }, []);

    return (
        <div className={styles.products_container}>
            <div className={styles.product_list}>
                {products.map(p => (
                    <ProductDetails product={p}/>
                ))}
            </div>
        </div>
    )
}

function ProductDetails({product}) {
    return (
        <div className={styles.product_details} key={product.id}>
            {/*<img height="100" src={product.image}/>*/}
            <span>
                <SimpleProductName value={product.productName}/>
            </span>
            <span>
                <ProductPrice value={product.price}/>
            </span>
        </div>
    )
}

function SimpleProductName({value}) {
    return <span>{value}</span>
}

function XProductName({value}) {
    return <span style={{color: "yellow"}}>{value}</span>
}

export default ProductList;

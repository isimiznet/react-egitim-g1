import React from "react"
import axios from "axios"

import styles from "./Products.module.css"
import ProductPrice from "./ProductPrice"
import {useSelector} from "react-redux";
import {useBasketActions} from "../../store/action";


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
                    <ProductDetails key={p.id} product={p}/>
                ))}
            </div>
        </div>
    )
}

function ProductDetails({product}) {
    let basketCounts = useSelector(state => state.basketCounts);
    let productBasketCount = basketCounts[product.id];

    const [basket, setBasket] = React.useState(1);

    let {addBasketItem} = useBasketActions();

    const onBtnClick = () => {
        addBasketItem(product, basket)
    };

    const onBasketChange = e => {
        setBasket(parseInt(e.target.value))
    };

    return (
        <div className={styles.product_details} key={product.id}>
            {/*<img height="100" src={product.image}/>*/}
            <span>
                <SimpleProductName value={product.productName}/>
            </span>
            <span>
                <ProductPrice value={product.price}/>
            </span>
            <input value={basket} onChange={onBasketChange}/>
            <button onClick={onBtnClick}>Sepete Ekle</button>
            {productBasketCount ? (
                <span style={{color: "green"}}>Sepete {productBasketCount} adet eklediniz</span>
            ) : null}
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

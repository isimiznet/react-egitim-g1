import React from "react"
import {Link} from "react-router-dom";
import {useBasketActions} from "../../store/action";
import {useBasket, useBasketCounts} from "../../store/selector";

function Basket() {

    let basketCounts = useBasketCounts();
    let basket = useBasket();
    let {removeBasketItem} = useBasketActions();

    const onRemoveClick = (product) => {
        return () => {
            removeBasketItem(product);
        }
    };

    return (
        <div style={{width: "100%", display: "flex", alignItems: "center", flexDirection: "column"}}>
            <table style={{width: "1024px", border: "1px solid orange", padding: "10px", marginBottom: "10px"}}>
                <tbody>
                {basket.length > 0 ? (
                    basket.map(product => (
                        <tr key={product.id}>
                            <td>{product.productName}</td>
                            <td>{product.price}</td>
                            <td>{basketCounts[product.id]}</td>
                            <td>
                                <button onClick={onRemoveClick(product)}>X</button>
                            </td>
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td>Sepetiniz boştur</td>
                    </tr>
                )}
                </tbody>
            </table>
            <Link to="/">Alışverişe Devam Et</Link>
        </div>

    )
}

export default Basket;

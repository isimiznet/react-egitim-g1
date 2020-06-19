import React from "react";
import {Link} from "react-router-dom";
import {useBasketTotalCount} from "../store/selector";


function BasketCount() {
    let totalCount = useBasketTotalCount();

    return <Link to="/basket">Sepet: {totalCount}</Link>
}

export default BasketCount;

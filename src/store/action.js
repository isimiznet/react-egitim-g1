import {useDispatch} from "react-redux";

export function useBasketActions() {
    const dispatch = useDispatch();

    return {
        addBasketItem(product, count) {
            dispatch({
                type: "ADD_BASKET_ITEM",
                product: product,
                count: count
            })
        },
        removeBasketItem(product) {
            dispatch({
                type: "REMOVE_BASKET_ITEM",
                product: product
            })
        }
    }
}

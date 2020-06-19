import {useSelector} from "react-redux";


export function useBasketTotalCount() {
    let count = useSelector(state => {
        let basketCount = Object.keys(state.basketCounts)
            .map(key => state.basketCounts[key])
            .reduce((total, item) => total + item, 0);

        return basketCount;
    });

    return count;
}

export function useBasket() {
    return useSelector(state => state.basket);
}

export function useBasketCounts() {
    return useSelector(state => state.basketCounts);
}

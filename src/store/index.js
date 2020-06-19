import {createStore} from "redux";

const INITIAL_STATE = {
    basketCounts: {},
    basket: []
};

function addBasket(state, action) {
    let basketCounts = state.basketCounts;
    let basket = state.basket;

    let product = action.product;


    let productCount = basketCounts.hasOwnProperty(product.id) ? basketCounts[product.id] + action.count : action.count;

    if (!basket.some(p => p.id === product.id)) {
        basket = [
            ...basket,
            product
        ]
    }

    state = {
        ...state,
        basketCounts: {
            ...basketCounts,
            [product.id]: productCount
        },
        basket: basket
    };
    return state;
}

function removeBasket(state, action) {

    let basketCounts = state.basketCounts;
    let basket = state.basket;
    let product = action.product;

    basketCounts = {
        ...basketCounts
    };
    delete basketCounts[product.id];

    basket = basket.filter(p => p.id !== product.id);


    return {
        ...state,
        basketCounts: {
            ...basketCounts
        },
        basket: basket
    }
}

const store = createStore(function (state, action) {
    console.log("STATE: ", state, "ACTION: ", action);

    switch (action.type) {
        case "ADD_BASKET_ITEM":
            state = addBasket(state, action);
            break;
        case "REMOVE_BASKET_ITEM":
            state = removeBasket(state, action);
            break;
        case "CLEAR_BASKET":
            break;
    }

    if (!state) {
        if (sessionStorage.getItem("app_basket")) {
            state = JSON.parse(sessionStorage.getItem("app_basket"))
        } else {
            state = INITIAL_STATE;
        }
    } else {
        sessionStorage.setItem("app_basket", JSON.stringify(state))
    }

    console.log('FINAL STATE: ', state);

    return state;
});

export default store;

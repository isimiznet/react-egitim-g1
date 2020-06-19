import React from "react"
import {BrowserRouter, Route, Switch, useHistory} from "react-router-dom";
import ProductList from "./pages/product/ProductList";
import Register from "./pages/register/Register";
import {Redirect} from "react-router";
import styles from "./App.module.css";
import {Provider} from "react-redux";
import store from "./store"
import BasketCount from "./components/BasketCount";
import Basket from "./pages/basket/Basket"

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <div className={styles.menu}>
                    <div className={styles.menu_items}>
                        <RegisterButton/>
                        <div style={{marginLeft: "auto"}}>
                            <BasketCount/>
                        </div>
                    </div>
                </div>
                <Switch>
                    <Redirect exact from="/" to="/product-list"/>
                    <Route path="/product-list" component={ProductList}/>
                    <Route path="/register" component={Register}/>
                    <Route path="/basket" component={Basket} />
                </Switch>
            </BrowserRouter>
        </Provider>
    )
}

function RegisterButton() {
    let history = useHistory();

    const onButtonClick = () => {
        history.push("/register");
    };

    return (
        <button onClick={onButtonClick}>ÜYE OL</button>
    )
}

export default App;

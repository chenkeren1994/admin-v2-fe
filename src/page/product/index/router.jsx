/**
 * Created by seal on 2/1/18.
 */
import React from 'react'
import {BrowserRouter as Router, Redirect, Switch, Route, Link} from 'react-router-dom'
import Login from 'page/login/index.jsx'
import ProductList from 'page/product/index/index.jsx'
import ProductSave from 'page/product/index/save.jsx'
import ProductDetail from 'page/product/index/detail.jsx'
import ProductCategory from 'page/product/category/index.jsx'
import CategoryAdd from 'page/product/category/add.jsx'

class ProductRouter extends React.Component{
    render(){
        return(
            <Switch>
                <Route path="/product/index" component={ProductList} />
                <Route path="/product/save/:pid?" component={ProductSave} />
                <Route path="/product/detail/:pid" component={ProductDetail}/>
                <Route path="/product-category/index/:categoryId?" component={ProductCategory}/>
                <Route path="/product-category/add" component={CategoryAdd} />


                <Redirect exact from="/product" to="/product/index" />
                <Redirect exact from="/product-category" to="/product-category/index" />
            </Switch>
        )
    }
}
export default ProductRouter
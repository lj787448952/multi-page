import React from 'react';
import {HashRouter,Route,Switch} from "react-router-dom";
import FirstPage from "./FirstPage";
import SecondPage from "./SecondPage";
import Layout from "./Layout";
import Home from "./Home";

const App=()=>{
    return(
        <HashRouter>
            <Switch>
            <Route path="/Home" component = {Home}/>
                <Layout>
                    <Route path="/second" component = {SecondPage}/>
                    <Route path="/first" component = {FirstPage}/>
                </Layout>
            </Switch>
        </HashRouter>
    )
}
export default App;
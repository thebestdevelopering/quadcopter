import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Home from "./pages/HomePage";
import AddProduct from "./pages/ProfilePages/AddProduct";
import SignInPage from "./pages/SignInPage/SignInPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import EditProduct from "./pages/ProfilePages/EditProduct";

import MainPagesProduct from "./pages/HomePage/MainPagesProduct";


function App() {
 
  
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/signup" exact>
            <SignUpPage />
          </Route>
          <Route path="/signin">
            <SignInPage />
          </Route>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/addproduct" exact>
            <AddProduct />
          </Route>
          <Route path="/editproduct" exact>
            <EditProduct />
          </Route>
          <Route path="/t" exact>
          <MainPagesProduct/>
          </Route>
         
          {/* <Redirect to="/signin" /> */}
         
          
        </Switch>
      </BrowserRouter>
    );
  }


export default App;

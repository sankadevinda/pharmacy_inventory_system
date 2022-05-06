
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NavbarPage from './Pages/NavbarPage';
import Product from './Components/Product';

import Header from "./headers/Header";
import { useState,useEffect } from "react";
import axios from "axios";

import { Carousel } from 'react-responsive-carousel';

import './App.css'

import Footer from "./Pages/Footer";



function App() {

  
  return (
    <Router>
      




 


   
      <Switch>
    
     

                
                  <Route  exact  path='/' component={Header}/>
                  <Route    path='/nav' component={NavbarPage}/>
                   <Route   path='/Product' component={Product}/>
                  
                 


              
                </Switch>
               
              
               
                <Footer/>
                
    </Router>
   


  );
}

export default App;

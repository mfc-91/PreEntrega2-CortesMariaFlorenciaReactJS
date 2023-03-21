import React, { useState, useContext } from "react";
import "./App.css";

import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Footer from "./components/Footer";
import CarritoState from "./context/Carrito/CarritoState";
import Home from "./pages/Home";

export default function App() {
    return (
        <>
			<Routes>
				<Route path="/" element={ 
					<CarritoState>
						<NavBar /> 
						<Home />
						<Footer />
					</CarritoState>			
				} />
				<Route path="/categories" element={
						<CarritoState>
							<NavBar /> 
							<Home />
							<Footer />
						</CarritoState>			
				} />
				<Route path="/item" element={ 
						<CarritoState>
							<NavBar /> 
							<ProductDetail />
							<Footer />
						</CarritoState>			
				} />
				<Route path="/cart" element={
					<CarritoState>
						<NavBar /> 
						<Cart />
						<Footer />
					</CarritoState>		
				} />
			</Routes>
        </>
    );
}

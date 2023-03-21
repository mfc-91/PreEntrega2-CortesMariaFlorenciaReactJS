import React, { useContext } from "react";
import CarritoContext from "../context/Carrito/CarritoContext";


const NavBar = ( props ) => {
	const { contador } = useContext(CarritoContext);

    return (
        <>
		<nav className="navbar navbar-expand-md navbar-light fixed-top bg-light">
			<div className="container-fluid">
				<ul className="nav float-left">
					<a className="nav-link active custom-link" href="/"> 
						<h4 className="pt-1"> <i className="fa-solid fa-store"></i>&nbsp;&nbsp;ecommerce floppy </h4>
					</a>
					{/* <li className="nav-item pt-2" ><a className="nav-link custom-link" href="/about">about</a></li>		 */}
				</ul>

				<form className="d-flex">
					<a className="nav-link active custom-link" href="/cart">
						<h5 className="custom-link">
							<i className="fa-solid fa-cart-shopping"></i>&nbsp;&nbsp;
							{/* <span id="items-cart">{cart.length} &nbsp;items </span>  */}
							<span id="items-cart">{contador} &nbsp;items </span> 
						</h5>
					</a>
				</form>

			</div>
		</nav>
        </>
    );
};
export default NavBar;

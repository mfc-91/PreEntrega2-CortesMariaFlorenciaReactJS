import React from 'react'
import "./Cart.css"

const Cart = () => {

	function btnTest(){

		console.log('DESA click:' );

	}



    return (
        <>
            <div className="container marketing mt-5">
                <div className="row">
            	<h1>Cart Page</h1>


					<button
						id="btn-buy"
						style={{ width: "120px" }}
						className="btn btn-outline-light outline-custom   "  
						onClick={() => btnTest() }
					>
						<b>Test</b>{" "}
					</button> 
				</div>
            </div>
        </>
    );
}

export default Cart
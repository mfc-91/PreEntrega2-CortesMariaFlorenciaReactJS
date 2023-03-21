import React, { useState, useEffect } from 'react';
import { useSearchParams } from "react-router-dom";
import "./ProductDetail.css";
import datajson from "../database/products.json";

//
const ProductDetail = () => {
    const [searchParams, setSearchParams] = useSearchParams();
	const id = searchParams.get("id")

	const [data, setData] = useState({});
	useEffect(() => {
		const found =  datajson.products.find(element => element.id ===  parseInt(id) );
		setData(found )
	 }, []);


	function changeImage(e) {
		setData( {...data, thumbnail: e} )
	}
	
	function increaseNumber(e){
		console.log(e );
	}

	function decreaseNumber(e){
		console.log(e );
	}


	function processBuy() {
		console.log('processBuy');
		// Swal.fire({
		// 	title: "aviso",
		// 	text: "compra procesada!",
		// 	confirmButtonColor: "#1477d2",
		// 	confirmButtonText: "accept",
		// 	showCancelButton: true,
		// 	allowOutsideClick: false,
		// 	cancelButtonColor: "#a1a1a1",
		// 	cancelButtonText: "cancel",
		// 	customClass: "white-background",
		// }).then(function (e) {
		// 	if (e.isConfirmed) {
		// 		new swal({
		// 			toast: true,
		// 			position: "top-end",
		// 			showConfirmButton: false,
		// 			timer: 6000,
		// 			icon: "success",
		// 			title: "compra confirmada!",
		// 			showCloseButton: true,
		// 		});
		// 		data = { ...data, qty: parseInt(qtyTobuy.value) };
		// 		arr_products = [];
		// 		arr_products.push(data);
		// 		console.log("BUY:", arr_products);
		// 		// EJECUTAR API COBRO
		// 	}
		// });
	}



	function processBasket() {
		console.log('processBasket');
		// //localStorage.clear();
		// let arr = [];
		// arr = JSON.parse(localStorage.getItem("CART"));
		// data = { ...data, qty: parseInt(qtyTobuy.value) };
		// if (!arr || arr.length === 0) {
		// 	arr = [];
		// 	console.log("CART vacio:");
		// }
	
		// const isPresent = arr.some((o) => o.id === data.id);
		// if(isPresent) {
		// 	alert('ya existe el producto')
		// }else arr.push(data);
	
	
	
		// // console.log("id:", data.id);
		// // console.log("CART:", arr);
		// // const isPresent = arr.some((o) => o.id === data.id);
		// // console.log("isPresent:", isPresent);
		// // arr.push(data);
	
		// localStorage.setItem("CART", JSON.stringify(arr));
	
		// cartUpdate();
	}
	



	 console.log('DESA return:', data );

	 return (
        <> 
			{ ('id' in data) && 
				<div className="container marketing mt-5">

						<div className="container mt-5 mb-5">
							<div className="card">
								<div className="row g-0">
									<div className="col-md-6 border-end">
										<div className="d-flex flex-column justify-content-center">
											<div className="main_image">

												<img src={ data.thumbnail ? data.thumbnail : "img//300.png" } 
													id="main-product-image" width="350" alt=""/> 

											</div>
											<div className="thumbnail_images">
												<ul id="thumbnail">
													<li>
														<img
															onClick={() => changeImage(data.images[0])}
															src={ data.images[0] ? data.images[0] : "img//300.png" } 
															width="80" alt=""

														/>
													</li>
													<li>
														<img
															onClick={() => changeImage(data.images[1])}
															src={ data.images[1] ? data.images[1] : "img//300.png" } 
															width="80" alt=""
														/>
													</li>
													<li>
														<img
															onClick={() => changeImage(data.images[2])}
															src={ data.images[2] ? data.images[2] : "img//300.png" } 
															width="80" alt=""
														/>
													</li>
													<li>
														<img
															onClick={() => changeImage(data.images[3])}
															src={ data.images[3] ? data.images[3] : "img//300.png" } 
															width="80" alt=""
														/>
													</li>
												</ul>
											</div>
										</div>
									</div>
									<div className="col-md-6">
										<div className="p-3 right-side">
											<div className="d-flex justify-content-between align-items-center">
												<h3>
													<span id="main-product-title">{data.title}</span>
												</h3>{" "}
												<span className="heart">
													<i className="bx bx-heart"></i>
												</span>
											</div>
											<div className="mt-2 pr-3 content">
												<p id="main-product-description">{data.description}</p>
											</div>
											<h3>
												$<span id="main-product-price">  {data.price}  </span>
											</h3>
											<div className="ratings d-flex flex-row align-items-center">
												<div className="d-flex flex-row">
													{" "}
													<i className="bx bxs-star"></i> <i className="bx bxs-star"></i>{" "}
													<i className="bx bxs-star"></i> <i className="bx bxs-star"></i>{" "}
													<i className="bx bx-star"></i>{" "}
												</div>{" "}
												<span>441 reviews</span>
											</div>

											<div className="mt-4">
												<ul className="pagination justify-content-start set_quantity">
													<li className="page-item">
														<button
															className="page-link "
															onClick={() => decreaseNumber('qty-tobuy' ) }
														>
															<i className="fas fa-minus"></i>{" "}
														</button>
													</li>
													<li className="page-item">
														<input
															type="text"
															name=""
															className="page-link"
															defaultValue="0"
															id="qty-tobuy"
														/>
													</li>
													<li className="page-item">
														<button
															className="page-link"
															onClick={() => increaseNumber('qty-tobuy' ) }
														>
															<i className="fas fa-plus"></i>
														</button>
													</li>
												</ul>
											</div>

											<div style={{ height: "150px" }}></div>
											<div className="buttons d-flex flex-row mt-5 gap-3 mb-4">
												<button
													id="btn-buy"
													style={{ width: "160px" }}
													className="btn btn-outline-dark outline-custom text-uppercase "
													onClick={() => processBuy() }
												>
													<b>Buy Now</b>{" "}
												</button>
												<button
													id="btn-basket"
													style={{ width: "160px" }}
													className="btn btn-outline-dark outline-custom text-uppercase "
													onClick={() => processBasket() }
												>
													<b>Add to Basket</b>{" "}
												</button>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div> 


				</div>
				
			}
        </>
    );
};
export default ProductDetail;



    // console.log("ID:", searchParams.get("id"));
    // const { id, thumbnail, title, description, price } = data.products[0];
    // const obj = { id, thumbnail, title, description, price };
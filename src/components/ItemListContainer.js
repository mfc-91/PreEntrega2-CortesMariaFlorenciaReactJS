import React, { useContext, useEffect, useState, useRef   } from "react";
import datajson from "../database/products.json";
import CategorySelector from "../components/CategorySelector";
import ItemList from "./ItemList";
import { useSearchParams } from "react-router-dom";

import "./ItemListContainer.css";
//import CarritoContext from "../context/Carrito/CarritoContext";



const ItemListContainer = () => {
	const [searchParams, setSearchParams] = useSearchParams();
	const id = searchParams.get("id")
	
	// TODO: filtrar si no es null 

	console.log("desa:", id  );

	const [data, setData] = useState([]);
	useEffect(() => {
		setData(datajson.products)
		// document.title = `You clicked ${count} times`;
	}, []);

  return (
	<>
		<div className="container marketing pt-0 mt-5 mb-5">
			<CategorySelector />
			{
				data && data.length > 0 && 	
					<ItemList data={ data }/>
			}
		</div>
	</>
  )
}
export default ItemListContainer 

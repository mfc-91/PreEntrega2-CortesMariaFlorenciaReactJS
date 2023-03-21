import React, { useReducer } from "react";

import CarritoContext from "./CarritoContext";
import CarritoReducer from "./CarritoReducer";
import { CANTIDAD_SET } from "../types";

const initialState = { count: 0 };

const CarritoState = (props) => {
	const [state, dispatch] = useReducer(CarritoReducer, initialState);
 
    const cantidad_set =  (value) => {
		dispatch({ type: CANTIDAD_SET, payload: value })
    };

    return (
        <CarritoContext.Provider
            value={{
                contador: state.count,
				cantidad_set  
            }}
        >
            {props.children}
        </CarritoContext.Provider>
    );
};
export default CarritoState;

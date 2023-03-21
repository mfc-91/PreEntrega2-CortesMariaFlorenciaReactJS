import React from "react";
import {useNavigate} from 'react-router-dom';
import "./CategorySelector.css";

const CategorySelector = () => {
	const navigate = useNavigate();
    const categories = [
		{
    		id: 0,
    		value: 'no selected'
    	},
    	{
    		id: 1,
    		value: 'smartphones'
    	}, {
    		id: 2,
    		value: 'fragrances'
    	} 
    ];
 
	const btnChange = (event) =>{
		const value = event.target.value;
		navigate('/categories'+ "?id=" + value); 
	}
     return (
        <>
            <select id="select-category" name="select-category" className="btn btn-outline-light outline-custom" onChange={btnChange} >  
				<Options options={categories} />
            </select>
        </>
    );
};
export default CategorySelector;


function Options({ options }) {
	return options.map((option) => (
			<option key={option.id} value={ option.id } >
				{option.value}
			</option>
	));
}


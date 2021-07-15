import React from "react";
import MovieCard from './MovieCard.js'
import Filtre from './Filtre'
import {useState}from 'react'
const Movies = ({movies}) => {
	
    const [text, settext] = useState('');
    const [rate, setrate] = useState('');

	const filtreText =(text)=>{
		settext(text)
	}
	const filtreRate =(rate)=>{
		setrate(rate)
	}

	return (
		<div className='container1'>
			<Filtre filtreText={filtreText} filtreRate={filtreRate} />
			<div  className='container'>
			{movies.filter(el=>el.title.toLowerCase().includes(text.toLowerCase())&& el.rate>=rate).map(el =><MovieCard movie={el}/>
				
			)}
			</div>	
			</div>
	);
};
export default Movies
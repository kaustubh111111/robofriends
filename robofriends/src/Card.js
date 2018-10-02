import React from 'react';


const Card =(props) =>
{
    const{id,name,email}=props;
	return(

		<div className='bg-light-green dib br3 pa3 ma2 grow'>
        
		<img alt='Robots' src={ `https://robohash.org/${id}?200*200` } />


		<div>
		<h1>Hello there </h1>
      <h2> {name} </h2>
      <p> {email} </p> 

		</div>
		</div>
		); 
}

export default Card;
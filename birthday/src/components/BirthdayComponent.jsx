import React from 'react';

const BirthdayComponent = (props) => {
	return (
		<div className='person'>
			<img src={props.img} alt="" className="person__img" />
			<div className="person__name">{props.name}</div>
			<div className="person__age">{props.age} years</div>
		</div>
	);
};

export default BirthdayComponent;
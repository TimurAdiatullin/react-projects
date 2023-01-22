import React, { useState } from 'react';

const TourComponent = (props) => {
	let lessText = props.text.slice(0, 199) + '...'
	let [textStatus, setStatus] = useState(true)
	return (
		<div className='tour__item'>
			<img src={props.img} alt="" className="tour__img" />
			<div className="tour__price">{props.price}</div>
			<div className="tour__title">{props.title}</div>
			<div className="tour__text">
				{textStatus ? lessText : props.text}
				<button className='tour__btn' onClick={(e)=>{
					if (textStatus == true){
						setStatus(false)
					} else {
						setStatus(true)
					}
				}
				}>{textStatus ? 'Read More': 'Show Less'}</button>
			</div>
			<button className="tour__remove" onClick={()=>{
				let newTours = props.tour.filter((item)=>{
					if(item.id != props.id){
						return item
					}
				})
				props.setTours(newTours)
			}}>Not Interested</button>
		</div>
	);
};

export default TourComponent;
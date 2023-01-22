import React, { useState } from "react";

const Review = (props) => {
   return (
	<div className="review">
         <img src={props.img} alt="" className="review__img" />
			<div className="review__name">{props.name}</div>
      </div>
   );
};

export default Review;

import React, { useState } from 'react';
import Review from './Review';

const Reviews = (props) => {
	let reviewsArr = [
		{
			img:'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg',
			name:'Susan Smith',
			dev:'WEB DEVELOPER',
			text:"I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
			id:1,
		},
		{
			img:'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg',
			name:'Anna Johnson',
			dev:'WEB DESIGNER',
			text:"Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
			id:2,
		},
		{
			img:'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg',
			name:'Peter Jones',
			dev:'INTERN',
			text:"Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
			id:3,
		},
		{
			img:'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg',
			name:'Bill Anderson',
			dev:'THE BOSS',
			text:"Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic.",
			id:4,
		},
	]
   let [index, setIndex] = useState(0);
	let [reviewsState, setRevies] = useState(reviewsArr)
	let reviewElement;
	let randomInt = (min, max) => {
      let rand = min + Math.random() * (max + 1 - min);
      return Math.floor(rand);
   };
	if (props){
		reviewElement = reviewsState.map(item=>{
			return <Review img={item.img} name={item.name} dev={item.dev} text={item.text}/>
		})
	}
	return (
		<div className='wrapper'>
			<div className="title">Our Reviews</div>
			<div className="review">
				{reviewElement[index]}
         	<button
            className="prev"
            onClick={() => {
               if (index == 0) {
                  setIndex(3);
               } else if (index > 0) {
                  setIndex(index - 1);
               }
					console.log(index)
            }}
         >
            prev
         	</button>
         	<button
            className="next"
            onClick={() => {
               if (index == 3) {
                  setIndex(0);
               } else if (index < 3) {
                  setIndex(index + 1);
               }
					console.log(index)
            }}
         >
            next
         	</button>
         	<button className="surprise" onClick={() => setIndex(randomInt(0, 4))}>
            surprise
         	</button>
      </div>
		</div>
	);
};

export default Reviews;
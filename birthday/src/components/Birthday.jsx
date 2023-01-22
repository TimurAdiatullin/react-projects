import React, { useState } from 'react';
import BirthdayComponent from './BirthdayComponent';

const Birthday = (props) => {
	let birthdays=[
		{
			img:'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg',
			name:'Bertie Yates',
			age:29,
		},
		{
			img:'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg',
			name:'Hester Hogan',
			age:34,
		},
		{
			img:'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-3_rxtqvi.jpg',
			name:'Hester Hogan',
			age:32,
		},
		{
			img:'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg',
			name:'Sean Walsh',
			age:29,
		},
		{
			img:'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg',
			name:'Lola Gardner',
			age:29,
		},
	]
	let [birthdayState, setState] = useState(birthdays)
	let birthdayElement;
	if (props){
		birthdayElement = birthdayState.map(item=>{
			return <BirthdayComponent img={item.img} name={item.name} age={item.age}/>
		})
	}
	return (
		<div className='wrapper'>
			{birthdayElement}
			<button onClick={()=>{
				setState([])
			}}>Clear All</button>
		</div>
	);
};

export default Birthday;
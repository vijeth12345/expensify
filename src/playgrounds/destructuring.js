// const person = {
// 	name: 'vijeth',
// 	age: 23,

// 	location: {
// 		place: 'jayanagar'
// 	}
// };

// const { place } = person.location;

// console.log(`${place} with ${place}`);

const book = {
	title: 'wings of fire',
	author: 'Abdul Kalam',

	publisher: {
		name: 'india'
	}
};

const { name: publisherName = 'Self Publisher' } = book.publisher;
console.log(`The name of the publisher is ${publisherName} `);

'use strict'

require('es6-promise');




// function parsePromised() {
// 	let promise = new Promise((fulfill, reject) => {
// 		try {
// 			JSON.parse(process.argv[2])
// 		}
// 		catch (e) {
// 			(console.log(e.message))
// 		}
// 	})
// }
// parsePromised();

// function attachTitle(arg) {
// 	return `DR. ${arg}`;
// }

// let promise = new Promise((fulfill, reject) => {
// 	fulfill('MANHATTAN');
// })
// promise
// .then(attachTitle)
// .then(console.log)

// first()
//     .then(second)
//     .then(console.log)

// let promise = new Promise((fulfill, reject) => {
// 		fulfill('PROMISE VALUE')
// 	})
// 	.then(console.log)
// console.log('MAIN PROGRAM')

// let promise = Promise.resolve('PROMISE VALUE')
// .then(console.log)
// .catch((error) => console.error('oh, you suck...'))
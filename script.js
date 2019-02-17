// SEND CONVERTED DATA TO KUSTOMER

// required inputs
const axios = require('axios')
const apiKey = require('./apiKey.js')
const csvFilePath= './Data.csv'
const csv = require('csvtojson')



// utilized the csvtojson npm package

let customerDataJSON= (
	csv()
	.fromFile(csvFilePath)
	.then((jsonObj)=>{
		// console.log(jsonObj)
		// let string = JSON.stringify(jsonObj)
		// console.log(string)
		// console.log('WORKS', jsonObj)
		return(jsonObj)
	})
	.catch((e) =>{
		console.log("REJECTED")
	})
)


// refractor JSON parameters to match Kustomer required parameters

let refractoredData = async() =>{
	let newData;

	try{ 
		newData = await customerDataJSON.map(obj => {
			// console.log(`${obj.firstName} ${obj.lastName}`)
			obj = {...obj, firstName: `${obj.firstName} ${obj.lastName}`}
			// console.log(obj)
			
			obj['name']= obj['firstName']
			delete obj['firstName']
			delete obj['lastName']
			
			let string = JSON.stringify(obj)
			// console.log(string)
			return string
		})
	}
	catch(e){
		return ('failed')
	}
	
	console.log('THIS IS NEW DATA: ', newData)
	
	return newData
}

let data = (refractoredData()
	.then(result => {
	  return result
	}).catch(error => {
	  return 'error'
	}))

console.log('THIS IS CALLBACk', data)


// Post converted data to Kustomer API through axios npm package

console.log('OBJECT KEYS', Object.keys(data))
// Object.keys(customerData).forEach(name =>{
// 	console.log(name)
// 	axios.post('https://api.kustomerapp.com/v1/customers', {
//     name
//   },
//   {
//   	headers: {
//   		"Content-Type": "application/json",
//   		"Authorization": `Bearer ${apiKey}`
//   	}
//   })
//   .then(function (response) {
//     console.log('RESPONSE: ', response.data.data);
//     if(response.status === 201){
//     	console.log('Data successfully sent to Kustomer')
//     }
//   })
//   .catch(function (error) {
//     console.log('ERROR: ', error);
//   });
// })

// axios.post('https://api.kustomerapp.com/v1/customers', {
//     callback
//   },
//   {
//   	headers: {
//   		"Content-Type": "application/json",
//   		"Authorization": `Bearer ${apiKey}`
//   	}
//   })
//   .then(function (response) {
//     console.log('RESPONSE: ', response.data);
//     if(response.status === 201){
//     	console.log('Data successfully sent to Kustomer')
//     }
//   })
//   .catch(function (error) {
//     console.log('ERROR: ', error);
//   });


// CONVERT CSV FILE TO JSON

// required inputs
const csvFilePath= './Data.csv'
const csv = require('csvtojson')


// utilized the csvtojson npm package
let customerDataJSON= (
csv()
	.fromFile(csvFilePath)
	.then((jsonObj)=>{
		// console.log(jsonObj)
		return(jsonObj)
		// let customerDataString = JSON.stringify(jsonObj)
		// console.log(customerDataString)
}))

// refractor JSON parameters to match Kustomer required parameters
let refractoredData = async()=>{
	let newData = await customerDataJSON.map(obj => {
		// console.log(`${obj.firstName} ${obj.lastName}`)
		obj = {...obj, firstName: `${obj.firstName} ${obj.lastName}`}
		// console.log(obj)
		
		obj['name']= obj['firstName']
		delete obj['firstName']
		delete obj['lastName']
		
		return obj

	})
	// console.log('THIS IS NEW DATA: ', newData)
}

refractoredData()


module.exports = refractoredData
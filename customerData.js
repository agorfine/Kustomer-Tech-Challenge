// CONVERT CSV FILE TO JSON


// required inputs
const csvFilePath= './Data.csv'
const csv = require('csvtojson')

// utilized the csvtojson npm package
const customerDataJSON= (
	csv()
	.fromFile(csvFilePath)
	.then((jsonObj)=>{
		// console.log(jsonObj)
		return(jsonObj)
	})
	.catch((e) =>{
		console.log("failed")
	})
)

// refactor JSON parameters to match Kustomer required parameters
const refactoredData = async ()=>{
	let newData;
	try{ 
		newData = await customerDataJSON.map(obj => {
			obj = {...obj, firstName: `${obj.firstName} ${obj.lastName}`}
			// console.log(obj)
			obj['fullName']= obj['firstName']
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
	// console.log('THIS IS NEW DATA: ', newData)
	return newData
}

module.exports = refactoredData()
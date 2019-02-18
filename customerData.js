// CONVERT CSV FILE TO JSON

// required inputs
const csvFilePath= './Data.csv'
const csv = require('csvtojson')




let customerDataJSON= (
csv()
	.fromFile(csvFilePath)
	.then((jsonObj)=>{
		return(jsonObj)
		console.log(jsonObj)
}))


// refactor JSON parameters to match Kustomer required parameters
let refactoredData = async()=>{
	try{ 
		let newData = customerDataJSON ? '' : customerDataJSON.map(obj => {
			// console.log(`${obj.firstName} ${obj.lastName}`)
			obj = {...obj, firstName: `${obj.firstName} ${obj.lastName}`}
			// console.log(obj)
			
			obj['name']= obj['firstName']
			delete obj['firstName']
			delete obj['lastName']
			
			return Promise.resolve(obj)
		})
		// console.log('THIS IS NEW DATA: ', newData)
	}
	catch(e){
		return ('failed')
	}
	
}

let callback = refactoredData()


module.exports = callback
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


// refractor JSON parameters to match Kustomer required parameters
let refractoredData = async()=>{
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

let callback = refractoredData()

// function Data() {
// 	let customerDataJSON= (
// 		csv()
// 			.fromFile(csvFilePath)
// 			.then((jsonObj)=>{
// 				return(jsonObj)
// 	}))

// 	this.customerData = customerDataJSON,

// 	this.refractoredData= async()=>{
// 		try{
// 			let newData = await customerDataJSON.map(obj => {
// 				obj = {...obj, firstName: `${obj.firstName} ${obj.lastName}`}

// 				obj['name']= obj['firstName']
// 				delete obj['firstName']
// 				delete obj['lastName']
				
// 				return obj
// 			})
// 			// console.log('THIS IS NEW DATA: ', newData)
// 		}
// 		catch(e){
// 			return ('failed')
// 		}
		
// 	}
// 	}
	

// const data = new Data()


module.exports = callback
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
		return(jsonObj)
	})
	.catch((e) =>{
		console.log("REJECTED")
	})
)


// refactor JSON parameters to match Kustomer required parameters
let refactoredData = async ()=>{
	let newData;

	try{ 
		newData = await customerDataJSON.map(obj => {
			// console.log(`${obj.firstName} ${obj.lastName}`)
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

const postData = async () => {
	const data = await refactoredData();
	// console.log(data)

	Object.keys(data).forEach(key =>{
		console.log(key + ': ' + data[key])
		axios.post('https://api.kustomerapp.com/v1/customers', {
	    name: this.fullName,
	    birthdayAt: this.birthday,
	    emails: this.email,
	    phones: this.homePhone,
	    phones: this.workPhone
	  },
	  {
	  	headers: {
	  		"Content-Type": "application/json",
	  		"Authorization": `Bearer ${apiKey}`
	  	}
	  })
	  .then(function (response) {
	    console.log('RESPONSE: ', response.data.data);
	    console.log('RESPONSE: ', response.data.data);
	    if(response.status === 201){
	    	console.log(response.status,': Data successfully sent to Kustomer')
	    }
	  })
	  .catch(function (error) {
	    console.log('ERROR: ', error);
	  });
	})

}

postData()

// SEND CONVERTED DATA TO KUSTOMER


// required inputs
const axios = require('axios')
const apiKey = require('./apiKey.js')
const customerData = require('./customerData.js')

// utilize axios npm package to send data to Kustomer's API- must iterate over each key to send individual user data
const postData = async () => {
	const data = await customerData;
	// console.log(data)

	Object.keys(data).forEach(key =>{
		// console.log(key + ': ' + data[key])
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
	    // console.log('RESPONSE: ', response.data.data);
	    if(response.status === 201){
	    	console.log(response.statusText, response.status +': Data successfully posted to Kustomer')
	    } else{
	    	console.log(response.statusText, response.status +': Failed to POST data')
	    }
	  })
	  .catch(function (error) {
	    console.log('ERROR: ', error);
	  });
	})
}

postData()

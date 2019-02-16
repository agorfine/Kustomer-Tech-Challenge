// SEND CONVERTED DATA TO KUSTOMER

// required inputs
const axios = require('axios')
const apiKey = require('./apiKey.js')
const customerData = require('./customerData.js')


// Post converted data to Kustomer API through axios npm package
axios.post('https://api.kustomerapp.com/v1/customers', {
    customerData
  },
  {
  	headers: {
  		"Content-Type": "application/json",
  		"Authorization": `Bearer ${apiKey}`
  	}
  })
  .then(function (response) {
    // console.log('RESPONSE: ', response.status, response.statusText);
    if(response.status === 201){
    	console.log('Data successfully sent to Kustomer')
    }
  })
  .catch(function (error) {
    console.log('ERROR: ', error);
  });


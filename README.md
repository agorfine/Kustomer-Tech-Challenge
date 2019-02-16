# Kustomer Tech Challenge

## Instructions
For the challenge, Kustomer would like you to import the customer information from a Google Sheet into Kustomer using the Kustomer APIs. 

Create a script, written in Javascript using any tools you may seem fit including and not limited to npm packages and nodeJS.

## Code Execution
#### Import Customer Information from Google Sheet
I began by downloading the Google Sheet as a CSV file.
#### Convert CSV to JSON
Once downloaded, I converted the CSV file to a JSON object. I used the npm package csvtojson to convert the data. 
#### Refractor JSON Data
Initially, I did not refractor the JSON object. When the XMLHttpRequest was sent I received a 400 error because the parameters in the converted JSON file did not match Kustomer's accepted parameters. To correct this, I created a new array of objects using map, and concatenated the firstName and lastName values with a new key to match Kustomer's 'name' parameter.
#### Make XMLHttpRequest from Node.js
I used the axios npm package to make the http POST request. 
#### Run Script
To run the script, enter "npm run postMethod" in terminal. 
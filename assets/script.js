/*
 * 	
 * random cat API:
 * 	
 */

fetch('https://aws.random.cat/meow')
.then(function(results){
	return results.json()
})
.then(function(jsonResults){

	console.log("results: ", jsonResults)
	document.getElementById("root").innerHTML = `<img src="${jsonResults.file}">`


})
.catch(function(error){
	console.log("error message:", error)
})


/*
 * 
 * Merriam Webster API:
 * 
 * 1. make an account to get key:
 * 	https://dictionaryapi.com/register/index
 * 2. follow documentation to implement key:
 * 	https://dictionaryapi.com/products/api-collegiate-dictionary
 * 
 * 
 */

var mWebsterapikey;

fetch(`https://www.dictionaryapi.com/api/v3/references/collegiate/json/script?key=${mWebsterapikey}`)
.then(function(results){
	return results.json()
})
.then(function(jsonResults){

	console.log("results: ", jsonResults)


})
.catch(function(error){
	console.log("error message:", error)
})




/*
 * NASA API:
 * https://api.nasa.gov/
 *
 * query language in urls: 
 * ?key=value&anotherKey=value&anotherKey
 * 
 */

var nasaapiKey;

fetch(`https://api.nasa.gov/planetary/apod?api_key=${nasaapiKey}`)
.then(function(results){
	return results.json()
})
.then(function(jsonResults){

	console.log("results: ", jsonResults)


})
.catch(function(error){
	console.log("error message:", error)
})
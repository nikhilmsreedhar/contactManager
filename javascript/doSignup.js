//var urlBase = 'https://wownice.club/api';
//var extension = 'php';

function doSignup()
{
	var firstName = document.getElementById("firstName").value;
	var lastName = document.getElementById("lastName").value;
	var login = document.getElementById("signupUsername").value;
	var password = document.getElementById("signupPassword").value;

//	var hash = md5( password );
	let xhr = new XMLHttpRequest();
	
	//Need to edit the url based on the php files given to us
	let url = 'api/RegisterUser.php';
	
	xhr.open("POST", url, true);
	xhr.setRequestHeader("Content-type", "application/json");
	//	var jsonPayload = JSON.stringify({"FirstName" : firstName, "LastName" : lastName, "Login" : login, "Password" : hash});
	//	var jsonPayload = JSON.stringify({"FirstName" : firstName, "LastName" : lastName, "Login" : login, "Password" : password});
	var jsonPayload = '{"FirstName" : "' + firstName + '", "LastName" : ' + lastName + ', "Login" : "' + login + '", "Password" : "' + password + '"}';
	xhr.send(jsonPayload);
}

// your code here
function handle() {
	let name = document.getElementById("name").value
	let year = document.getElementById("year").value
	let url = document.getElementById("url")
	if(name&&year){
	url.innerHTML = `https://localhost:8080/?name=${name}&year=${year}`
	}
	else if(!name){
		url.innerHTML = `https://localhost:8080/?year=${year}`
	}
	else{
		url.innerHTML = `https://localhost:8080/?name=${name}`
	}
}

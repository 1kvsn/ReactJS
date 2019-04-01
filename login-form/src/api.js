let user = {
	lastName: "Snow",
	firstName: "John"
}
export function handleLogin(username, password){
	return new Promise((res, rej) => {
		if(username === "john" && password === "qwerty"){
			res(user);
		} else {
			rej("User doesn't exist!")
		}
	})
	 
}
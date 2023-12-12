export const loadOTPlessScript = () => {
	const script = document.createElement('script') //Create a script element
	script.id = 'otpless-auth' //Set the id of the script
	script.src = 'https://otpless.com/auth.js' //Set the source of the script
	document.body.appendChild(script) //Append the script to the body
}

export const unloadOTPlessScript = () => {
	const script = document.getElementById('otpless-auth') //Get the script element
	// Remove the script from the DOM if it exists
	if (script) {
		script.remove()
	}
}

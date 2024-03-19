export const loadOTPlessScript = () => {
	const script = document.createElement('script') //Create a script element
	script.id = 'otpless-sdk' //Set the id of the script
	script.type = 'text/javascript' //Set the type of the script
	script.src = 'https://otpless.com/v2/auth.js' //Set the source of the script
	// TODO: replace with your APP ID
	script.setAttribute('data-appid', 'PASTE_YOUR_APP_ID_HERE')
	document.body.appendChild(script) //Append the script to the body
}

export const unloadOTPlessScript = () => {
	const script = document.getElementById('otpless-sdk') //Get the script element
	// Remove the script from the DOM if it exists
	if (script) {
		script.remove()
	}
}

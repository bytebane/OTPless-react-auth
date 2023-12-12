import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setUser } from '../redux/user/userSlice'
import { loadOTPlessScript, unloadOTPlessScript } from '../helpers'

const OTPLess = () => {
	const navigate = useNavigate()
	const dispatch = useDispatch()

	const userData = useSelector((state) => state.user)

	useEffect(() => {
		// Load script
		if (!userData.token) {
			loadOTPlessScript()
		} else {
			unloadOTPlessScript()
			navigate('/')
		}
	}, [userData])

	useEffect(() => {
		/**
		 * Success callback
		 * This function is called when the user is authenticated
		 * and provides the authenticated user data (otplessUser)
		 * @param {Object} otplessUser  otpless user object
		 */
		window.otpless = (otplessUser) => {
			// console.log(otplessUser)
			dispatch(setUser(otplessUser))
		}
	}, [])

	return (
		<div className='otpless-container'>
			<div className='otpless-modal'>
				<div id='otpless-login-page'></div>
			</div>
		</div>
	)
}

export default OTPLess

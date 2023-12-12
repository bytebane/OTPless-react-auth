// import OTPLess from '../components/OTPLess'
import { Suspense, lazy, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

// Lazy load the OTPless component
const OTPLess = lazy(() => import('../components/OTPLess'))

const Auth = () => {
	const navigate = useNavigate()
	const userData = useSelector((state) => state.user)

	useEffect(() => {
		/**
		 * Check if user is authenticated
		 * If yes, redirect to the home page
		 * Otherwise, render the OTPless login page
		 */
		if (userData.token) {
			navigate('/')
			return
		}
	}, [userData])
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<OTPLess />
		</Suspense>
	)
}

export default Auth

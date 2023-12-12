import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Home = () => {
	const navigate = useNavigate()
	// Get user data from Redux store
	const userData = useSelector((state) => state.user)
	/**
	 * Render JSX elements from an object recursively.
	 *
	 * @param {object} obj - object to render elements from.
	 * @param {string} prepend - prefix to prepend to the key.
	 * @return {array} An array of JSX elements.
	 */
	const renderFromObj = (obj, prepend) => {
		const elements = [] // array of JSX

		/**
		 * Get an array of key-value pairs from an object.
		 * Sort the array by the length of the value.
		 * Loop through the array and populate the @elements array with JSX.
		 */
		Object.entries(obj)
			.sort((a, b) => a[1]?.length - b[1]?.length)
			.forEach(([key, value]) => {
				// Skip null and undefined
				if (value === null || value === undefined) return
				// do not render token
				if (key === 'token') return
				// if value is an object, render each key-value recursively
				if (typeof value === 'object') {
					elements.push(renderFromObj(value, key))
				} else {
					// Render key-value pair
					const element = (
						<div className='key-value' key={prepend ? prepend + '-' + key : key}>
							<span className='key'>{prepend ? prepend + '-' + key : key}: </span>
							<span className='value'>{value}</span>
						</div>
					)
					elements.push(element)
				}
			})
		// return an array of JSX
		return elements
	}

	useEffect(() => {
		// Check if user is authenticated
		// If not, redirect to the login page
		if (!userData.token) {
			navigate('/auth')
			return
		}
	}, [])

	return <div className='user-data'>{renderFromObj(userData)}</div>
}

export default Home

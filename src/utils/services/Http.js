const URI = 'https://5ff75c21e7164b0017e1a82d.mockapi.io/api/v1'

class Http {
	static async get (endpoint='') {
		const response = await fetch( URI + endpoint, {
			method: 'GET'
		})
		const data = await response.json()
		return data
	}
}

export default Http
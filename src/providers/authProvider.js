import axios from 'axios'

const baseUrl = '/auth'

const authProvider = {
	login: ({ username, password }) => {
		return axios.post(`${baseUrl}/login`, {username, password })
			.then(response => {
				if (response.status < 200 || response >= 300) {
					throw new Error(response.statusText)
				}
				return response.data
			})
			.then(data => {
				localStorage.setItem('adminauth', JSON.stringify(data.token))
				console.log(data)
			})
			.catch(() => {
				throw new Error('Netowrk error')
			})
	},
	logout: () => {
		localStorage.removeItem('adminauth')
		return Promise.resolve()
	},
	checkError: ({ status }) => {
		if (status === 401 || status === 403) {
			localStorage.removeItem('adminauth')
			return Promise.reject()
		}
	},
	checkAuth: () => {
		return localStorage.getItem('adminauth')
			? Promise.resolve()
			: Promise.reject()
	},
	getPermissions: () => {
		return Promise.resolve()
	}
}

export default authProvider
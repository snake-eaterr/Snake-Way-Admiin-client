
import { stringify } from 'query-string'
import getToken from '../auth-helper'
import axios from 'axios'

const baseUrl = '/api'

const dataProvider = {
	getList: (resource, params) => {
		const { page, perPage } = params.pagination
		const { field, order } = params.sort
		const query = {
			sort: field,
			order: order,
			start: (page - 1) * perPage,
			end: page * perPage
		}
		const url = `${baseUrl}/${resource}?${stringify(query)}`

		return axios.get(url, {
			headers: {
				'Authorization': `bearer ${getToken()}`
			}
		}).then(response => {

			return {
				data: response.data,
				total: parseInt((response.headers.xtotalcount).split('/').pop(), 10)
			}
		})

	},
	getOne: (resource, params) => {
		return axios.get(`${baseUrl}/${resource}/${params.id}`, {
			headers: {
				'Authorization': `bearer ${getToken()}`
			}
		}).then(response => {
			return {
				data: response.data
			}
		})
	
	},
	getMany: (resource, params) => {
		const query = {
			filter: JSON.stringify({ id: params.ids })
		}
		const url = `${baseUrl}/${resource}?${stringify(query)}`
		return axios.get(url, {
			headers: {
				'Authorization': `bearer ${getToken()}`
			}
		}).then(response => {
			return {
				data: response.data
			}
		})

	},
	getManyReference: (resource, params) => {
		const { page, perPage } = params.pagination
		const { field, order } = params.sort
		const query = {
			sort: field,
			order: order,
			start: (page - 1) * perPage,
			end: page * perPage,
			filter: {
				[params.target]: params.id
			}
		}

		const url = `${baseUrl}/${resource}?${stringify(query)}`

		return axios.get(url, {
			headers: {
				'Authorization': `bearer ${getToken()}`
			}
		}).then(response => {
			return {
				data: response.data,
				total: parseInt((response.headers.xtotalcount).split('/').pop(), 10)
			}
		})
	},
	
	update: (resource, params) => {
		// We check if the resource to be updated is a product. If so, we use a formData for the image upload, otherwise we update normally
		if (resource !== 'products') {
			return axios.put(`${baseUrl}/${resource}/${params.id}`, params.data, {
				headers: {
					'Authorization': `bearer ${getToken()}`
				} 
			}).then(response => {
				return {
					data: response.data
				}
			})
		}

		
		let productData = new FormData()

		params.data.category && productData.append('category', params.data.category)
		params.data.description && productData.append('description', params.data.description)
		params.data.label && productData.append('label', params.data.label)
		params.data.price && productData.append('price', params.data.price)
		params.data.stock && productData.append('stock', params.data.stock)
		params.data.image && productData.append('image', params.data.image.rawFile)
		
		return axios.put(`${baseUrl}/${resource}/${params.id}`, productData, {
			headers: {
				'Authorization': `bearer ${getToken()}`
			} 
		}).then(response => {
			return {
				data: response.data
			}
		})
		
	},

	updateMany: (resource, params) => {
		const query = {
			filter: JSON.stringify({ id: params.ids })
		}
		return axios.put(`${baseUrl}/${resource}?${stringify(query)}`, params.data, {
			headers: {
				'Authorization': `bearer ${getToken()}`
			}
		}).then(response => {
			return {
				data: response.data
			}
		})
	},

	create: (resource, params) => {
	

		let productData = new FormData()

		params.data.category && productData.append('category', params.data.category)
		params.data.description && productData.append('description', params.data.description)
		params.data.label && productData.append('label', params.data.label)
		params.data.price && productData.append('price', params.data.price)
		params.data.stock && productData.append('stock', params.data.stock)
		params.data.image && productData.append('image', params.data.image.rawFile)

		return axios.post(`${baseUrl}/${resource}`, productData, {
			headers: {
				'Authorization': `bearer ${getToken()}`
			}
			}).then(response => {
				return {
					...params.data,
					id: response.data.id
				}
			})
	},

	delete: (resource, params) => {
		return axios.delete(`${baseUrl}/${resource}/${params.id}`, {
			headers: {
				'Authorization': `bearer ${getToken()}`
			}
		}).then(response => {
			return {
				data: response.data
			}
		})
		
	},

	deleteMany: (resource, params) => {


		const query = {
			filter: JSON.stringify({ id: params.ids })
		}
		console.log(query, stringify(query))
		return axios.delete(`${baseUrl}/${resource}?${stringify(query)}`, {
			headers: {
				'Authorization': `bearer ${getToken()}`
			}
		}).then(response => {
			return {
				data: response.data
			}
		})
		
	}
}

export default dataProvider
import { axiosClassic } from 'api/interceptors'

const checkResponse = (response: any) => response.data
const catchError = (error: any) => error

export const wrapper = (
	method: 'post' | 'get' | 'put' | 'delete',
	url: string,
	data?: any
) =>
	axiosClassic
		.request({ method, url, data })
		.then(checkResponse)
		.catch(catchError)

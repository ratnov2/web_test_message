import axios from 'axios'

import { getContentType } from './api.helpers'
import { API_SERVER_URL } from 'config/api.config'

export const axiosClassic = axios.create({
	baseURL: API_SERVER_URL,
	headers: getContentType()
})


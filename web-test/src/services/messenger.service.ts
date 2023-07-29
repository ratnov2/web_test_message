import { axiosClassic } from 'api/interceptors'
import { AxiosInstance } from 'axios'
import { URLS } from 'constants/urls'
import { IChat, IMessageChat } from 'shared/types/messenges.types'
import { IChatItem } from 'ui/chat-item/chat-item.interface'
import { wrapper } from 'utils/wrapper'

export const MessengerService = {
	async getChat() {
		return axiosClassic.get<{ response: IChat[] }>(URLS.MESSAGES_LIST)
	},
	async getMessage(chat_id: string) {
		const response = await axiosClassic.get<{ response: IMessageChat[] }>(
			URLS.LIST,
			{
				params: { chat_id: chat_id }
			}
		)
		response.data.response.reverse()
		return response
	}
}

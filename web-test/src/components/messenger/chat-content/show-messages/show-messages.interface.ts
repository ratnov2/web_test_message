import { IMessageChat } from 'shared/types/messenges.types'

export interface IShowMessages {
	messages: IMessageChat[] | undefined
}

export interface IShareShowMessages {
	messages: IMessageChat[] | undefined
	loading: boolean
	error: boolean
}

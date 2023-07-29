export interface IChat {
	id: string
	title: string
	last_message: IMessageLast
	avatar: string
	users: IUser[]
	created_at: number
}
export interface IMessageLast {
	message: string
	user_id: string
	user_name: string
	user_surname: string
	user: IUser
}
export interface IMessageChat {
	created_at: number
	id: string
	is_new: boolean
	message: string
	user: IUser
}
export interface IUser {
	avatar: string
	id: string
	name: string
	surname: string
	you: boolean
}

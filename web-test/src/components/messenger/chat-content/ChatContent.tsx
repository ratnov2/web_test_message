import { useParams } from 'react-router-dom'
import style from './ChatContent.module.scss'
import { useQuery } from 'react-query'
import { MessengerService } from 'services/messenger.service'
import Chat from 'assets/img/Chat'
import { useContext, useEffect } from 'react'
import { MessagesContext } from 'pages/messenger/MessengerPage'
import ShareShowMessages from './show-messages/ShareShowMessages'
import SendMessage from '../send-messege/SendMessage'

const ChatContent = () => {
	const params = useParams()
	const { state } = useContext(MessagesContext)

	const messages = useQuery(
		'get-message',
		() => MessengerService.getMessage(String(params.id)),
		{
			enabled: !!params.id,
			select: ({ data }) => data.response
		}
	)
	useEffect(() => {
		if (!!params.id) {
			messages.refetch()
		}
	}, [params])

	return (
		<div className={style.chatContent}>
			<div className={style.header}>
				<Chat />
				<h1>{state === '' ? 'Выберите диалог' : state}</h1>
			</div>
			<ShareShowMessages
				messages={messages.data}
				error={messages.isError}
				loading={messages.isLoading || messages.isFetching}
			/>
			<SendMessage />
		</div>
	)
}
export default ChatContent

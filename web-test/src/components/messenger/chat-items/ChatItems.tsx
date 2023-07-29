import { useQuery } from 'react-query'
import style from './ChatItems.module.scss'
import { MessengerService } from 'services/messenger.service'
import ChatItem from 'ui/chat-item/ChatItem'
import { Link } from 'react-router-dom'

const ChatItems = () => {
	const chatList = useQuery('get-chat-list', () => MessengerService.getChat())
	console.log(chatList.data?.data.response)
	return (
		<div className={style.chatItems}>
			<h1>All chats</h1>
			<div className={style.section}>
				{chatList.data?.data &&
					chatList.data.data.response.map(data => (
						<ChatItem
							img={data.avatar}
							message={data.last_message.message}
							name={data.title}
							id={data.id}
							time={data.created_at * 1000}
						/>
					))}
			</div>
		</div>
	)
}
export default ChatItems

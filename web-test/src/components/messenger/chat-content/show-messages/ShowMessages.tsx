import { FC } from 'react'
import style from './ShowMessages.module.scss'
import { IShowMessages } from './show-messages.interface'
import Time from 'ui/time/Time'
import NewMessage from 'ui/new-message/NewMessage'
import MessageItem from 'ui/message-item/MessageItem'
import { IsDate } from './IsDate'

const ShowMessages: FC<IShowMessages> = ({ messages }) => {
	return (
		<div>
			{messages &&
				messages.map((message, key) => {
					const styles: ('me' | 'other' | 'is_next')[] = []
					const isNext = messages[key].user.id === messages[key - 1]?.user.id
					const isDate = IsDate(
						messages[key].created_at,
						messages[key - 1]?.created_at
					)
					if (message.user.you) styles.push('me')
					if (!message.user.you) styles.push('other')
					if (!isDate && isNext) styles.push('is_next')
					return (
						<>
							{key === 0 && <Time time={message.created_at * 1000} />}
							{isDate && <Time time={message.created_at * 1000} />}
							{messages[key].is_new && !messages[key - 1]?.is_new && (
								<NewMessage />
							)}
							<MessageItem
								message={message.message}
								img={message.user.avatar}
								name={message.user.name}
								time={message.created_at}
								styles={styles}
							/>
						</>
					)
				})}
		</div>
	)
}
export default ShowMessages

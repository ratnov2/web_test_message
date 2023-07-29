import { FC, useContext, useEffect } from 'react'
import style from './ChatItem.module.scss'
import { IChatItem } from './chat-item.interface'
import { Link, useParams } from 'react-router-dom'
import { MessagesContext } from 'pages/messenger/MessengerPage'
import { NormalizeTime } from 'utils/normalize-time'
import TimeHourMinute from 'ui/time-hour-minute/TimeHourMinute'

const ChatItem: FC<IChatItem> = ({ img, message, name, id, time }) => {
	const { setState } = useContext(MessagesContext)
	const param = useParams()
	useEffect(() => {
		if (String(param.id) === id) setState(name)
	}, [param])
	
	return (
		<Link
			to={`/${id}`}
			className={`${style.chatItem} ${param.id === id && style.active}`}
		>
			<img src={img} alt='user' />
			<div className={style.content}>
				<div className={style.header}>
					<h3>{name}</h3>
					<TimeHourMinute time={time} />
				</div>
				<p>{message}</p>
			</div>
		</Link>
	)
}
export default ChatItem

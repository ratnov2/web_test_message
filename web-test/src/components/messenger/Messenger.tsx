import { FC, ReactNode } from 'react'
import style from './Messenger.module.scss'
import ChatItems from './chat-items/ChatItems'

const Messenger: FC<{ children: ReactNode }> = ({ children }) => {
	return (
		<div className={style.messenger}>
			<ChatItems />
			<>{children}</>
		</div>
	)
}
export default Messenger

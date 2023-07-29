import SendInput from 'ui/input/SendInput'
import style from './SendMessage.module.scss'
import Attach from 'assets/img/Attach'
import Send from 'assets/img/Telegram'
import { createContext, useState } from 'react'

export const MessagesSendContext = createContext({
	message: '',
	handlerMessage: (message: string) => {}
})

const SendMessage = () => {
	const [message, setMessage] = useState('')
	const handlerSetMessage = (message: string) => {
		setMessage(message)
	}
	return (
		<MessagesSendContext.Provider
			value={{ message, handlerMessage: handlerSetMessage }}
		>
			<div className={style.sendMessage}>
				<SendInput />
				<div className={style.chandlers}>
					<div className={style.imgUpload}>
						<label htmlFor='file-input'>
							<Attach />
						</label>
						<input id='file-input' type='file' style={{ display: 'none' }} />
					</div>
					<div className={style.send} onClick={() => alert(message)}>
						<Send />
					</div>
				</div>
			</div>
		</MessagesSendContext.Provider>
	)
}
export default SendMessage

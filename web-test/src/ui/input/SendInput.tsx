import { useContext, useEffect, useRef, useState } from 'react'
import style from './SendInput.module.scss'
import Contenteditable from 'ui/content-editable/Contenteditable'
import { MessagesSendContext } from 'components/messenger/send-messege/SendMessage'

const SendInput = () => {
	const { message, handlerMessage } = useContext(MessagesSendContext)
	return (
		<div className={style.sendInput}>
			<Contenteditable
				value={message}
				onChange={(updatedContent: string) => {
					handlerMessage(updatedContent)
				}}
			/>
		</div>
	)
}
export default SendInput

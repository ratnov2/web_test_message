import Messenger from 'components/messenger/Messenger'
import ChatContent from 'components/messenger/chat-content/ChatContent'
import { createContext, useState } from 'react'

export const MessagesContext = createContext({
	state: '',
	setState: (id: string) => ''
})


const MessengerPage = () => {
	const [state, setState] = useState('')
	return (
		//@ts-ignore
		<MessagesContext.Provider value={{ state, setState }}>
				<Messenger>
					<ChatContent />
				</Messenger>
		</MessagesContext.Provider>
	)
}
export default MessengerPage

import { FC } from 'react'
import Loading from 'ui/loading/Loading'
import ShowMessages from './ShowMessages'
import { IShareShowMessages } from './show-messages.interface'

const ShareShowMessages: FC<IShareShowMessages> = ({
	messages,
	error,
	loading
}) => {
	return (
		<div style={{ overflowY: 'scroll', marginTop: 'auto', height: '100%' }}>
			{loading && <Loading title='Loading' />}
			{error && <Loading title='Error' />}
			{!loading && !error && <ShowMessages messages={messages} />}
		</div>
	)
}
export default ShareShowMessages

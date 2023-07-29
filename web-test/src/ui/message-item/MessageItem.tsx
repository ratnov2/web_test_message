import { FC } from 'react'
import style from './MessageItem.module.scss'
import { IMessageItem } from './message-item.interface'
import Time from 'ui/time/Time'
import Read from 'assets/img/Read'
import { NormalizeTime } from 'utils/normalize-time'
import TimeHourMinute from 'ui/time-hour-minute/TimeHourMinute'

const stylesShare = {
	me: style.me,
	other: style.other,
	is_next: style.is_next
}

const MessageItem: FC<
	IMessageItem & { styles: Array<keyof typeof stylesShare> }
> = ({ message, img, name, time, styles }) => {
	let stylesMap = ``

	for (let i = 0; i < styles.length; i++) {
		stylesMap += ` ${stylesShare[styles[i]]}`
	}

	return (
		<div className={`${style.common} ${stylesMap}`}>
			<div className={style.section}>
				<img src={img} alt='user' />
				<div className={style.message}>
					<h3>{name}</h3>
					<div>{message}</div>
					<div className={style.time}>
						<div className={style.timeHourMinute}>
							<TimeHourMinute time={time} />
						</div>
						<div className={style.read}>
							<Read />
						</div>
					</div>
				</div>
			</div>
			{/* ) : (
				<div
					className={`${style.section} `}
					style={isNext && { marginLeft: '32px' }}
				>
					<div className={style.message}>
						<div>{message}</div>
						<div className={style.time}>
							<TimeHourMinute time={time} />
							<Read />
						</div>
					</div>
				</div>
			)} */}
		</div>
	)
}
export default MessageItem

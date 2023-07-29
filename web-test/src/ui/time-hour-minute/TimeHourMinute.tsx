import { FC } from 'react'
import style from './TimeHourMinute.module.scss'
import { NormalizeTime } from 'utils/normalize-time'

const TimeHourMinute: FC<{ time: number }> = ({ time }) => {
	const date = new Date(time)
	const hour = date.getHours()
	const minute = date.getMinutes()
	return (
		<span className={style.span}>{`${NormalizeTime(hour)}:${NormalizeTime(
			minute
		)}`}</span>
	)
}

export default TimeHourMinute

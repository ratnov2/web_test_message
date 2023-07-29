import { FC } from 'react'
import style from './Time.module.scss'
import { NormalizeTime } from 'utils/normalize-time'

const Time: FC<{ time: number }> = ({ time }) => {
	const date = new Date(time)
	const day = date.getDay()
	const month = date.getMonth() + 1
	const year = date.getFullYear()
	return (
		<div className={style.time}>
			{`${NormalizeTime(day)}.${NormalizeTime(month)}.${year}`}
		</div>
	)
}
export default Time

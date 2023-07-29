import { FC } from 'react'
import style from './Loading.module.scss'

const Loading: FC<{ title: string }> = ({ title }) => {
	return <div>{title} ...</div>
}
export default Loading

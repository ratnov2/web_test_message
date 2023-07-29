import { FC, useEffect, useRef } from 'react'
import style from './Contenteditable.module.scss'
import { IContenteditable } from './contenteditable.interface'

const Contenteditable: FC<IContenteditable> = ({ value, onChange }) => {
	const contentEditableRef = useRef<HTMLDivElement | null>(null)

	useEffect(() => {
		if (
			contentEditableRef.current &&
			contentEditableRef.current.textContent !== value
		) {
			contentEditableRef.current.textContent = value
		}
	}, [])

	return (
		<div
			contentEditable='true'
			ref={contentEditableRef}
			placeholder='Type message'
			onInput={event => {
				onChange(String(event.currentTarget.textContent))
			}}
			className={style.contenteditable}
		/>
	)
}

export default Contenteditable

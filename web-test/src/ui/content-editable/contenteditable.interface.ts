import { Dispatch } from 'react'

export interface IContenteditable {
	value: string
	onChange: (updatedContent: string) => void
}

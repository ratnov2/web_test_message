import useWindowSize from 'hooks/useResize'
import { FC, ReactNode } from 'react'
import MobileInfo from './MobileInfo'

const LayoutMobile: FC<{ children: ReactNode }> = ({ children }) => {
	const size = useWindowSize()
	console.log(size)

	return size[0] < 700 ? <MobileInfo /> : <>{children}</>
}
export default LayoutMobile

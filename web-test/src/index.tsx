import React from 'react'
import ReactDOM from 'react-dom'
import reportWebVitals from './reportWebVitals'
import '../src/assets/styles/global.scss'
import { QueryClient, QueryClientProvider } from 'react-query'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MessengerPage from 'pages/messenger/MessengerPage'
import LayoutMobile from 'components/layout-mobile/LayoutMobile'

export const queryClient = new QueryClient()
const router = createBrowserRouter([
	{
		path: '/:id',
		element: <MessengerPage />
	},
	{
		path: '/',
		element: <MessengerPage />
	}
])
ReactDOM.render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<LayoutMobile>
				<RouterProvider router={router} />
			</LayoutMobile>
		</QueryClientProvider>
	</React.StrictMode>,

	document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()

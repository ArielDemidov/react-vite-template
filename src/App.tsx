import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { Route, Routes } from 'react-router-dom'

import ThemeProvider from '@/contexts/ThemeProvider'
import Layout from '@/pages/Layout'

export const queryClient = new QueryClient()

const App = () => (
	<>
		<QueryClientProvider client={queryClient}>
			<ThemeProvider>
				<Routes>
					<Route path="/" element={<Layout />}>
					</Route>
				</Routes>
			</ThemeProvider>
		</QueryClientProvider>
	</>
)


export default App

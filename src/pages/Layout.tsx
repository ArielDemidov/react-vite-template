import { Outlet } from 'react-router-dom'

import 'external-svg-loader'

import Header from '@/components/Header'

import './Layout.scoped.scss'
import './Layout.scss'

const Layout = () => (
	<>
		<Header />
		<main>
			<Outlet />
		</main>
		<aside />
		<footer />
	</>
)

export default Layout

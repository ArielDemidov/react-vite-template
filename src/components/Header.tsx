import HeaderButtons from '@/components/HeaderButtons'

import './Header.scoped.scss'

const Header = () => (
	<header>
		<div className="wrapper">
			<h2 className="title">React Vite</h2>
			<span className="sub-title">Hello there</span>
		</div>
		<HeaderButtons />
	</header>
)

export default Header

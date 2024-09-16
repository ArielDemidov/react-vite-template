import { DarkModeOutlined, LightModeOutlined } from '@mui/icons-material'

import { useTheme } from '@/contexts/ThemeProvider'
import './HeaderButtons.scoped.scss' /* @vite-ignore */

const HeaderButtons = () => {
	const { theme, toggleTheme } = useTheme()

	return (
		<nav>
			<ul>
				<li>
					<button
						id="toggle-theme"
						title="Toggle theme"
						type="button"
						onClick={() => {
							toggleTheme()
						}}
					>
						{theme === 'dark' ? <LightModeOutlined /> : <DarkModeOutlined />}
					</button>
				</li>
			</ul>
		</nav>
	)
}

export default HeaderButtons

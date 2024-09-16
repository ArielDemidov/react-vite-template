import { ValidateEnv } from "@julr/vite-plugin-validate-env"
import react from '@vitejs/plugin-react'
import { reactScopedCssPlugin } from 'rollup-plugin-react-scoped-css'
import { defineConfig } from 'vite'
import svgr from "vite-plugin-svgr"
import tsconfigPaths from 'vite-tsconfig-paths'
import { z } from 'zod'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		tsconfigPaths(),
		reactScopedCssPlugin(),
		svgr(),
		ValidateEnv({
			validator: 'zod',
			schema: {
				VITE_API_URL: z.string(),
			}
		})
	],
	base: '',
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: `@import "./src/variables";`,
			},
		},
	},
	build: {
		chunkSizeWarningLimit: 100,
		rollupOptions: {
			onwarn(warning, warn) {
				if (warning.code === "MODULE_LEVEL_DIRECTIVE") {
					return
				}
				warn(warning)
			},
		},
	},
})

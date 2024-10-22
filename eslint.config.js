import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'
import solid from 'eslint-plugin-solid/configs/typescript'

export default [
	{
		files: ['**/*.{ts,tsx}'],
	},
	{
		languageOptions: { globals: globals.browser },
	},
	pluginJs.configs.recommended,
	...tseslint.configs.recommended,
	solid,
	{
		rules: {
			'no-unused-vars': 'off',
			'no-unused-expressions': 'off',
			'prefer-const': 'warn',
			'no-sparse-arrays': 'off',
			'@typescript-eslint/no-unused-vars': 'off',
			'@typescript-eslint/no-unused-expressions': 'off',
			'@typescript-eslint/no-explicit-any': 'off',
		},
	},
	{
		ignores: ['**/play.js', 'dist/', 'src/scala-out/'],
	},
]

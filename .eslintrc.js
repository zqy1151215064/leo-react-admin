module.exports = {
	root: true,
	parser: "@typescript-eslint/parser",
	extends: ["plugin:react/recommended", "plugin:@typescript-eslint/recommended", "plugin:prettier/recommended", "prettier"],
	plugins: ["react-hooks"],
	rules: {
		"react-hooks/rules-of-hooks": "error",
		"react-hooks/exhaustive-deps": "warn",
		"react/jsx-no-target-blank": "off",
		"react/react-in-jsx-scope": "off"
	},
	settings: {
		react: {
			version: "18.2.0"
		}
	}
};

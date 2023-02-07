/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	darkMode: 'media',
	theme: {
		extend: {
			animation: {
				bounce100: 'bounce 1s infinite 100ms',
				bounce200: 'bounce 1s infinite 200ms',
			},
		},
	},
	plugins: [],
};

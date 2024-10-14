/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
	extend: {
		container: {
			center: 'true'
		},
		colors: {
			blueVeryDark: {
				'50': '#ffffff',
				'100': '#E6EBEF',
				'200': '#CDD7DF',
				'300': '#B4C3D0',
				'400': '#9BAFC0',
				'500': '#839BB1',
				'600': '#6A87A1',
				'700': '#517391',
				'800': '#385E82',
				'900': '#1F4B72',
				'950': '#073763'
			},
			greenLightGrayish: {
				'50': '#FFFFFF',
				'100': '#FCFDFA',
				'200': '#F9FBF6',
				'300': '#F6F9F2',
				'400': '#F3F8ED',
				'500': '#F1F6E9',
				'600': '#EEF4E5',
				'700': '#EBF3E0',
				'800': '#E8F1DC',
				'900': '#E5EFD8',
				'950': '#E3EED4'
			},
			blueLightGrayish: {
				'50': '#FFFFFF',
				'100': '#FBFCFD',
				'200': '#F7FAFC',
				'300': '#F4F7FA',
				'400': '#F0F5F9',
				'500': '#EDF3F8',
				'600': '#E9F0F6',
				'700': '#E5EEF5',
				'800': '#E2EBF3',
				'900': '#DEE9F2',
				'950': '#DBE7F1'
			},
			redLightGrayish: {
				'50': '#FFFFFF',
				'100': '#FEFCFC',
				'200': '#FDFAFA',
				'300': '#FDF7F7',
				'400': '#FCF5F5',
				'500': '#FCF3F3',
				'600': '#FBF0F0',
				'700': '#FAEEEE',
				'800': '#FAEBEB',
				'900': '#F9E9E9',
				'950': '#F9E7E7'
			},
			violetLightGrayish: {
				'50': '#FFFFFF',
				'100': '#FCFCFD',
				'200': '#FAF9FC',
				'300': '#F7F6FB',
				'400': '#F5F3F9',
				'500': '#F3F0F8',
				'600': '#F0EDF7',
				'700': '#EEEAF5',
				'800': '#EBE7F4',
				'900': '#E9E4F3',
				'950': '#E7E2F2'
			}
		},
		fontFamily: {
			spaceGrotesk: ["Space Grotesk"],
			elMessiri: ["El Messiri"]
		},
		animation: {
			marquee: "marquee var(--duration) linear infinite",
			"marquee-vertical": "marquee-vertical var(--duration) linear infinite",
		},
		keyframes: {
			marquee: {
				from: { transform: "translateX(0)" },
				to: { transform: "translateX(calc(-100% - var(--gap)))" },
			},
			"marquee-vertical": {
				from: { transform: "translateY(0)" },
				to: { transform: "translateY(calc(-100% - var(--gap)))" },
			},
		},
	},
	plugins: []
    },
}
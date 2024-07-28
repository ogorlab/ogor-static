/** @type {import('tailwindcss').Config} */

export const screens = {
	// The min of each (mobile skipped)
	't':  '37.5rem', 	// Tablet
	'tl': '56.25rem', // Tablet landscape
	'd':  '75rem', 		// Desktop
	'dl': '100rem', 	// Desktop large
	
	// The max of each
	'm':      { 'raw': '(max-width: calc(37.5rem  - 1px))' },
	'tp-max': { 'raw': '(max-width: calc(56.25rem - 1px))' },
	'tl-max': { 'raw': '(max-width: calc(75rem    - 1px))' },
	'd-max':  { 'raw': '(max-width: calc(100rem   - 1px))' },

	// The range of each (use 'm' for mobile)
	't-only':  { 'raw': '(min-width: 37.5rem)  and (max-width: calc(75rem - 1px))' },
	'tp-only': { 'raw': '(min-width: 37.5rem)  and (max-width: calc(56.25rem - 1px))' },
	'tl-only': { 'raw': '(min-width: 56.25rem) and (max-width: calc(75rem - 1px))' },
}

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		screens: screens,
		extend: {
			colors: {
				'rust': '#B36E1F'
			},
			boxShadow: {
				'screenshot': '0 1em 2em 0 hsla(0 0% 0% / .25)',
				'map-preview': '0 .25rem 1.5rem 0 rgba(0, 0, 0, 0.10)',
			},
			fontSize: {
				'larger': 'larger'
			},
		},
	},
	plugins: [],
}

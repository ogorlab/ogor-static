/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		screens: {
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
		},
		extend: {
			colors: {
				'rust': '#B36E1F'
			},
			fontSize: {
				'larger': 'larger'
			}
		},
	},
	plugins: [],
}

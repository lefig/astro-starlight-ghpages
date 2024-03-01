import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightBlog from 'starlight-blog'

// https://astro.build/config
export default defineConfig({

	// Added Configuration for 
	// Deployment to GitHub Pages
	site: 'https://30DaysOf.github.io',
	base: '/astro-starlight-ghpages/',

	integrations: [
		starlight({

			// Add plugins
			plugins: [starlightBlog()],

			title: '30Days Template',
			social: {
				github: 'https://github.com/30DaysOf/astro-starlight-ghpages',
			},
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', link: '/guides/example/' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});

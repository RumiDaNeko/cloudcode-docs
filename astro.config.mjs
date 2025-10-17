// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Cloudcode',
			social: [{ icon: 'facebook', label: 'facebook', href: 'https://www.facebook.com/profile.php?id=61563331380757' },{ icon: 'discord', label: 'discord', href: 'https://discord.gg/U7aFkZWk74' }, { icon: 'external', label: 'website', href: 'https://cloudcode.site' }],
			sidebar: [
				{
					label: 'Billing and Management',
					autogenerate: { directory: 'guides' },
				},
			],
		}),
	],
});

// file: svelte.config.js
// version: 1.0.1

import adapter from '@sveltejs/adapter-auto';
import {
    vitePreprocess
} from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    preprocess: vitePreprocess(),
    kit: {
        adapter: adapter(),
        serviceWorker: {
            register: true,
            files: (filepath) => !/\.DS_Store/.test(filepath)
        }
    }
};

export default config;
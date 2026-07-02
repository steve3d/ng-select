import { playwright } from '@vitest/browser-playwright';
import { defineConfig } from 'vitest/config';

// Shared Vitest config for both `ng-select` and `ng-option-highlight` test targets.
export default defineConfig({
	test: {
		globals: true,
		testTimeout: 30000,
		hookTimeout: 30000,
		coverage: {
			provider: 'v8',
			reporter: ['text', 'html', 'lcovonly'],
		},
		browser: {
			provider: playwright(),
			enabled: true,
			headless: true,
			instances: [{ browser: 'chromium' }],
		},
	},
});

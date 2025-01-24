import type { AppOpenApi } from '@/lib/types';

import packageJson from '../../package.json';

export function configureOpenAPI(app: AppOpenApi) {
	app.doc('/doc', {
		openapi: '3.0.0',
		info: {
			title: 'Tasks API',
			version: packageJson.version,
		},
	});
}

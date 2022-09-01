/**
 * @type {import('@remix-run/dev').AppConfig}
 */
module.exports = {
    serverBuildTarget: 'netlify-edge',
    server: process.env.NETLIFY || process.env.NETLIFY_LOCAL ? './server.ts' : undefined,
    ignoredRouteFiles: ['.*'],
};

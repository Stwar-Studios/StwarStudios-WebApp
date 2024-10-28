import { createProxyMiddleware } from 'http-proxy-middleware';
import { Application } from 'express';

module.exports = function(app: Application) {
    app.use(
        'v1',
        createProxyMiddleware({
            target: process.env.REACT_APP_API_URL,
            changeOrigin: true,
            logLevel: 'debug',
        })
    );
}
import Koa from 'koa'

import { bodyParser, duration, errorHandler, helmet, logRequest, noCache, sentry } from './middlewares'
import { cors } from './middlewares/cors'
import { router } from './router'

const app = new Koa()

// Error handling
app.on('error', sentry)

// Log incoming requests
app.use(logRequest)

// Record request duration
app.use(duration)

// Handle thrown errors
app.use(errorHandler)

// Provides important headers to make your app more secure
app.use(helmet)

// Disable response caching on the frontend side
app.use(noCache)

// CORS headers
app.use(cors)

// Parse incoming POST requests
app.use(bodyParser)

// Routing
app.use(router.routes())
app.use(router.allowedMethods())

export { app }

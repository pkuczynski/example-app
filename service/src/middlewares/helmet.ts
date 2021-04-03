import koaHelmet from 'koa-helmet'

export const helmet = koaHelmet({
    frameguard: {
        action: 'deny'
    }
})

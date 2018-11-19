const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const fetch = require('isomorphic-unfetch')

const configs = require('./configs.js')

const fetcher = require('./fetcher')

app.prepare().then(() => {
    const server = express()

    server.get('/wp/posts', (req, res) => {
        fetch( configs.wp.url + '/wp/v2/posts', {
            method: 'GET'
        }).then( posts => {
            return posts.json()
        }).then( posts => {
            res.send(posts)
        }).catch( res => {
            console.log(res)
        })
    })
    server.get('/fb/posts', (req, res) => {
        const posts = fetcher.getFBPosts()
        console.log(posts)
        return posts.resolution.then((res) => {
           res.send(res)
        })
    })

    server.get('*', (req, res) => {
        return handle(req, res)
    })

    server.listen(3000, (err) => {
        if (err) throw err
        console.log('> Ready on http://localhost:3000')
    })
})
.catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})

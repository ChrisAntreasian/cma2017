const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const fetch = require('isomorphic-unfetch')

const configs = require('./configs.js')

app.prepare().then(() => {
    const server = express()

    server.get('/ig/posts', (req, res) => {
        fetch( configs.ig.url + '/v1/users/' + configs.ig.userId + '/media/recent?access_token=' + configs.ig.token, {
            method: 'GET',
            credentials: 'include',
            headers: { 'Content-Type': 'application/json' }
        }).then( posts => {
            return posts.json()
        }).then( posts => {
            res.send(posts)
        }).catch( posts => {
            res.json(posts)
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
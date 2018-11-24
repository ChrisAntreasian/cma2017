const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const fetch = require('isomorphic-unfetch')

const configs = require('./configs.js')

const fetcher = require('./fetcher')

const { parse } = require('url')


app.prepare().then(() => {
    const server = express()

    server.get('/', (req, res) => {
      return app.render(req, res, '/landing', req.query)
    })

    server.get('/wp/posts', (req, res) => {
        fetch( configs.wp.url + '/wp/v2/posts', {
            method: 'GET'
        }).then( posts => {
            return posts.json()
        }).then( posts => {
            res.send(posts)
        }).catch( res => {
            console.log('e:',res)
        })
    })
    server.get('/wp/resume', (req, res) => {
        fetch( configs.wp.url + '/wp/v2/posts/' + configs.wp.resumeId, {
            method: 'GET'
        }).then( posts => {
            return posts.json()
        }).then( posts => {
            res.send(posts)
        }).catch( res => {
            console.log('e:',res)
        })
    })
    server.get('/fb/posts', (req, res) => {
        fetch( configs.fb.url + '/posts?access_token=' + configs.fb.token + '&fields=id,picture,type,message,caption', {
            method: 'GET'
        }).then( posts => {
            return posts.json()
        }).then( posts => {
            res.send(posts)
        }).catch( res => {
            console.log('e:', res)
        })
    })
    server.post('/contact', (req, res)> {
        console.log('server hit for mail method')
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

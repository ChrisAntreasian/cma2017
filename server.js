const next = require('next')

const express = require('express')
const bodyParser = require('body-parser')
const fetch = require('isomorphic-unfetch')
const dev = process.env.NODE_ENV !== 'production'
const configs = require('./configs.js')
const email = require('./email.js')

const app = next({ dev })
const handle = app.getRequestHandler()


const { parse } = require('url')

const fetcher = (action, method, data) => {
    return fetch( method, {
        method: action
    }).then( r => {
        return r.json()
    }).then( r => {
        return r
    }).catch( error => {
        console.log('e:', error)
        return false
    })
}

app.prepare().then(() => {
    const server = express()
    server.use(bodyParser.json())
    
    // server.get('/', (req, res) => {
    //   return app.render(req, res, '/landing', req.query)
    // })

    server.get('/wp/posts', (req, res) => {
        fetcher(
            'GET', 
            configs.wp.url + '/wp/v2/posts'
        ).then( posts => {
            if (posts) {
                res.send(posts)
            }
        })
    })

    server.get('/wp/resume', (req, res) => {
        fetcher(
            'GET', 
            configs.wp.url + '/wp/v2/posts/' + configs.wp.resumeId
        ).then( resume => {
            if (resume) {
                res.send(resume)
            }
        })
    })

    server.get('/wp/q-gallery', (req, res) => {
        fetcher(
            'GET', 
            configs.wp.url + '/wp/v2/media?parent=' + configs.wp.quintGalleryParentId
        ).then( gallery => {
            if (gallery) {
                res.send(gallery)
            }
        })
    })

    server.get('/fb/posts', (req, res) => {
        fetcher(
            'GET', 
             configs.fb.url + '/posts?access_token=' + configs.fb.token + '&fields=id,picture,type,message,caption'
        ).then( posts => {
            if (posts) {
                res.send(posts)
            }
        })
    })

    server.post('/contact', (req, res) => {
        email({
            subject: req.body.subject,
            body: req.body.body,
            name: req.body.name,
            address: req.body.address
        }).then( response => {
            if (response.error) {
                console.log('e:', response.error.message)
            }
            res.send(response)

        }).catch( error => {
            console.log('e', error)
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

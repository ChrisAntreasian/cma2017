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


app.prepare().then(() => {
    const server = express()
    server.use(bodyParser.json())
    
    // server.get('/', (req, res) => {
    //   return app.render(req, res, '/landing', req.query)
    // })

    server.get('/wp/posts', (req, res) => {
        fetch( configs.wp.url + '/wp/v2/posts', {
            method: 'GET'
        }).then( posts => {
            return posts.json()
        }).then( posts => {
            res.send(posts)
        }).catch( error => {
            console.log('e:', error)
        })
    })
    server.get('/wp/resume', (req, res) => {
        fetch( configs.wp.url + '/wp/v2/posts/' + configs.wp.resumeId, {
            method: 'GET'
        }).then( posts => {
            return posts.json()
        }).then( posts => {
            res.send(posts)
        }).catch( error => {
            console.log('e:',error)
        })
    })
    server.get('/wp/q-gallery', (req, res) => {
        fetch( configs.wp.url + '/wp/v2/media?parent=' + configs.wp.quintGalleryParentId, {
            method: 'GET'
        }).then( media => {
            return media.json()
        }).then( media => {
            res.send(media)
        }).catch( error => {
            console.log('e:',error)
        })
    })
    server.get('/fb/posts', (req, res) => {
        fetch( configs.fb.url + '/posts?access_token=' + configs.fb.token + '&fields=id,picture,type,message,caption', {
            method: 'GET'
        }).then( posts => {
            return posts.json()
        }).then( posts => {
            res.send(posts)
        }).catch( error => {
            console.log('e:', error)
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

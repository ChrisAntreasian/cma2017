import React from 'react'
import HTMLParser from 'html-react-parser'

import { post } from './../../styles.js'

const Post = (props) => {
    let captionTextNode = null;
    if (props.message) {
        captionTextNode = (
            <a>{props.message}</a>
        )
    }
    let pictureNode = null
    if (props.picture) {
        pictureNode = (
            <img src={props.picture} />
        )
    }
    return (
        <article>
            {(props.picture) ? <img src={props.picture} />: null}
            {(props.message) ? <h5>{props.message}</h5> : null}
            <style jsx>{post}</style>
        </article>
    )
}

export default Post

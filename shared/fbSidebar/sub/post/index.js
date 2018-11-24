import React from 'react'
import HTMLParser from 'html-react-parser'

import { post } from './../../styles.js'

const Post = (props) => {
    let captionTextNode = null;
    if (props.message) {
        captionTextNode = (
            <h5>{props.message}</h5>
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
            {pictureNode}
            {captionTextNode}
            <style jsx>{post}</style>
        </article>
    )
}

export default Post

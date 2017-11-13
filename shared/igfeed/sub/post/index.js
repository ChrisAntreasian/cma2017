import React from 'react'
import HTMLParser from 'html-react-parser'

import { post } from './../../styles.js'

const Post = (props) => {
    let captionTextNode = null;
    if (props.caption) {
        captionTextNode = (
            <h5>{props.caption.text}</h5>
        )
    }
    return (
        <article>
            <img src={props.images.low_resolution.url} />
            {captionTextNode}
            <style jsx>{post}</style>
        </article>
    )
}

export default Post
import React from 'react'
import HTMLParser from 'html-react-parser'

import { post } from './../../styles.js'

const Post = (props) => {
    return (
        <article className="clear">
            <h3>{HTMLParser(props.title.rendered)}</h3>
            <div>{HTMLParser(props.content.rendered)}</div>
            <style jsx>{post}</style>
        </article>
    )
}

export default Post
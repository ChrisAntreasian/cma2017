import React from 'react'

const Post = (props) => {
    return (
        <article>
            <h3 dangerouslySetInnerHTML={{__html: props.title.rendered}} />
            <p dangerouslySetInnerHTML={{__html: props.content.rendered}} />
        </article>
    )
}

export default Post
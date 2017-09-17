import React from 'react'

const Post = (props) => {
    console.log(props)
    return (
        <div className="post">
            <h3 className="post__title" dangerouslySetInnerHTML={{__html: props.title.rendered}} />
            <div className="post__content" dangerouslySetInnerHTML={{__html: props.content.rendered}} />
        </div>
    )
}

export default Post

// <h3 className="post__title">{props.post.title}</h3>
//             <div className="post__content">{props.post.content}</div>
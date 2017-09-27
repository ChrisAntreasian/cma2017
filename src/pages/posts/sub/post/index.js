import React from 'react'
import styles from './../../styles.css'

const Post = (props) => {
    return (
        <article className={styles.post}>
            <h3 dangerouslySetInnerHTML={{__html: props.title.rendered}} />
            <div dangerouslySetInnerHTML={{__html: props.content.rendered}} />
        </article>
    )
}

export default Post
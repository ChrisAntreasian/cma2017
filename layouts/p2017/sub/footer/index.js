import Link from 'next/link'
import styles from './styles'

export default () => {
    return (
        <div className="wrap">
            <section className="container">
                <a> Link 1 </a>
                <a> Link 4 </a>
                <a> Link 3 </a>
                <a> Link 2</a>
            </section>
            <style jsx>{styles}</style>
        </div>
    )
}


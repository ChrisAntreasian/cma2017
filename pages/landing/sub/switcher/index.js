import { switcher } from './../../styles'
import HTMLParser from 'html-react-parser'

export default (props) => {
    return (
        <div className="wrap">
            <section>
                <div className="switcher">
                    <article>
                        {HTMLParser(props.resume)}
                    </article>
                </div>
            </section>
            <style jsx>{switcher}</style>
        </div>
    )
}

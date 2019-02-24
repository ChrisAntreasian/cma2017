import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { setActiveMedia } from '~/shared/gallery/store'

const Gallery = (props) => {
    return (
        <article>
            <figure>
                <img src={props.media[props.activeMedia].media_details.sizes.full.source_url}
                alt={props.media[props.activeMedia].title.rendered} />
                <figcaption>
                    {props.media[props.activeMedia].title.rendered}
                </figcaption>
            </figure>
            <div className="wrap wrap--red">
                <section>
                    {
                        props.media ? (
                            props.media.map((media, i) => {
                                return(
                                    <a onClick={() => props.setActiveMedia(i)}>
                                        <img src={media.media_details.sizes.thumbnail.source_url} 
                                        alt={media.alt_text} title={props.media.alt_text} />
                                    </a>
                                )
                            })
                        ) : '...loading'
                    }
                </section>
            </div>
        </article>
    )
}

const mapStateToProps = state => ({
    media: state.gallery.media,
    activeMedia: state.gallery.activeMedia
})

const mapDispatchToProps = dispatch => bindActionCreators({
    setActiveMedia
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Gallery)


import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import store from './store'
import {
    updateInput,
    submitForm
} from './store'

import styles from './styles'

const ContactForm = (props) => {
    const handleChange = (e) => {
        let emailDetails = {}
        emailDetails = {
            name: e.target.name,
            value: e.target.value
        }
        props.updateInput(emailDetails)
    }
    let errorNode = null
    if (props.error) {
        errorNode = (
            <div className="error">
                {props.error}
            </div>
        )
    }
    let successNode = null
    if (props.success) {
        successNode = (
            <div className="success">
                {props.success}
            </div>
        )
    }
    return (
        <form onSubmit={e => props.submitForm(e)}>
            {successNode}
            {errorNode}
            <input name="email" value={props.email} type="email" onChange={handleChange} placeholder="email" />
            <input name="subject" value={props.subject} type="text" onChange={handleChange} placeholder="subject" />
            <textarea name="body" value={props.body} onChange={handleChange} placeholder="body"></textarea>
            <input name="name" value={props.name} type="text" placeholder="name" onChange={handleChange} />
            <button type="submit">{(props.loading) ? '...loading': 'Contact Me'}</button>
            <style jsx>{styles}</style>
        </form>
    )
}
const mapDispatchToProps = dispatch => bindActionCreators({
    updateInput,
    submitForm
}, dispatch)

const mapStateToProps = state => ({
    email: state.contact.email,
    subject: state.contact.subject,
    body: state.contact.body,
    name: state.contact.name,
    error: state.contact.error,
    success: state.contact.success,
    loading: state.contact.loading
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ContactForm)

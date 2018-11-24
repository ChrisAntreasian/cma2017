import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import store from './store'
import {
    updateForm,
    submitForm
} from './store'

import styles from './styles'

const ContactForm = (props) => {
    const handleChange = (e) => {
        let emailDetails = {}
        emailDetails[e.target.name] = e.target.value
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
    console.log(props)
    return (
        <form onSubmit={e => props.submitForm(e)}>
            {successNode}
            {errorNode}
            <input name="email" type="email" onChange={handleChange} placeholder="email" />
            <input name="subject" type="text" onChange={handleChange} placeholder="subject" />
            <textarea name="body" onChange={handleChange} placeholder="body"></textarea>
            <input name="name" type="text" placeholder="name" onChange={handleChange} />
            <button type="submit">{(props.loading) ? '...loading': 'Contact Me'}</button>
            <style jsx>{styles}</style>
        </form>
    )
}
const mapDispatchToProps = dispatch => bindActionCreators({
    updateForm,
    submitForm
}, dispatch)

const mapStateToProps = state => ({
    email: state.contact.email,
    subject: state.contact.subject,
    body: state.contact.body,
    name: state.contact.name,
    error: state.contact.error,
    loading: state.contact.loading
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ContactForm)

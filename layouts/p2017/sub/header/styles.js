import css from 'styled-jsx/css'

export default css`
    header {
        width: 100%;
        margin: 0 auto;
        padding: 0.65rem 0;
        background-image: linear-gradient(to bottom, #1C5499, #15447e);
        border-bottom: 3px solid #1f5ca7;
        color: white;
        position: fixed;
        top: 0;
        z-index: 50;
    }
    a {
        color: white;
        cursor: pointer;
    }
    .wrap {
        background: #1C5499;
    }
    .logo {
        float: left;
    }
    .user {
        float: right;
        position: relative;
        width: 320px;
        z-index: 500;
    }
`
export const userStatus = css`
    .userStatus {
        background-image: linear-gradient(to bottom, #1C5499, #15447e);
        z-index: 501;
        position: absolute;
    }
    a {
        cursor: pointer;
    }
`

export const dropdown = css`
    .dropdown {
        background:#1e70a8;
        background-image: linear-gradient(to bottom, #1e70a8, #227fbf);
        text-align: center;
        line-height: 70px;
        position: absolute;
        top: 0;
        z-index: 499;
        padding: 20px;
        height: 100px;
    }
    .dropdown__close {
        position: absolute;
        top: 0;
        right: 0;
        margin: 3px 3px 0 0;
        line-height: 13px;
        cursor: pointer;
    }
`

export const form = css`
    form {
        line-height: 18px;
        text-align: left;
    }
    label {
        margin-right: 3px;
        width: 80px;
        display: inline-block;
    }
    input {
        margin-bottom: 10px;
    }
    button {
        display: block;
        margin: 0 auto;
    }
    .header__logged-out {
        text-align: right;
    }
`

export const errorStyles = css`
    .error {
        position: absolute;
        top: 50;
        right: 0;
        background: #960f0f;
        background-image: linear-gradient(to top, #960f0f, #c31515);
    }
`
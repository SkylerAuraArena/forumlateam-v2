import React from 'react'

const Button = (props) => {
    console.log("%cButton.js", 'background: darkred; color: white;')
    return(
        <span className={props.css} onClick={props.function}>
                { props.children }
        </span>
    )
}

export default Button
import React from 'react'
import ReactDom from 'react-dom'

function PortalDemo() {

    return ReactDom.createPortal(
        <div>
            <h2>Hii Portal </h2>
        </div>,
        document.getElementById('root-portal')
    )  
}

export default PortalDemo

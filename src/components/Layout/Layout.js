import React from 'react'
import './Layout.css'

const layout = (props) => (
    <div className="main-layout">
        <div className="navigation-cont">
            Toolbar, Sidebar, Backdrop
        </div>
        <main className="main-comp">
            {props.children}
        </main>
    </div>
);

export default layout;
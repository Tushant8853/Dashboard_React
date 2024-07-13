import React from 'react';
import Body from './body.js'
import SideMenu from './sidemenu.js'
import './mainbody.css'


function MainBody() {
    return (
        <div className="mainBodyApp">

            <div className="appSideBody">
                <SideMenu />
            </div>
            <div className="appBody">
                <Body />
            </div>
        </div>
    );
}

export default MainBody;
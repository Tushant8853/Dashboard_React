import React from 'react';
function SideMenu() {
    return (
        <div className="SideMenuContainer">
            <div className='SideMenu'>
                <ul>
                    <li>DashBoard</li>
                    <li>client</li>
                    <li>Gloabal</li>
                    <li>Admin</li>
                    <li>Settings</li>
                </ul>

                <ul>
                    <li>Help</li>
                    <li>Logout</li>
                </ul>
            </div>
        </div>
    );
}

export default SideMenu;
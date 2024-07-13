import React from 'react';
import Logo from '../../assets/image 1.png'
import Search from '../../assets/search.png'
import Vector from '../../assets/Vector.png'
import Setting from '../../assets/setting.png'
import Info from '../../assets/info.png'
import Notification from '../../assets/notifiaction.png'
import './header.css';

function App() {
    return (
        <div className="App">
            <div className='Header'>
                <img src={Logo} className="headerlogo" alt="logo" />
                <img src={Search} className="headerimgsearch" alt="logo" />
                <img src={Vector} className="headerimgvector" alt="logo" />
                <img src={Setting} className="headerimgsetting" alt="logo" />
                <img src={Notification} className="headerimgnotification" alt="logo" />
                <img src={Info} className="headerimginfo" alt="logo" />

                {/* <a href="#" className='headertext'>azure@cholachari</a> */}
            </div>
        </div>
    );
}

export default App;
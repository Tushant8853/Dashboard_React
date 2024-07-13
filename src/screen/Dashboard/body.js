import React, { useState } from 'react';
import './Body.css';
import Img1 from '../../assets/Group5(1).png';
import Img2 from '../../assets/Group5(2).png';
import Img3 from '../../assets/Group5(3).png';
import Img4 from '../../assets/Group5(2).png';

import Client from '../../assets/client.png';
import Machine from '../../assets/Machine.png';

function Body() {
    const handleButtonClick1 = () => {
        console.log("Button 1 clicked!");
    };

    const handleButtonClick2 = () => {
        console.log("Button 2 clicked!");
    };

    // Dummy data for the big table
    const tableData = [
        ['Data 1', 'Data 2', 'Data 3', 'Data 4', 'Data 5', 'Data 6', 'Data 7', 'Data 8'],
        ['Data 9', 'Data 10', 'Data 11', 'Data 12', 'Data 13', 'Data 14', 'Data 15', 'Data 16'],
        ['Data 17', 'Data 18', 'Data 19', 'Data 20', 'Data 21', 'Data 22', 'Data 23', 'Data 24'],
        ['Data 25', 'Data 26', 'Data 27', 'Data 28', 'Data 29', 'Data 30', 'Data 31', 'Data 32'],
        ['Data 33', 'Data 34', 'Data 35', 'Data 36', 'Data 37', 'Data 38', 'Data 39', 'Data 40'],
    ];

    const [selectedDropdownValue, setSelectedDropdownValue] = useState('');
    const [searchTerm, setSearchTerm] = useState('');
    const [currentDate, setCurrentDate] = useState('');

    const handleDropdownChange = (event) => {
        setSelectedDropdownValue(event.target.value);
    };

    const handleSearch = () => {
        console.log("Search clicked with term:", searchTerm);
        // Implement your search logic here
    };

    const handleDateButtonClick = () => {
    };

    return (
        <div className='container'>
            <div className='body'>
                <h2 className='title'>Cost Management | Overview </h2>

                <div className='part'>
                    <div className='box'>
                        <h3>Total Token Usage</h3>
                        <p>9.6</p>
                        <h2>26,411.68 SG Tokens</h2>
                        <p>including All Clients Gains Till now</p>

                        <button className='button1' onClick={handleButtonClick1}>Button 1</button>
                        <button className='button2' onClick={handleButtonClick2}>Button 2</button>
                    </div>
                    <div className='box'>
                        <h3>Most Popular Services</h3>
                        <table className='table' style={{ border: 'none' }}>
                            <tbody>
                                <tr>
                                    <td style={{ padding: '8px' }}>#</td>
                                    <td style={{ padding: '8px' }}>Name</td>
                                    <td style={{ padding: '8px' }}>Popularity</td>
                                    <td style={{ padding: '8px' }}>Sales</td>
                                </tr>
                                <tr>
                                    <td style={{ padding: '8px' }}>01</td>
                                    <td style={{ padding: '8px' }}>AMD 2 Core</td>
                                    <td style={{ padding: '8px' }}><img src={Img1} alt="Img1" /></td>
                                    <td style={{ padding: '8px' }}>45</td>
                                </tr>
                                <tr>
                                    <td style={{ padding: '8px' }}>02</td>
                                    <td style={{ padding: '8px' }}>AMD 3 Core</td>
                                    <td style={{ padding: '8px' }}><img src={Img2} alt="Img2" /></td>
                                    <td style={{ padding: '8px' }}>29</td>
                                </tr>
                                <tr>
                                    <td style={{ padding: '8px' }}>03</td>
                                    <td style={{ padding: '8px' }}>AMD 4 Core</td>
                                    <td style={{ padding: '8px' }}><img src={Img3} alt="Img3" /></td>
                                    <td style={{ padding: '8px' }}>25</td>
                                </tr>
                                <tr>
                                    <td style={{ padding: '8px' }}>04</td>
                                    <td style={{ padding: '8px' }}>Intel 16 13th</td>
                                    <td style={{ padding: '8px' }}><img src={Img4} alt="Img4" /></td>
                                    <td style={{ padding: '8px' }}>25</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className='box' style={{ alignItems: 'center', justifyContent: 'center' }}>
                        <div className='threebox'>
                            <div className='inside'>
                                <img src={Client} alt="Img4" />
                            </div>
                            <div className='inside'>
                                <h2>220</h2>
                                <p>Total Client</p>
                            </div>
                        </div>
                        <div className='threebox'>
                            <div className='inside'>
                                <img src={Machine} alt="Img4" />
                            </div>
                            <div className='inside'>
                                <h2>220</h2>
                                <p>Total Client</p>
                            </div>
                        </div>
                        <div className='threebox'>
                            <div className='inside'>
                                <img src={Machine} alt="Img4" />
                            </div>
                            <div className='inside'>
                                <h2>220</h2>
                                <p>Total Client</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='part'>
                    <div className='bigBox'>
                        <p>Client Service Usage</p>
                        <p>All live Client details</p>

                        <div className="row">
                            <div className="dropdown">
                                <select value={selectedDropdownValue} onChange={handleDropdownChange}>
                                    <option value="">Select Option</option>
                                    <option value="option1">Option 1</option>
                                    <option value="option2">Option 2</option>
                                    <option value="option3">Option 3</option>
                                </select>
                            </div>
                            <div className="search">
                                <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                                <button onClick={handleSearch}>Search</button>
                            </div>
                            <div className="date">
                                <button onClick={handleDateButtonClick}>Today's Date</button>
                                {currentDate && <p>{currentDate}</p>}
                            </div>
                        </div>

                        <table className='bigTable' style={{ border: 'none', width: '100%' }}>
                            <tbody>
                                {tableData.map((row, rowIndex) => (
                                    <tr key={rowIndex}>
                                        {row.map((cell, cellIndex) => (
                                            <td key={cellIndex} style={{ padding: '8px', textAlign: 'center' }}>{cell}</td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Body;

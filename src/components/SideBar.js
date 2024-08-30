import React from 'react';
import './SideBar.css';

function SideBar(){
    return(
        <div className='sidebar-page'>
        <ul className='content-side'>
            <li className='list-dashboard'>Dashboard</li>
            <li className='list-content'>Inventory</li>
            <li className='list-content'>Order</li>
            <li className='list-content'>Returns</li>
            <li className='list-content'>Customers</li>
            <li className='list-content'>Shipping</li>
            <li className='list-content'>Channel</li>
            <li className='list-content'>Integrations</li>
            <li className='list-content'>Calculators</li>
            <li className='list-content'>Reports</li>
            <li className='list-content'>Account</li>
        </ul>
        </div>

    )
}
export default SideBar;
import React from 'react'
import './topheader.scss'
import { Link } from 'react-router-dom'

const TopHeader = () => {
    return (
        <div className="top-header">
            <div className='container top-header-content'>
                <div className="left-section">
               <ul>
                <li>
                <select>
                    <option value="" key="">ENGLISH</option>
                    <option value="" key="">ARABIC</option>
                    <option value="" key="">SPANISH</option>
                </select>                
                </li>
                <li>
                <select>
                    <option value="" key="">COUNTRY</option>
                    <option value="" key="">UK</option>
                    <option value="" key="">USA</option>
                    <option value="" key="">CANADA</option>
                </select>                
                </li>
                <li>
                    <span>
                    FREE SHIPPING FOR ALL ORDERS OF $150
                    </span>
                </li>
                </ul>

                </div>
                <div className="right-section">
                    <ul>
                        <li><Link to="/newsletter">News Letter</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link to="/faq">Faq</Link></li>
                    </ul>
                </div>
            </div>


        </div>
    )
}

export default TopHeader
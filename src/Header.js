import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className='header'>
            <Link to="/">
            <img className="header--logo"  alt="amazon"
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" 
            />
            </Link>

            <span className="header--logoIn">.in</span>
            <div className="header--LocationIcon">
            <LocationOnOutlinedIcon className="header--LocationOnOutlinedIcon" />
            </div>
            <div className="header--LocationOption">
            <span className="header--optionLocationOne">Hello</span>
            <span className="header--optionLocationTwo">Select your address</span>
            </div>
            <div className="header--OptionAll">
                <select className="header--select">
                <option className="header--selectAll" value="0">All Categories</option>
                <option>Deals</option>
                <option>Alexa Skills</option>
                <option>Amazon Devices</option>
                <option>Amazon Fashion</option>
                <option>Amazon Pantry</option>
                <option>Appliances</option>
                <option>Apps & Games</option>
                <option>Baby</option>
                <option>Beauty</option>
                <option>Books</option>
                <option>Car & Motorbike</option>
                <option></option>
                <option></option>
                <option></option>
                <option></option>
                <option></option>
                <option></option>
                <option></option>
                <option></option>
                <option></option>
                <option></option>
                <option></option>
                <option></option>
                <option></option>
                <option></option>
                <option></option>
                <option></option>
                <option></option>
                <option></option>
                <option></option>
                <option></option>
                <option></option>
                <option></option>
                <option></option>
                <option></option>
                <option></option>
                </select>
            </div>
            <div className="header--search">
                <input className="header--searchInput" type="text" />
                <SearchIcon className="header--SearchIcon" />
            </div>
            <div className="header--flagArrow">
            <img className="header--flag" alt="flag" src="https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1350px-Flag_of_India.svg.png" />
            <ArrowDropDownIcon className="header-Arrow" />
           </div>

            <div className="header--nav">
                <div className="header--option">
                    <span className="header--optionLineOne">Hello Guest</span>
                    <span className="header--optionLinetwo">Sign in</span>
                </div>

                <div className="header--option">
                    <span className="header--optionLineOne">Return</span>
                    <span className="header--optionLinetwo"> &Order</span>
                </div>

                <div className="header--option">
                <span className="header--optionLineOne">Your</span>
                    <span className="header--optionLinetwo">Prime</span>
                </div>
            </div>

            <Link to="/Checkout">
            <div className="header--optionBasket">
            <ShoppingCartIcon />
            <span className="header--optionLinetwo header--basketCart">Cart</span>
            <span className="header--optionLinetwo header--basketCount">0</span>
            </div>
            </Link>

        </div>
    )
}

export default Header

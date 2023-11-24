import React, { useState } from 'react';
import './header.css'
import { Link } from 'react-router-dom'
import { nav } from "../../data/Data"

const Header = () => {
    const [navlist, setNavlist] = useState(false)
    let element = document.querySelector(".scroller");
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    window.addEventListener("scroll", () =>{
        let scrollTop = document.documentElement.scrollTop;
        element.style.width = `${(scrollTop / height) * 100}%`
});  
    return (
        <>
            <header>
                <div className="scroller"></div>
                <div className="container flex">
                    <div className="logo">
                        <img src='/images/logo.png' alt="" />
                    </div>
                    <div className="nav">
                        <ul className={navlist ? 'small' : 'flex'}>
                            {nav.map((list, index) => (
                                <li key={index}>
                                    <Link to={list.path}>{list.text}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="button flex">
                        <h4>
                            <span>2</span>
                            My List
                        </h4>
                        <button>
                            <i class="fa fa-sign-out"></i>
                            Sign In
                        </button>
                    </div>
                    <div className="toggle">
                    <button className='res' onClick={() => setNavlist(!navlist)}>
                        {navlist ? <i className='fa fa-times'></i> : <i className='fa fa-bars'></i>}
                        </button>

                    </div>
                </div>
            </header>
        </>
    )
}

export default Header

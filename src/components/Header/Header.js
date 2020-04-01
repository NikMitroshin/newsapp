import React from 'react';
import {NavLink} from 'react-router-dom';

let Header = () => {
    return (
        <header className="header">
            <div className="block-wrapper">
                <div className="block-header">
                    <NavLink to='/' className='header-tiitle'>Новостник</NavLink>
                    <nav className='header-nav'>
                    <NavLink to='/' exact className='header-nav__item' activeClassName='nav-active'>Главная</NavLink>
                    <NavLink to='/news' exact className='header-nav__item' activeClassName='nav-active'>Новости</NavLink>
                    <NavLink to='/contacts' exact className='header-nav__item' activeClassName='nav-active'>Контакты</NavLink>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header;
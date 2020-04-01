import React from 'react';
import AllNews from '../News/AllNews.js';
import {NavLink} from 'react-router-dom';

const Main = props => {

    return (
        <div className='block-page'>
            <h2 className="block-main-title">Всегда <br/> свежие <span style={{color: "#004FEC"}}>новости</span></h2>
            <div className='block-news'>
                <AllNews 
                    dataNews ={props.dataNews}
                    amount = {5}
                    receiveId={props.receiveId}
                />
            </div>
            <NavLink to='/news' exact className="block-main-link">Быть в курсе событий</NavLink>
        </div>
    )
}

export default Main;



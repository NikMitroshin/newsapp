import React from 'react';
import {NavLink} from 'react-router-dom';

const NewsItem = props => {
    const addZero = el =>  {
        if (el < 10) el = '0' + el;
        return el;
    }
    const date = new Date(Date.parse(props.publishedDay));
    const day = addZero(date.getDate());
    const month =addZero(date.getMonth() + 1); 
    const hostname = (new URL(props.sourse)).hostname;
    return (
        <div className="box-news"> 
            <NavLink to={'/news/news' + (props.id + 1)} className='header-tiitle'  onClick = {() => props.receiveId(props.id)}>
                <h3 className="box-news__tittle">{props.title}</h3>
            </NavLink>
            <div className="box-news__info">
                <a href={props.sourse} className="box-news__info-sourse">{hostname}</a>
                <p className="box-news__info-time"><span className="box-time__day">{day}</span>/{month}</p>
            </div>
        </div>
    )
}

export default NewsItem;
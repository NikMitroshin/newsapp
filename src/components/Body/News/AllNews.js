import React from 'react';
import NewsItem from './NewItem/NewsItem.js';

const AllNews = props => {    
    return props.dataNews && props.dataNews.filter( (item, index) => index <= props.amount ).map ((item, index) => (
        <NewsItem 
        key ={index}
        id ={index}
        title = {item.title}
        sourse = {item.url}
        publishedDay = {item.publishedAt}
        receiveId= {props.receiveId}
        />
    ))
}

export default AllNews;
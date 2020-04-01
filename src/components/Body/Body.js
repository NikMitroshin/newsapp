import React, { useState, useEffect } from 'react';
import News from './News/News.js';
import Main from './Main/Main.js';
import OneNews from './News/OneNews/OneNews.js';
import Contacts from './Contacts/Contacts.js';
import {Route} from 'react-router-dom';
import axios from 'axios';

const useFetch = () => {
    const [dataNews, updateDataNews] = useState(null);
    const requestUrl = 'https://newsapi.org/v2/top-headlines?' +
    'country=ru&' +
    'apiKey=4908ee40e5b045a28ed0bd079849bf34';
    useEffect ( () => {
        const fetchData = async () => {
            const response = await axios.get(requestUrl);
            console.log(response.data.articles)
            updateDataNews(response.data.articles)
        }
        fetchData();
    },[])
    console.log('сходил за файлами')
    return dataNews;
}
const Body = () => {
    const allDataNews = useFetch();
    const [currentNews, setCurrentNews] = useState(1)
    const receiveId = id => {       
        setCurrentNews(id);
    }
    if (!allDataNews) console.log ('не вышло');
    if (allDataNews) console.log ('вышло');

    return (
        <section className='block-body'>
            <div className="block-wrapper">
                <Route
                    path='/'
                    exact
                    render ={() => <Main dataNews ={allDataNews} receiveId={receiveId} />}
                />
                <Route
                    path='/news'
                    exact
                    component ={() => <News dataNews ={allDataNews} receiveId={receiveId}/>}
                />
                <Route
                    path='/contacts'
                    exact
                    component ={Contacts}
                />
                <Route
                    path={'/news/news:id'}
                    exact
                    render = {() => {
                        console.log('пробуем')
                        if (allDataNews) {
                            return <OneNews
                                title = {allDataNews[currentNews].title}
                                sourse = {allDataNews[currentNews].url}
                                publishedDay = {allDataNews[currentNews].publishedAt}
                                description = {allDataNews[currentNews].description}
                                urlImage = {allDataNews[currentNews].urlToImage}
                                />
                        } 
                    }
                }/>
            </div>
        </section>
    )
}

export default Body;

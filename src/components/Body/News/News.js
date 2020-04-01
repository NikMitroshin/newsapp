import React from 'react';
import AllNews from './AllNews.js';

const News = props => {
    return (
        <div className='block-page'>
           <h2 className='page-news__tittle'>Быть в курсе</h2>
                <div className='block-news'>
                    <AllNews 
                        dataNews ={props.dataNews}
                        amount = {20}
                        receiveId={props.receiveId}
                    />
                </div>
        </div>
    )
}
export default News;
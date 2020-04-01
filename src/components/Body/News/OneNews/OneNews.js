import React from 'react';
    
const OneNews = props => {
    
    const addZero = el =>  {
        if (el < 10) el = '0' + el;
        return el;
    }
    const date = new Date(Date.parse(props.publishedDay));
    const day = addZero(date.getDate());
    const month =addZero(date.getMonth() + 1); 

    const hostname = (new URL(props.sourse)).hostname;
     
    return (
            <div className="block-oneNews"> 
                <div className="block-oneNews-col1">
                    <h3 className="block-oneNews__tittle">{props.title}</h3>
                    <a href={props.sourse} className="block-oneNews__info-sourse">{hostname}</a>
                    <p className="block-oneNews__info-time"><span className="box-time__day">{day}</span>/{month}</p>
                </div>
                <div className="block-oneNews-col2">
                    <div className="block-oneNews__img">
                        <img src={props.urlImage} width="100%" alt=""/> 
                    </div>
                    <p className="block-oneNews__text">{props.description}</p>
                </div>
            </div>
    )
}

export default OneNews;
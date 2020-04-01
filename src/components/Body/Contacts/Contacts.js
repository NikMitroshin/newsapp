import React from 'react';

const Contacts =() => {
    return (
        <div className='block-contact'>
            <div className="contact-info">
                <p><a className="contact-info__phone" href="tel:89217400350">+7 (921) 740 035 00</a></p>
                <p className="contact-info__name">Митрошин <br/> Никита</p>
                <p><a className="contact-info__mail" href="mailto:mitroshin.js@gmail.com">mitroshin.js@gmail.com</a></p>
                <p className="contact-info__position">JavaScript разработчик</p>
                <p className="contact-info__stack">HTML, CSS, ES5, ES6, JQuery, <span style={{color: "#004FEC"}}>React</span></p>
            </div>
            <div className="contact-avatar">
                <img src="/img/contact-avatar.jpg" alt="" className="contact-avatar__img"/>
            </div>
        </div>
    )
}
export default Contacts;
import React from 'react';
import "./app.css"

function FooterSection() {
    return (
        <div className='FooterSection px-5 py-4'>
            <span>2024@All right reserved</span>
            <div className="iconsDivOfFooter">
                <a href="https://www.instagram.com/cristiano/"><i className="fa-brands fa-instagram"></i></a>
                <a href="https://twitter.com/Cristiano"><i className="fa-brands fa-twitter"></i></a>
                <a href="https://www.youtube.com/@CristianoRonaldoYouTube"><i className="fa-brands fa-youtube"></i></a>
            </div>
        </div>
    )
}

export default FooterSection;
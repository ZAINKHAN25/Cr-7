import React from 'react';
import "./app.css"

function HeroSection() {

    return (
        <div className='mb-5 mt-1'>
            <div id="carouselExampleAutoplaying" className="carousel slide carousel-fade" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://e6.365dm.de/22/09/1600x900/skysport_de-ronaldo-portugal_5906577.jpg?20220921112110" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://a1.espncdn.com/combiner/i?img=%2Fphoto%2F2018%2F0320%2Fr344016_1296x729_16%2D9.jpg" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://c4.wallpaperflare.com/wallpaper/139/444/1000/cristiano-ronaldo-wallpaper-preview.jpg" className="d-block w-100" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>

    )
}

export default HeroSection
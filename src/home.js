import React from 'react';
import './home.css';
import Product from './Product';
function home() {
    return (
        <div className="home">
            <div className="home--container">
                <img className="home--image" src="https://m.media-amazon.com/images/I/71LPNi0PfdL._SX3000_.jpg" alt="" />
                 
                    <div className="home--row">
                        <Product 
                            id="01"
                            title="See U in C by  Ali Karim Sayed (Author)"
                            price={4450}
                            image="https://images-na.ssl-images-amazon.com/images/I/41SMlI+1PrL._SX331_BO1,204,203,200_.jpg"
                        />
                        <Product 
                            id="02"
                            title="Noise ColorFit Pro 2 Full Touch Control Smart Watch"
                            price={2799}
                            image="https://m.media-amazon.com/images/I/61xzuXWWozS._SL1200_.jpg"
                        />
                        <Product 
                            id="03"
                            title="Lenovo Tab Ideapad Duet 3 (10.3 inch, 4 GB, 128 GB, Wi-Fi) with Bluetooth Keyboard and Digital Pen, Graphite Grey"
                            price={28500}
                            image="https://m.media-amazon.com/images/I/61BFIooLL3S._SL1000_.jpg"
                        />
                    </div>
                    <div className="home--row">
                    <Product 
                            id="04"
                            title="OnePlus 9 5G (Astral Black, 8GB RAM, 128GB Storage)"
                            price={49500}
                            image="https://m.media-amazon.com/images/I/61urU8k2lFL._SL1500_.jpg"
                        />
                        <Product 
                            id="05"
                            title="Apple iPhone 13 Mini (256GB) - Midnight"
                            price={10}
                            image="https://m.media-amazon.com/images/I/61KeIxmldLL._SL1500_.jpg"
                        />
                    </div>
                    <div className="home--row">
                    <Product 
                            id="06"
                            title="Lenovo Tab M10 HD 2nd Gen (10.1 inch/25.6 cm, 4 GB, 64 GB, Wi-Fi+LTE)"
                            price={20500}
                            image="https://m.media-amazon.com/images/I/41jdvXSoeyS._SL1000_.jpg"
                        />
                    </div>
            </div>  
        </div>      
       
    )
}

export default home;
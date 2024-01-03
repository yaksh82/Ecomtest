import React from 'react'

import Products from './Products';


const Home = () => {
    return (
        <div className="Hero">
            <div className="card bg-dark text-white border-0">
                <img src="/assests/fashion.jpg" className="card-img" alt="Background" hight="550"/>
                    <div className="card-img-overlay d-flex flex column justify-content-centre">
                        <div classNamename="Container">
                       <h5 className="card-title display-3 fw-bolder mb-0">NEW SEASON ARRIVALS</h5>
                        <p className="card-text lead fs-2">

                            CHECKOUT ALL THE TRENDS
                        </p>
                        
                        </div>
                    </div>
            </div>
<Products/>
        </div>
    )
}

export default Home;

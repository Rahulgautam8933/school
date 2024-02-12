import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <>

            <div style={{ height: "90vh" }} className="homecontainer container w-100  d-flex flex-column justify-content-center align-items-center g-5 ">

                <h4 className='w-75 text-center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h4>
                <p>Lorem ipsum dolor Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid natus asperiores nobis. sit amet consectetur adipisicing elit. Nemo at sit debitis!</p>
                <div className="row align-items-center justify-content-center">
                    <div className="col-md-4">

                        <div class="card" >

                            <div class="card-body text-center">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <Link to="/class1To10" class="btn btn-primary">Go somewhere</Link>
                            </div>

                        </div>
                    </div>
                    <div className="col-md-4">

                        <div class="card" >

                            <div class="card-body text-center">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <Link to="/PrimaryClasses" class="btn btn-primary">Go somewhere</Link>
                            </div>

                        </div>
                    </div>
                </div>


            </div>

        </>
    )
}

export default Home


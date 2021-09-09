import React from 'react'

const Banner = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-3">
                    <ul class="list-group">
                        <li class="list-group-item">An item</li>
                        <li class="list-group-item">A second item</li>
                        <li class="list-group-item">A third item</li>
                        <li class="list-group-item">A fourth item</li>
                        <li class="list-group-item">And a fifth one</li>
                        <li class="list-group-item">And a fifth one</li>
                        <li class="list-group-item">And a fifth one</li>
                        <li class="list-group-item">And a fifth one</li>
                        <li class="list-group-item">And a fifth one</li>
                        <li class="list-group-item">And a fifth one</li>
                        <li class="list-group-item">And a fifth one</li>
                    </ul>
                </div>
                <div className="col-md-9">
                    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src="https://s3-ap-southeast-1.amazonaws.com/media.evaly.com.bd/media/images/1c39a35e428d-bd0b22df-12c6-4399-93e7-164d1ae472d2.jpeg" class="d-block w-100" alt="..." />
                            </div>
                            <div class="carousel-item">
                                <img src="https://s3-ap-southeast-1.amazonaws.com/media.evaly.com.bd/media/images/a3b98219330d-0cdaf41d-3adc-4071-8425-06fad33dbebd.jpeg" class="d-block w-100" alt="..." />
                            </div>
                            <div class="carousel-item">
                                <img src="https://s3-ap-southeast-1.amazonaws.com/media.evaly.com.bd/media/images/ed025a43be9d-ca06258a-e977-458e-8467-f138874c6211.jpeg" class="d-block w-100" alt="..." />
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner

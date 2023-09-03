import React from 'react';
import a from '../../assets/images/a.jpg';
import b from '../../assets/images/b.jpg';

function BannerComponents() {
  return (
    <React.Fragment>
         <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={a} className="d-block w-100" height="450" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={b} className="d-block w-100" height="450" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={a} className="d-block w-100" height="450" alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>

    </React.Fragment>
  )
}

export default BannerComponents
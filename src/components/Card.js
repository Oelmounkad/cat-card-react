import React from 'react'

const Card = ({card}) => {
    return (
        <div className="card-group">
        <div className="flipper mb-3">
          <div className="front card text-center shadow-sm">
            <img className="card-img-top" src={card.imageUrl} alt="Cat image" width="250" height="200" />
            <div className="card-body">
            <h5 className="card-title">{card.title}</h5>
            </div>
          </div>
          <div className="back card text-center shadow-sm">
            <div className="card-body">
    <h6 className="card-subtitle mb-2 text-muted">{card.title}</h6>
              <p className="card-text">{card.description}</p>
            </div>
            <div className="card-footer">
              <button href="#" className="btn btn-primary card-link">Edit that cat</button>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Card

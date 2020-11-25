import React from 'react'

const Card = ({card}) => {
    return (
        <div class="card-group">
        <div class="flipper mb-3" ontouchstart="this.classList.toggle('hover');">
          <div class="front card text-center shadow-sm">
            <img class="card-img-top" src={card.imageUrl} alt="Cat image" width="250" height="200" />
            <div class="card-body">
            <h5 class="card-title">{card.title}</h5>
            </div>
          </div>
          <div class="back card text-center shadow-sm">
            <div class="card-body">
              <h6 class="card-subtitle mb-2 text-muted">{card.title}</h6>
              <p class="card-text">{card.description}</p>
            </div>
            <div class="card-footer">
              <button href="#" class="btn btn-primary card-link">Edit that cat</button>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Card

import React from "react";
import {Card} from 'react-bootstrap'
import ReactStars from "react-rating-stars-component";

function MovieCard ({movie}) {

    return (
        <Card style={{ width: '300px',height:'700px' }}>
        <Card.Img style={{ width: '300px',height:'400px' }}variant="top" src={movie.posterUrl} />
        <Card.Body>
          <Card.Title>{movie.title}</Card.Title>
          <Card.Text>
           {movie.description}
          </Card.Text>
          
          <ReactStars
    count={5}
    value={movie.rate}
    //onChange={ratingChanged}
    size={24}
    activeColor="#ffd700"
  />,
        </Card.Body>
      </Card>
    )
}

export default MovieCard



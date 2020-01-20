import React from 'react'

const Rating = ({rating}) => {
    let stars = null

    

    if(rating === "0"){
        stars = "☆☆☆☆☆"
    }else if(rating === "1"){
        stars = "★☆☆☆☆"
    }else if(rating === "2"){
        stars = "★★☆☆☆"
    }else if(rating === "3"){
        stars = "★★★☆☆"
    }else if(rating === "4"){
        stars = "★★★★☆"
    }else if(rating === "5"){
        stars = "★★★★★"
    }

    return(
        <div className="rating">
          <p className="stars">{stars}</p>
        </div>
      )  
}

export default Rating
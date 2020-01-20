import React from 'react'

const IdCard = ({firstName, lastName, gender, height, birth, img}) => {
    return(
        <div>
            <p>First name: {firstName}</p>
            <p>Last name: {lastName}</p>
            <p>Gender: {gender}</p>
            <p>Hight: {height}</p>
            <p>Birth: {birth.toDateString()}</p>
            <img src={img} alt="" />
        </div>
    )
}

export default IdCard
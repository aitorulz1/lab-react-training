import React from 'react'



const BoxColor = ({r, g, b, rgb, pattern, fontColor}) => {

    const divStyle = {
        backgroundColor: `rgb(${r}, ${g}, ${b})`, 
        border: '1px solid #000',
        padding: '30px 50px',
        margin: '3%',
        textAlign: 'center',
        fontWeight: '600',
        fontSize: '30px',
    }

    return(
        <div style={divStyle}>
            <div style={{color: fontColor}}>{rgb}<br />
            {pattern}</div>
        </div>
    )
}

export default BoxColor
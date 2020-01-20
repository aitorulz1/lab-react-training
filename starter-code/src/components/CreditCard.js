import React from 'react'

const CreditCard = ({number, bank, owner, hex, info, fontColor, logo}) => {


    return(
        <div className="credit-card" style={{backgroundColor: hex, width:'300px', height:'150px', float: 'left', margin:'5%', padding:'2% 3%', borderRadius: '10px'}}>
            <div className="card-logo" style={{width: '100%', float:'right'}}>
                <img src={logo} alt="" style={{width: '80px', float: 'right', paddingBottom: '20px'}} />
            </div>
        <div className="card-number">
            <p style={{color: fontColor, fontSize:'20px', paddingTop: '3%'}}>{number}</p>
        </div>
        <div className="card-data">
            <p className="card-info" style={{color: fontColor}}>{info + " " + bank}</p>
            <p className="card-person" style={{color: fontColor}}>{owner}</p>
        </div>
        </div>
    )
}

export default CreditCard
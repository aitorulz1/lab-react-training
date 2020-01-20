import React from 'react'


const DriverCard = ({name, rating, img, car, model, licensePlate}) => {



    return(

    <div className="DriverCard-Container" style={{backgroundColor: '#455eb5', width: '100%', padding: '2%', margin: '2.5% 0%', display: 'inline-block', borderRadius: '10px', position: 'relative', color: '#fff', height: '190px'  }}>
        <div className="DriverCard-Container-Container" style={{margin: '0 auto', width: '100%', maxWidth: '60%', minHeight: '190px', position: 'absolute', top: '50%', left: '50%', transform:'translate(-50%, -50%)', marginLeft: '30px'}}>
                <img className="image" src={img} style={{borderRadius: '50%', width: '175px', float:'left'}} alt="" />
                    <div className="DriveCard-Data">
                    <div className="name" style={{fontSize:'35px', margin:'2% 0%'}}>{name}</div>
                    <div className="rating" style={{margin:'2% 0%'}}>{rating}</div>
                    <div className="car" style={{fontSize:'20px', margin:'2% 0%', float: 'left'}}>{car.model} </div><div className="car" style={{fontSize:'20px', margin:'2% 0%', float: 'left'}}> - {car.licensePlate}</div>
                    
                    </div>
            </div>
        </div>
    )
}

export default DriverCard
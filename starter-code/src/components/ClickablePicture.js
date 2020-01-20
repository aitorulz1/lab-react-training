import React, {Component} from 'react'

class ClickablePicture extends Component {


    state = {
        clicked: false
    }

    handleClicked() {
        this.setState({ clicked: !this.state.clicked })
    }

     render (){
         
      return <img className="ClicablePicture" onClick={() => this.handleClicked()} src={!this.state.clicked ? this.props.img : this.props.imgClicked} alt="" />
      
    }
     
}



export default ClickablePicture
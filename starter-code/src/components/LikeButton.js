import React, {Component} from 'react'

class LikeButton extends Component {


    state = {
        count: 0,
        countColor: 0,
        colors: ['purple','blue','green','yellow','orange','red']
    }

    changeColor() {
        this.setState({ countColor: Math.floor(Math.random() * this.state.colors.length - 1), count: this.state.count + 1 })
    }

     render (){
         
      return(
            <button onClick={() => this.changeColor()} style={{ fontSize: '28px', color: '#fff' ,padding: '20px 70px',backgroundColor: `${this.state.colors[this.state.countColor]}`}}>
                {this.state.count} Likes
            </button>
      )  
    }
     
}



export default LikeButton
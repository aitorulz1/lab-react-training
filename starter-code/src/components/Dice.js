import React, {Component} from 'react'

class Dice extends Component {

        state= {
            img: `img/dice${Math.floor(Math.random() * 6) +1}.png`
       }

       randomNumber() {
           this.setState({
               img: `/img/dice-empty.png`
           })

           setTimeout(() => {
               this.setState({
                   img: `/img/dice${Math.floor(Math.random() * 6) + 1}.png`
               })
           }, 1000)
       }

       render() {
           return(
               <img 
               className="Dice" 
               onClick= {() => this.randomNumber()} 
               src={this.state.img} 
               alt="dice" />
           )
       }

}

export default Dice


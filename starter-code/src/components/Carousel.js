import React, {Component} from 'react'

export default class Carousel extends Component {

    state = {
        imgPosition: 0
    }

    changeDirection(e) {
        if (e === 'back' && this.state.imgPosition === 0) {
            this.setState({
                imgPosition: this.props.imgs.length - 1
            })
        }
    }


    render() {
        return(
            <div className="Carousel">
                <button onClick={() => this.changeDirection('back')} >Left</button>
                <img src={this.props.imgs[this.state.imgPosition]} alt="" />
                <button onClick={() => this.changeDirection('next')}>Right</button>
            </div>
        )
    }

}
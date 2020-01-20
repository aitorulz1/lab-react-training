import React, { Component } from 'react'
import IdCard from './components/IdCard'
import Greetings from './components/Greetings'
import Random from './components/Random'
import BoxColor from './components/BoxColor'
import CreditCard from './components/CreditCard'
import Rating from './components/Rating'
import DriverCard from './components/DriverCard'
import LikeButton from './components/LikeButton'
import ClickablePicture from './components/ClickablePicture'
import Dice from './components/Dice'
import Carousel from './components/Carousel'
import NumbersTable from './components/NumbersTable'


class App extends Component {


  render() {
    return (
      <div className="App" style={{width: '100%', maxWidth:'960px', margin:'0 auto'}} >
        <h1>IdCard</h1>
        <IdCard 
        lastName= "John"
        firstName= "Doe"
        gender= "male"
        birth={new Date("1992-07-14")}
        img="https://randomuser.me/api/portraits/men/44.jpg"
        />

        <IdCard 
        lastName='Delores '
        firstName='Obrien'
        gender='female'
        height={172}
        birth={new Date("1988-05-11")}
        img="https://randomuser.me/api/portraits/women/44.jpg"
      />

        <h1 style={{width: '100%' }}>Greetings</h1>
          <Greetings text = "Hallo Ludwig"/>
          <Greetings text = "Bonjour François"/>


        <h1>Random</h1>
          <Random 
          min = "1" 
          max = "6"/>
          <Random 
          min = "1" 
          max = "100"/>

          

        <h1>BoxColor</h1>
        <BoxColor 
          r = "255"
          g = "0"
          b = "0"
          rgb = 'rgb(255,0,0)'
          pattern = '#ff0000'
          fontColor = '#fff'
        />
        <BoxColor 
          r = "128"
          g = "255"
          b = "0"
          rgb = 'rgb(255,0,0)'
          pattern = '#ff0000'
          fontColor = '#000'
        />



        <h1>CreditCard</h1>

        <CreditCard 
            hex="#11a998"
            logo="https://5c6c2a0de07b084ce35373ee--determined-aryabhata-a8a833.netlify.com/img/visa.png"
            info="03 2021"
            fontColor="#fff"
            type="Visa"
            number="✡︎✡︎✡︎✡︎ ✡︎✡︎✡︎✡︎ ✡︎✡︎✡︎✡︎ 8845"
            expirationMonth={3}
            expirationYear={2021}
            bank="BNP"
            owner="Maxence Bouret"
            bgColor="#11aa99"
            color="white" 
            />
      
        <CreditCard
            hex="#edeeed"
            logo="https://5c6c2a0de07b084ce35373ee--determined-aryabhata-a8a833.netlify.com/img/master-card.svg"
            info="03 2021"
            fontColor="#000"
            type="Master Card"
            number="✡︎✡︎✡︎✡︎ ✡︎✡︎✡︎✡︎ ✡︎✡︎✡︎✡︎ 0995"
            expirationMonth={3}
            expirationYear={2021}
            bank="N26"
            owner="Maxence Bouret"
            bgColor="#eeeeee"
            color="#222222" 
            />
         
        <CreditCard 
            hex="#ddba55"
            logo="https://5c6c2a0de07b084ce35373ee--determined-aryabhata-a8a833.netlify.com/img/master-card.svg"
            info="12/19"
            fontColor="#fff"
            type="Visa"
            number="✡︎✡︎✡︎✡︎ ✡︎✡︎✡︎✡︎ ✡︎✡︎✡︎✡︎ 6984"
            expirationMonth={12}
            expirationYear={2019}
            bank="Name of the Bank"
            owner="Firstname Lastname"
            bgColor="#ddbb55"
            color="white" 
            />




        <h1>Rating</h1>
        <Rating rating="0"  />
        <Rating rating="1.49"  />
        <Rating rating="1.5"  />
        <Rating rating="3"  />
        <Rating rating="4"  />
        <Rating rating="5"  />




        
        <h1>DriverCard</h1>
        <DriverCard 
            name="Travis Kalanick"
            rating={4.2}
            img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
            car={{
              model: "Toyota Corolla Altis",
              licensePlate: "CO42DE"
        }} />

        <DriverCard 
            name="Dara Khosrowshahi"
            rating={4.9}
            img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
            car={{
              model: "Audi A3",
              licensePlate: "BE33ER"
        }} />



        <h1>LikeButton</h1>
        <LikeButton />
        <LikeButton />
        


        <h1>ClickablePicture</h1>

        <ClickablePicture
            img="/img/persons/maxence.png"
            imgClicked="/img/persons/maxence-glasses.png" />


        <h1>Dice</h1>
        <Dice />


        <h1>Carousel</h1>
        <Carousel
        imgs={
          [
          "https://randomuser.me/api/portraits/women/1.jpg", 
          "https://randomuser.me/api/portraits/men/1.jpg",
          "https://randomuser.me/api/portraits/women/2.jpg", 
          "https://randomuser.me/api/portraits/men/2.jpg"
          ]
          } />



          <h1>Numbers Table</h1>

          <NumbersTable limit={12} />











      </div>      
    );
  }
}

export default App;

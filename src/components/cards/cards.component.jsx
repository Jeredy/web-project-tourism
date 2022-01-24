import React from 'react';
import './cards.styles.css';
import CardItem from '../card-item/card-item.component';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
              label='Adventure'
              path='/services'
            />
            <CardItem
              src='http://cdn.cnn.com/cnnnext/dam/assets/171204124343-01-aspen-non-skiers.jpg'
              text='Travel through the Islands of Bali in a Private Cruise'
              label='Luxury'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG6bmAmj_fF4z8BH9NFpB7qnCVqJTFPXVJUw3PRBUWYLvy4-FJgvkkPk9Oa3rhCZVab54&usqp=CAU'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Mystery'
              path='/services'
            />
            <CardItem
              src='https://images.unsplash.com/photo-1579353977828-2a4eab540b9a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2FtcGxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80'
              text='Experience Football on Top of the Himilayan Mountains'
              label='Adventure'
              path='/products'
            />
            <CardItem
              src='https://thumbs.dreamstime.com/b/foliage-new-jersey-ramapo-lake-my-favorite-place-end-october-nature-exposes-here-all-its-colorful-beauty-god-paints-earth-121308467.jpg'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Adrenaline'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
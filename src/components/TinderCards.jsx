import { useEffect, useState } from 'react';

import TinderCard from 'react-tinder-card';

import axios from '../utils/axios';

import './tinderCards.css';

const TinderCards = () => {
  // const [people, setPeople] = useState([
  //   {
  //     name: 'mohammed',
  //     url: './tinder.png'
  //   },
  //   {
  //     name: 'ahmed',
  //     url: './tinder.png'
  //   }
  // ])

  const [people, setPeople] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const req = await axios.get('/tinder/cards')

      setPeople(req.data)
    }

    fetchData()
  }, [])

  const swiped = (direction, nameToDelete) => {
    console.log("removing: " + nameToDelete)
    // setLastDirection(direction)
  }

  const outOfFrame = (name) => {
    console.log(name + ' left the screen')
  }

  return (
    <div className="tinderCards">
      <div className="tinderCards__cardContainer">
        {people?.map((person, i) => (

          <TinderCard
            className='swipe'
            key={i}
            preventSwipe={['Up', 'Down']}
            onSwipe={(dir) => swiped(dir, person.name)}
            onCardLeftScreen={() => outOfFrame(person.name)}
          >
            <div
              className='card'
              style={{ backgroundImage: `url('${person.imgUrl}')` }}>
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  )
}

export default TinderCards
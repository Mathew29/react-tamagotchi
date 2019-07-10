import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment';
import Egg from '../assets/img/tamagotchi.svg';

function Tamagotchi(props) {

    function handleNewTimerStartOnClick(event) {
        event.preventDefault();
        console.log(props);
        
        props.onNewTimerStart({timeOpen: new Moment()});
    }

  return (
    <div>

      <img src={Egg} />

      <div>
        <h1>Timer: <span>{props.formattedWaitTime}</span></h1>
        <h2>Hunger Level: <span>{props.hungerLevel}</span></h2>
        <h2>Play Level: <span>{props.playLevel}</span></h2>
        <h2>Health Level: <span>{props.healthLevel}</span></h2>
        <h2>Clean Level: <span>{props.cleanLevel}</span></h2>
        <h2>Poop Level: <span>{props.poopLevel}</span></h2>
        <button onClick={handleNewTimerStartOnClick}>Start Timer</button>
      </div>
    </div>
  );
}

function displayTimeOpen(timeOpen) {
  return timeOpen.from(new Moment(), true);
}

Tamagotchi.propTypes = {
  hungerLevel: PropTypes.string.isRequired,
  playLevel: PropTypes.string.isRequired,
  healthLevel: PropTypes.string.isRequired,
  cleanLevel: PropTypes.string.isRequired,
  poopLevel: PropTypes.string.isRequired,
  formattedWaitTime: PropTypes.string.isRequired,
  onNewTimerStart: PropTypes.func
};

export default Tamagotchi;
import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment';

function Tamagotchi(props) {
    return (
        <div>
            <div>
                <h2>{props.hungerLevel}</h2>
                <h2>{props.playLevel}</h2>
                <h2>{props.healthLevel}</h2>
                <h2>{props.cleanLevel}</h2>
                <h2>{props.poopLevel}</h2>

            </div>
        </div>
    )
}

function displayTimeOpen(timeOpen) {
    return timeOpen.from(new Moment(), true);
}

Tamagotchi.propTypes = {
    name: PropTypes.string.isRequired
};

export default Tamagotchi
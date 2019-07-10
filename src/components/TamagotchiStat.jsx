import React from 'react';
import Tamagotchi from './Tamagotchi';

let masterTamagotchiStat = [
    {
        hungerLevel: '100',
        playLevel: '100',
        healthLevel: '100',
        cleanLevel: '100',
        poopLevel: '100'
    }
]

function TamagotchiStat(){
    return(
        <div>
            {masterTamagotchiStat.map((stat, index) =>
                <Tamagotchi hungerLevel={stat.hungerLevel}
                playLevel= {stat.playLevel}
                healthLevel= {stat.healthLevel}
                cleanLevel={stat.cleanLevel}
                poopLevel={stat.poopLevel}
                key={index}/>
                )}
        </div>
    )
}

export default TamagotchiStat;
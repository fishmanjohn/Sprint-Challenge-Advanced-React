import React from 'react';


const PlayerCard = (props)=> {
    console.log(props)
return (
    <div className ='playerCard'>
        <h2>Name: {props.data.name}</h2>
        <h2>Country: {props.data.country}</h2>
       

    </div>
)
}
export default PlayerCard;
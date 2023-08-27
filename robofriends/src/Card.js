import React from "react";

// Istället för att skriva props sätt in objectet och ta bort const { name, email, id } = props;
const Card = ({ name, email, id } ) => {
    // destruct - {props.email} o {props.name}. Förenklar allt
    // const { name, email, id } = props;
  return (

    <div className='w-30'>
        
  {/* <div className='tc flex flex-column bg-light-green dib br3 pa4 ma2 grow bw2 shadow-5'> */}
  <div className='tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5'>
     {/* robohash ett API - efter robohash.org/ skriv vad som helst genererar slumpmässig robot */}
    <img alt='robots' src={ `https://robohash.org/${id}?200x200` }  />

    {/* Props måste definieras uppe vid const Card i parantesen om props skall funka */}
    {/* <img alt='robots' src={ `https://robohash.org/${props.id}?200x200` }  /> */}
    <div>
      <h2>{name}</h2>
      <p>{email}</p>

      {/* <h2>{props.name}</h2>
      <p>{props.email}</p> */}

    </div>
  </div>
</div>
  );
};
export default Card;

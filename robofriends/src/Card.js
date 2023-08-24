import React from "react";


const Card = (props) => {
    // destruct - {props.email} o {props.name} etc gör som nedan. Förenklar allt
    const { name, email, id } = props;
  return (

    <div className='w-30'>
        
  <div className='tc flex flex-column bg-light-green dib br3 pa4 ma2 grow bw2 shadow-5'>
     {/* robohash ett API - efter robohash.org/ skriv vad som helst genererar slumpmässig robot */}
    <img alt='robots' src={ `https://robohash.org/${props.id}?200x200` }  />
    <div>
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  </div>
</div>
  );
};
export default Card;

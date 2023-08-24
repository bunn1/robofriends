import React from "react";


const Card = () => {
  return (

    <div className='w-30'>
        
  <div className='flex flex-column bg-light-green dib br3 pa4 ma2 grow bw2 shadow-5'>
     {/* robohash ett API - efter robohash.org/ skriv vad som helst genererar slumpmässig robot */}
    <img alt='robots' src="https://robohash.org/test?200x200" />
    <div>
      <h2>Jane Doe</h2>
      <p>jane.doe@gmail.com</p>
    </div>
  </div>
</div>
  );
};
export default Card;

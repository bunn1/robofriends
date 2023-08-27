import React from "react";
// import robots from './robots';
import Card from "./Card";

const CardList = ({ robots }) => {
  // Obs Rad 9 - 17 har komprimerats till kod nedan rad 22 - 39

  // const cardArray = robots.map((user, i) => {
  //   return <Card key={i} id={robots[i].id} name={robots[i].name} email={robots[i].email} />
  // })

  // return (
  //   <div>
  //     {cardArray}
  //   </div>
  // )

  return (
    <div>
      {robots.map((user, i) => {
        // En array måste ha en key - ex om ett Card försvinner lättare för dator att hålla koll.
        return (
          <Card
            key={i}
            id={robots[i].id}
            name={robots[i].name}
            email={robots[i].email}
          />
        );
      })}
    </div>
  );
};
export default CardList;
